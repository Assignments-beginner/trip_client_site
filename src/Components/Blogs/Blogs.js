import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import ApprovedBlogs from "../Blogs/ApprovedBlogs/ApprovedBlogs";
import "../Blogs/Blogs.css";

const Blogs = () => {
  const [tips, setTips] = useState([]);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch("");
  };

  useEffect(() => {
    fetch("https://shrouded-headland-08303.herokuapp.com/tips")
      .then((res) => res.json())
      .then((data) => setTips(data));
  }, []);

  return (
    <Container className="py-5">
      <Row className="d-flex">
        <Col xl="9" lg="9" sm="12">
          <h2 className="text-center display-6 text-uppercase mb-5">
            latest <strong style={{ color: "#ea3c23" }}>blogs</strong>
          </h2>
          <ApprovedBlogs />
        </Col>
        <Col xl="3" lg="3" className="tipsBar">
          <InputGroup className="mb-2">
            <FormControl
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button
              type="submit"
              onClick={handleSubmit}
              variant="danger"
              id="button-addon2"
            >
              <i className="fas fa-search"></i>
            </Button>
          </InputGroup>
          <div className="social-media mb-2 d-flex justify-content-center fs-4">
            <a
              href="https://www.facebook.com/Travelarchitectbd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                style={{ color: "#3b5998" }}
                className="fab fa-facebook px-2"
              ></i>
            </a>
            <a
              href="https://www.youtube.com/watch?v=jU7ZyViNu2U&ab_channel=Tripoto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                style={{ color: "#ea3c23" }}
                className="fab fa-youtube px-2"
              ></i>
            </a>
            <a
              href="https://twitter.com/TravelDelSol"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                style={{ color: "#1DA1F2" }}
                className="fab fa-twitter px-2"
              ></i>
            </a>
          </div>
          <h5
            style={{ fontWeight: "400" }}
            className="text-uppercase text-center pb-2"
          >
            Travel Tips
          </h5>
          <aside>
            {/* 1//////// */}
            {tips.map((tip) => (
              <div key={tip._id} tip={tip}>
                <Link to={`/singletip/${tip._id}`}>
                  <button className="tipsButton mb-2">{tip.tipsTitle}</button>
                </Link>
              </div>
            ))}
          </aside>
        </Col>
      </Row>
    </Container>
  );
};

export default Blogs;
