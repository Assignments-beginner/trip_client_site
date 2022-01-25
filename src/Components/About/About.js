import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";
const About = () => {
  return (
    <div className="mb-5 pb-3">
      <h1 className="text-center text-uppercase my-5">
        about <strong style={{ color: "#ea3c23" }}>us</strong>
      </h1>
      {/* AWARD////////////////////////////////////////////*/}
      <Container className="d-flex align-items-center  mb-5">
        <div className="px-5">
          <h1 className="text-center text-uppercase display-4">
            Trip <strong style={{ color: "#ea3c23" }}>toe</strong> is an award
            winning top Tour Booking Platform
          </h1>
        </div>
        <div className="d-flex px-5">
          <Row>
            <Col>
              <div className="adventure d-flex align-items-center justify-content-center">
                <span className="about-shadow text-center text-white text-uppercase fs-4">
                  adventure <br /> tour
                </span>
              </div>
            </Col>
            <Col>
              <div className="wildlife d-flex align-items-center justify-content-center">
                <span className="about-shadow text-center text-white text-uppercase fs-4">
                  wildlife <br /> tour
                </span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="country d-flex align-items-center justify-content-center">
                <span className="about-shadow text-center text-white text-uppercase fs-4">
                  country <br /> tour
                </span>
              </div>
            </Col>
            <Col>
              <div className="ancient d-flex align-items-center justify-content-center">
                <span className="about-shadow text-center text-white text-uppercase fs-4">
                  ancient <br /> tour
                </span>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      {/* DISCOUNT/////////////////////////////////////////*/}
      <Container className="d-flex justify-content-center align-items-center  mb-5">
        <div className="discount me-3">
          <h3 className="text-end p-5 m-3 display-3">
            <strong style={{ color: "#ea3c23" }}>30%</strong> <br /> OFF
          </h3>
        </div>
        <div className="header ms-3">
          <h1 className="text-center text-uppercase display-4">
            Plan Your <strong style={{ color: "#ea3c23" }}>Trip</strong> with us
          </h1>
          <p className="text-justify mt-4">
            Use our free trip planner to get a personalized day by day itinerary
            for your vacation. Trip Toe is the new way to plan your holiday. Try
            to pick activities and places suitable to your family's interests,
            and plan your outdoor adventures with the local weather in mind.
          </p>
        </div>
      </Container>
      {/* TOUR GUIDE///////////////////////////////////////*/}
      <Container className="d-flex flex-column justify-content-center align-items-center  mb-3">
        <h2 className="text-center text-uppercase mt-3 mb-5">
          why choose <strong style={{ color: "#ea3c23" }}>us</strong>
        </h2>
        <Row>
          <Col>
            <div className="guide shadow d-flex align-items-center justify-content-center">
              <span className="about-shadow orange text-center  text-uppercase fs-4">
                2000+ Our worldwide guide
              </span>
            </div>
          </Col>
          <Col>
            <div className="agency shadow d-flex align-items-center justify-content-center">
              <span className="about-shadow orange text-center  text-uppercase fs-4">
                100% trusted travel agency
              </span>
            </div>{" "}
          </Col>
          <Col>
            <div className="experience shadow d-flex align-items-center justify-content-center">
              <span className="about-shadow orange text-center  text-uppercase fs-4">
                10 years of travel experience
              </span>
            </div>
          </Col>
          <Col>
            <div className="happy shadow d-flex align-items-center justify-content-center">
              <span className="about-shadow orange text-center  text-uppercase fs-4">
                90% of our happy traveller
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
