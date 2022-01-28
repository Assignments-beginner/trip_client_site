import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";

const ReadAllBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://shrouded-headland-08303.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
    // .then((data) => console.log(data))
  }, [blogs]);

  return (
    <div>
    <h3 className="dashboard-sectionTitle text-center text-uppercase">
        Read All <span className="text-danger">Blogs</span>
      </h3>
      <h5 className="dashboard-orderTitle text-center text-uppercase mt-3 mb-4">
        Total <strong className="text-danger">{blogs.length}</strong> Blogs
      </h5>
      <Container className="w-100 mb-5">
        <Row className="g-5">
          {/* {blogs.reverse().map((blog) => ( */}
          {blogs.map((blog) => (
            <Col key={blog._id} blog={blog} xl={12} lg={12}>
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
                  height="290"
                  variant="top"
                  className="p-3"
                  src={blog.blogImg}
                />
                <Card.Body className="d-flex flex-column">
                  <strong
                    className="text-dark text-uppercase mb-3 px-3"
                    style={{ fontSize: "20px" }}
                  >
                    {blog.blogTitle}
                  </strong>

                  <p className="px-3 text-justify">{blog.blogDescription}</p>

                  <div className="mt-auto py-3 px-3">
                    <div className="blogCost mt-3">
                      <span style={{ fontSize: "22px" }} className="text-dark">
                        ${blog.blogCost}
                      </span>

                      <Rating
                        style={{ fontSize: "16px" }}
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
    </div>
  );
};

export default ReadAllBlogs;
