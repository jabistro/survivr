import { useState } from "react";
import { useSelector } from "react-redux";
// import { useHistory, useParams, Link } from 'react-router-dom'
import CommentInput from "../CommentInput";
import DeleteComment from "../EditComment/DeleteComment";
import EditComment from "../EditComment/EditComment";
import "./CommentDetail.css";
import CommentUsername from "./CommentUsername";
import ReactTimeAgo from "react-time-ago";
import { FaEdit } from "react-icons/fa";

const CommentDetail = ({ image }) => {
  const comments = Object.values(useSelector((state) => state.comments));
  const imageComments = comments.filter(
    (comment) => comment.imageId === image.id
  );
  const [edit, setEdit] = useState("");
  const sessionUser = useSelector((state) => state.session.user);
  const users = useSelector((state) => state.users);
  // const imageId = useParams().imageId;
  // const image = useSelector(state => state.images)[imageId];
  // const users = useSelector(state => state.users)

  return (
    <div className="comment-detail-wrap">
      {imageComments.map((comment) => (
        <div
          key={comment?.id}
          className={
            !edit
              ? "comment-detail-comments-container"
              : "comment-detail-comments-container-editing"
          }
        >
          <div className="comment-detail-pfp-container">
            <img
              className="comment-detail-pfp"
              alt=""
              src={
                users[comment.userId]?.pfpURL
                  ? users[comment.userId]?.pfpURL
                  : require("../../images/deefault.jpg")
              }
            />
          </div>
          <div className="comment-detail-comments-info">
            <div className="comment-detail-comments-info-and-btns">
              <div className="comment-detail-username-and-createdAt">
                <CommentUsername comment={comment} />
                <div className="comment-detail-createdAt">
                  <ReactTimeAgo
                    className="comment-detail-date"
                    date={comment?.createdAt}
                    locale="en-US"
                    timeStyle="round-minute"
                  />
                </div>
              </div>
              {!edit && sessionUser?.id === comment?.userId && (
                <div className="comment-detail-btns">
                  <FaEdit
                    title="Edit"
                    className="comment-detail-edit-comment-btn"
                    onClick={(e) => setEdit(`comment-${comment?.id}`)}
                  />
                  <DeleteComment
                    className="comment-detail-delete-comment-btn"
                    commentId={comment?.id}
                  />
                </div>
              )}
            </div>
            {sessionUser?.id === comment?.userId &&
            edit === `comment-${comment?.id}` ? (
              <EditComment setEdit={setEdit} comment={comment} image={image} />
            ) : (
              <div key={comment?.id} className="comment-display">
                {comment?.content.split("\n").map((line) => {
                  if (!line) line = "‎";
                  return (
                    <div
                      key={line?.id}
                      id={comment?.id}
                      className="comment-detail-content-lines"
                    >
                      {line}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      ))}
      <CommentInput image={image} />
    </div>
  );
};

export default CommentDetail;
