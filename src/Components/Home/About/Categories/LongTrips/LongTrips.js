import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import "./LongTrips.css";

const LongTrips = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(
      "https://shrouded-headland-08303.herokuapp.com/blogs"
      // `http://localhost:5000/blogs/${cost}`
      // `https://shrouded-headland-08303.herokuapp.com/blogs/${cost}`
    )
      .then((res) => res.json())
      .then((data) => setBlogs(data));
    // .then((data) => console.log(data))
  }, [blogs]);

  return (
    <div className="pb-5">
      <h2 className="display-6 text-center text-uppercase my-5">
        <strong style={{ color: "#ea3c23" }}>Long</strong> Trips
      </h2>
      <Container className="w-100 mb-5">
        <Row className="g-5">
          {blogs.map((blog) => (
            <Col key={blog._id} blog={blog} xl={3} lg={3}>
              <Card
                className="h-100"
                style={{
                  borderStyle: "none",
                  boxShadow:
                    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                }}
              >
                <Card.Img
                  width="340"
                  height="200"
                  variant="top"
                  src={blog.blogImg}
                />
                <Card.Body className="d-flex flex-column">
                  <strong
                    className="text-dark text-uppercase"
                    style={{ fontSize: "12px" }}
                  >
                    {blog.blogTitle}
                  </strong>

                  <div className="mt-auto pt-3">
                    <Link
                      to={`/singleblog/${blog._id}`}
                      className="text-decoration-none"
                    >
                      <span className="text-danger text-center">
                        Read more...
                      </span>
                    </Link>

                    <div className="blogCost mt-3">
                      <span style={{ fontSize: "18px" }} className="text-dark">
                        ${blog.blogCost}
                      </span>

                      <Rating
                        style={{ fontSize: "12px" }}
                        initialRating={blog.blogRating}
                        readonly
                        emptySymbol="far fa-star text-danger"
                        fullSymbol="fas fa-star text-danger"
                      />
                    </div>

                    <div className="mt-4">
                      <img
                        className="rounded-circle user-img"
                        width={26}
                        height={26}
                        src={blog.blogPeopleImg}
                        alt=""
                      />

                      <span style={{ fontSize: "14px" }}>
                        &nbsp;&nbsp;{blog.blogPeople}
                      </span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <div className="d-flex justify-content-center">
        <Link className="pt-5 text-decoration-none text-danger" to="/home">
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default LongTrips;
