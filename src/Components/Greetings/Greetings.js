import React from "react";
import { Link } from "react-router-dom";
import letsGo from "../../Images/letsGo.png";

const Greetings = ({ backgroundColor = "#F7F7F7", children }) => {
  return (
    <div className="text-center d-flex flex-column justify-content-center align-items-center">
      <h2 className="mt-5 text-uppercase text-dark">
        Thanks for the <br /> <span className="text-danger">registration</span>{" "}
        !
      </h2>
      <Link
        className="text-decoration-none text-center mb-3"
        to="/home"
      >
        <span style={{ color: "#d9534f", fontSize: "20px" }}>Let's Go -></span>
      </Link>
      <div className="pb-5">
        <img height="362" width="192" src={letsGo} alt="" />
      </div>      
    </div>
  );
};

export default Greetings;
