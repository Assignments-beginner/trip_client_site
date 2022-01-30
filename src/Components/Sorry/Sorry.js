import React from "react";

const Sorry = () => {
  return (
    <div className="text-center mt-5 pb-5 mb-5">
      <h1>
        Oops! Sorry <br /> You're not an <span className="text-danger">Admin</span>{" "}
      </h1>
      <span className="display-1">
        <i className="mb-5 pb-5 fas fa-exclamation-triangle text-warning"></i>
      </span>
    </div>
  );
};

export default Sorry;
