import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import "../ApprovedBlogs/ApprovedBlogs.css";

const ApprovedBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const size = 6;

  useEffect(() => {
    fetch(
      `https://shrouded-headland-08303.herokuapp.com/blogspagination?page=${page}&&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.blogs);
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [page]);
  return (
    <div>
      <div className="pb-5">
        <Container className="w-100 mb-5">
          <Row className="g-5">
            {blogs.map((blog) => (
              <Col key={blog._id} blog={blog} xl={4} lg={4}>
                <Card
                  style={{
                    borderStyle: "none",
                    boxShadow:
                      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                  }}
                >
                  <Card.Img
                    style={{
                      borderWidth: "5px",
                      borderStyle: "solid",
                      borderImage: "linear-gradient(75deg, #d9534f, #4d0000) 1",
                    }}
                    width="340"
                    height="200"
                    variant="top"
                    className="p-3"
                    src={blog.blogImg}
                  />
                  <Card.Body className="p-4">
                    <Card.Text className="d-flex justify-content-between align-items-center">
                      {" "}
                      <div className="d-flex align-items-center">
                        <strong
                          className="text-danger text-uppercase"
                          style={{ fontSize: "18px" }}
                        >
                          {blog.blogTitle}
                        </strong>
                      </div>
                    </Card.Text>

                    <Card.Text>
                      <h3>{blog.blogPrice}</h3>
                    </Card.Text>

                    <Rating
                      initialRating={blog.blogRating}
                      readonly
                      emptySymbol="far fa-star text-danger"
                      fullSymbol="fas fa-star text-danger"
                    />

                    {/*  <Link
                    to={`/singleblog/${blog._id}`}
                    className="mt-auto"
                  >
                    <Button className="mt-3 px-4" variant="danger">
                      Details
                    </Button>
                  </Link> */}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        <Container className="d-flex justify-content-center">
          <div className="pagination my-4">
            {[...Array(pageCount).keys()].map((number) => (
              <button
                className={number === page ? "selected" : ""}
                key={number}
                onClick={() => setPage(number)}
              >
                {number + 1}
              </button>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ApprovedBlogs;
