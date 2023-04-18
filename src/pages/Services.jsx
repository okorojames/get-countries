import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
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
    <div className="Ofour" style={oFourStyle}>
      <h2
        className="Ofour--header"
        style={{ marginBottom: "20px", fontSize: "32px" }}
      >
        404 COUNTRY NOT FOUND
      </h2>
      <Link to="/" style={styleBtn}>
        Okay
      </Link>
    </div>
  );
};

export default Services;
