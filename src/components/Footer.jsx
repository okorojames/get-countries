import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer--section">
      <p className="footer--paragraph">
        Desiged by:{" "}
        <Link
          to="https://twitter.com/okorojames_"
          style={{ color: "rgb(227, 52, 52)" }}
        >
          JamexTech
        </Link>
      </p>
      <p className="footer--paragrapg--2">
        <Link
          to="https://okorojames.netlify.app"
          style={{ color: "rgb(227, 52, 52)" }}
        >
          JamexTech
        </Link>
        &nbsp;&copy;&nbsp;{new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
