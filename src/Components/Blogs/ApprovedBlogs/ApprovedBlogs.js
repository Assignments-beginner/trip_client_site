import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import "../ApprovedBlogs/ApprovedBlogs.css";
import useAuth from "../../../Hooks/useAuth";

const ApprovedBlogs = () => {
  const { user } = useAuth();
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
                    width="340"
                    height="200"
                    variant="top"
                    src={blog.blogImg}
                  />
                  <Card.Body className="p-4">
                    <Card.Text className="d-flex justify-content-between align-items-center">
                      {" "}
                      <div className="d-flex align-items-center">
                        <strong
                          className="text-dark text-center text-uppercase"
                          style={{ fontSize: "12px" }}
                        >
                          {blog.blogTitle}
                        </strong>
                      </div>
                    </Card.Text>

                    <span className="text-danger text-center">Read more...</span>

                    <Card.Text>
                      <h3>{blog.blogPrice}</h3>
                    </Card.Text>

                    <div className="blogCost">
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
                        src={user.photoURL}
                        alt=""
                      />

                      <span style={{ fontSize: "14px" }}>
                        &nbsp;&nbsp;{user.displayName}
                      </span>
                    </div>

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