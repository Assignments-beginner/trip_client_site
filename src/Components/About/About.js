import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./About.css";
const About = () => {
  return (
    <div className="mb-5 pb-3">
      <h2 className="display-6 text-center text-uppercase my-5">
        about <strong style={{ color: "#ea3c23" }}>us</strong>
      </h2>
      {/* AWARD////////////////////////////////////////////*/}
      <Container className="award mb-5">
        <div className="px-5">
          <h1 className="text-center text-uppercase awardText">
            Trip <strong style={{ color: "#ea3c23" }}>expo</strong> is an award
            winning top Travel blog Platform
          </h1>
        </div>
        <div className="adventures px-5">
          <Row>
            <Col>
              <Link className="text-decoration-none">
                <div className="adventure d-flex align-items-center justify-content-center">
                  <span className="about-shadow text-center text-white text-uppercase fs-4">
                    top rated <br /> trips
                  </span>
                </div>
              </Link>
            </Col>
            <Col>
              <Link className="text-decoration-none">
                <div className="wildlife d-flex align-items-center justify-content-center">
                  <span className="about-shadow text-center text-white text-uppercase fs-4">
                    long <br /> trips
                  </span>
                </div>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link className="text-decoration-none">
                <div className="country d-flex align-items-center justify-content-center">
                  <span className="about-shadow text-center text-white text-uppercase fs-4">
                    short <br /> trips
                  </span>
                </div>
              </Link>
            </Col>
            <Col>
              <Link className="text-decoration-none">
                <div className="ancient d-flex align-items-center justify-content-center">
                  <span className="about-shadow text-center text-white text-uppercase fs-4">
                    expensive <br /> trips
                  </span>
                </div>
              </Link>
            </Col>
          </Row>
        </div>
      </Container>
      {/* DISCOUNT/////////////////////////////////////////*/}
      <Container className="tourPlan mb-5 px-5">
        <Col className="discount">
          <h3 className="discountText p-5 m-3 display-3">
            <strong style={{ color: "#ea3c23" }}>30%</strong> <br /> OFF
          </h3>
        </Col>
        <Col className="px-5">
          <h1 className="text-center text-uppercase display-4">
            Plan Your <br /> <strong style={{ color: "#ea3c23" }}>Trip</strong>{" "}
            with us
          </h1>
          <p className="text-center mt-4">
            Use our free trip planner to get a personalized day by day itinerary
            for your vacation. <strong>Trip Expo</strong> is the new way to plan
            your holiday. Try to pick activities and places suitable to your
            family's interests, and plan your outdoor adventures with the local
            weather in mind.
          </p>
        </Col>
      </Container>
      {/* TOUR GUIDE///////////////////////////////////////*/}
      <Container className="mb-3">
        <h2 className="display-6 text-center text-uppercase mt-3 mb-5">
          why choose <strong style={{ color: "#ea3c23" }}>us</strong>
        </h2>
        <Row className="tourGuides px-3">
          <Col className="tourGuideBox d-flex align-items-center justify-content-center">
            <div className="guide shadow d-flex align-items-center justify-content-center">
              <span className="about-shadow orange text-center">
                2000+ Our worldwide guide
              </span>
            </div>
          </Col>
          <Col className="tourGuideBox d-flex align-items-center justify-content-center">
            <div className="agency shadow d-flex align-items-center justify-content-center">
              <span className="about-shadow orange text-center">
                100% trusted travel agency
              </span>
            </div>{" "}
          </Col>
          <Col className="tourGuideBox d-flex align-items-center justify-content-center">
            <div className="experience shadow d-flex align-items-center justify-content-center">
              <span className="about-shadow orange text-center">
                10 years of travel experience
              </span>
            </div>
          </Col>
          <Col className="tourGuideBox d-flex align-items-center justify-content-center">
            <div className="happy shadow d-flex align-items-center justify-content-center">
              <span className="about-shadow orange text-center">
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
