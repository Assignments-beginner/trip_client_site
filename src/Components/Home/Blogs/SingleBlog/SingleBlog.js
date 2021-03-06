import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SingleBlog.css";

const SingleBlog = () => {
  const { id } = useParams();
  const [singleBlog, setSingleBlog] = useState([]);
  useEffect(() => {
    fetch(`https://shrouded-headland-08303.herokuapp.com/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleBlog(data));
  }, [id]);
  return (
    <div className="pb-5 mb-3">
      <h2 className="my-5 text-uppercase text-center px-5">
        {singleBlog.blogTitle}
      </h2>
      <Col>
        <Container className="d-flex justify-content-center">
          <img
            //   id="blogImg"
            className="w-75"
            src={singleBlog.blogImg}
            alt=""
          />
        </Container>
        <Container className="w-75">
          <p
            className="blogDescription mx-auto text-justify pt-5"
          >
            {singleBlog.blogDescription}
          </p>
          <div className="my-5">
            <img
              className="rounded-circle user-img me-2"
              width={42}
              height={42}
              src={singleBlog.blogPeopleImg}
              alt=""
            />
            <span className="text-uppercase">{singleBlog.blogPeople}</span>
          </div>
          <Link
            className="pt-5 text-decoration-none text-danger"
            to="/expensiveTrips"
          >
            Back To Home
          </Link>
        </Container>
      </Col>
    </div>
  );
};

export default SingleBlog;
