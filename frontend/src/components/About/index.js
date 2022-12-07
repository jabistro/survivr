import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-wrap">
      <div className="about-container">
        <img
          alt=""
          className="bloop-img"
          src={require("../../images/bloop2.jpg")}
        />
        <p className="about-blurb">
          Survivr was built by software engineer John Allan Hinds. He has had a
          passion for the game of Survivor. He hopes to have a chance to play
          the game someday and test his acumen.
        </p>
      </div>
      <div className="about-links">
        <a
          className="about-linkdin-link"
          href="https://www.linkedin.com/in/john-allan-hinds-2aba11237/"
        >
          Linkdin
          <i id="links" className="fa-brands fa-2xl fa-linkedin"></i>
        </a>
        <a className="about-github-link" href="https://github.com/jabistro">
          Github
          <i id="links" className="fa-brands fa-2xl fa-github"></i>
        </a>
      </div>
    </div>
  );
}

export default About;
