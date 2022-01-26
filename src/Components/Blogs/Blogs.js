import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
  Modal,
} from "react-bootstrap";
import "../Blogs/Blogs.css";

const Blogs = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container className="py-5">
      <Row className="d-flex">
        <Col xl="9" lg="9" sm="12" className="border border-danger">
          <h3 className="text-center">Latest Blogs</h3>
        </Col>
        <Col xl="3" lg="3" className="border border-danger">
          <InputGroup className="mb-2">
            <FormControl
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <Button variant="danger" id="button-addon2">
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
            {/* <Button variant="outline-secondary w-100">GET INSPIRED</Button> */}
            <>
              <button onClick={handleShow} className="tipsButton">
                GET INSPIRED
              </button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                  <div className="d-flex justify-content-center">
                    <i style={{ fontSize: "60px",}} className="my-3 far fa-lightbulb"></i>
                  </div>
                  <p style={{ fontSize: "20px", textAlign: "center" }}>
                    Planning a trip and being on the road is a lot easier than
                    you think. It’s the decision to take that step out the door
                    that is the hardest part. It requires the most change.
                    You’re leaving your old life behind for a new one.
                  </p>
                </Modal.Body>
              </Modal>
            </>
          </aside>
        </Col>
      </Row>
    </Container>
  );
};

export default Blogs;
