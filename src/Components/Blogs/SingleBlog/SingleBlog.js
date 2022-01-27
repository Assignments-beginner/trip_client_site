import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Col,Container } from "react-bootstrap";
import "../SingleBlog/SingleBlog.css";
const SingleBlog = () => {
  const { id } = useParams();
  const [singleBlog, setSingleBlog] = useState([]);
  useEffect(() => {
    fetch(`https://shrouded-headland-08303.herokuapp.com/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleBlog(data));
  }, [id]);
  return (
    <div>
      <h2 className="my-5 text-uppercase text-center px-3">
        {singleBlog.blogTitle}
      </h2>
      <Col>
        <Container className="d-flex justify-content-center">
          <img
          id="blogImg"
            height="350"
            width="700"
            src={singleBlog.blogImg}
            alt=""
          />
        </Container>
        <p
          style={{ fontSize: "25px", color: "black" }}
          className="w-75 mx-auto text-justify py-5"
        >
          {singleBlog.blogDescription}
        </p>
      </Col>
    </div>
  );
};

export default SingleBlog;
