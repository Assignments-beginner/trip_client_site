import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Destinations.css";
const Destinations = () => {
  return (
    <div>
      <h2 className="text-center text-uppercase my-5">
        our <strong style={{ color: "#ea3c23" }}>top</strong> destinations
      </h2>
      <Container className="mb-5 pb-5">
        <Row>
          <Col className="london bg-secondary m-2 box">
            <div className="p-5">
              <span
                style={{ textShadow: "2px 2px 0 #000000a2" }}
                className="fs-6 d-block text-white text-uppercase"
              >
                Luxurious
              </span>
              <span className="display-5 d-block fs-2 text-uppercase text-white">
                <strong style={{ textShadow: "4px 3px 0 #000000a2" }}>
                  London
                </strong>
              </span>
            </div>
          </Col>

          <Col className="paris bg-secondary m-2 box">
            <div className="p-5">
              <span
                style={{ textShadow: "2px 2px 0 #000000a2" }}
                className="fs-6 d-block text-white text-uppercase"
              >
                Pretty
              </span>
              <span className="display-5 d-block fs-2 text-uppercase text-white">
                <strong style={{ textShadow: "4px 3px 0 #000000a2" }}>
                  Paris
                </strong>
              </span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="amsterdam bg-secondary m-2 box">
            <div className="p-5">
              <span
                style={{ textShadow: "2px 2px 0 #000000a2" }}
                className="fs-6 d-block text-white text-uppercase"
              >
                Awesome
              </span>
              <span className="display-5 d-block fs-2 text-uppercase text-white">
                <strong style={{ textShadow: "4px 3px 0 #000000a2" }}>
                  Amsterdam
                </strong>
              </span>
            </div>
          </Col>

          <Col className="bercelona bg-secondary m-2 box">
            <div className="p-5">
              <span
                style={{ textShadow: "2px 2px 0 #000000a2" }}
                className="fs-6 d-block text-white text-uppercase"
              >
                Beautiful
              </span>
              <span className="display-5 d-block fs-2 text-uppercase text-white">
                <strong style={{ textShadow: "4px 3px 0 #000000a2" }}>
                  Barcelona
                </strong>
              </span>
            </div>
          </Col>

          <Col className="moscow bg-secondary m-2 box">
            <div className="p-5">
              <span
                style={{ textShadow: "2px 2px 0 #000000a2" }}
                className="fs-6 d-block text-white text-uppercase"
              >
                Marvelous
              </span>
              <span className="display-5 d-block fs-2 text-uppercase text-white">
                <strong style={{ textShadow: "4px 3px 0 #000000a2" }}>
                  Moscow
                </strong>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Destinations;
