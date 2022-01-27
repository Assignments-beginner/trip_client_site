import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
const SingleTip = () => {
  const { id } = useParams();
  const [singleTip, setSingleTip] = useState([]);
  useEffect(() => {
    fetch(`https://shrouded-headland-08303.herokuapp.com/tips/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleTip(data));
  }, [id]);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-50 mx-auto">
      <h1 className="display-1 py-5">
        <i className="far fa-lightbulb"></i>
      </h1>
      <p style={{ fontSize: "20px", textAlign: "justify" }}>
        {singleTip.tipsDescription}
      </p>
      <Link className="py-5 mb-5 text-decoration-none text-danger" to="/home">
        Back To Home
      </Link>
    </div>
  );
};

export default SingleTip;
