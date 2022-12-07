import { csrfFetch } from "./csrf";

const GET_USERS = "/users/GET_USERS";
const CREATE_USER = "/users/CREATE_USER";

const loadUsers = (users) => ({
  type: GET_USERS,
  users,
});

const createUser = (user) => ({
  type: CREATE_USER,
  user,
});

export const getUsers = () => async (dispatch) => {
  const response = await fetch("/api/users");

  if (response.ok) {
    const userList = await response.json();
    dispatch(loadUsers(userList));
    return userList;
  }
};

export const addUser = (user) => async (dispatch) => {
  const response = await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (response.ok) {
    const user = await response.json();
    dispatch(createUser(user));

    return user;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
};

export const editUserThunk = (editUserData) => async (dispatch) => {
  const { id, username, email, pfpURL } = editUserData;
  const formData = new FormData();
  formData.append("id", id);
  formData.append("username", username);
  formData.append("email", email);
  formData.append("pfpURL", pfpURL);
  // formData.append("password", password);
  // if (user) formData.append("image", user);

  const response = await csrfFetch("/api/users", {
    method: "PUT",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  });

  const editedUser = await response.json();

  if (editedUser) {
    dispatch(createUser(editedUser));
  }
  return editedUser;
};

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USERS:
      const allUsers = {};
      action.users.forEach((user) => {
        allUsers[user.id] = user;
      });
      return allUsers;
    case CREATE_USER:
      return { ...state, [action.user.id]: action.user };
    default:
      return state;
  }
};

export default usersReducer;
