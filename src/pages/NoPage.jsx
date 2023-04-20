import React from "react";
import { Link } from "react-router-dom";

const NoPage = () => {
  const styleBtn = {
    color: "#ffff",
    background: "rgb(227, 52, 52)",
    fontSize: "16px",
    padding: "8px 16px",
    borderRadius: "8px",
    display: "inline-block",
  };
  const oFourStyle = {
    textAlign: "center",
  };
  return (
    <div className="no--page--section" style={oFourStyle}>
      <p style={{ marginBottom: "20px", fontSize: "32px" }}>No Page Found</p>
      <Link to="/" style={styleBtn}>
        Okay
      </Link>
    </div>
  );
};

export default NoPage;
