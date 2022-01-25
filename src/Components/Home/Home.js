import React from "react";
import {
  Carousel,
  Button,
  Container,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import slideOne from "../../Images/slide1.png";
import slideTwo from "../../Images/slide2.png";
import slideThree from "../../Images/slide3.png";
import About from "../About/About";
import Destinations from "../Destinations/Destinations";
import "./Home.css";
const Home = () => {
  return (
    <div className="pb-4">
      <div className="bg-dark">
        <Carousel>
          <Carousel.Item>
            <img
              style={{ opacity: "0.5" }}
              
              className="d-block w-100 banners"
              src={slideOne}
              alt="First slide"
            />
            <Carousel.Caption>
              <h1 className="text-uppercase tiny-shadow bannerTitle">
                Excitement
              </h1>
              <h4 className="text-uppercase bannerText">check our blogs</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ opacity: "0.5" }}
              
              className="d-block w-100 banners"
              src={slideTwo}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h1 className="text-uppercase tiny-shadow bannerTitle">Explore</h1>
              <h4 className="text-uppercase bannerText">check our blogs</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ opacity: "0.5" }}
              
              className="d-block w-100 banners"
              src={slideThree}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h1 className="text-uppercase tiny-shadow bannerTitle">
                Experience
              </h1>
              <h4 className="text-uppercase bannerText">check our blogs</h4>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <About />
      <Destinations />
      {/* CLIENTS///////////////////////////////////////////////////////////*/}
      <Container>
        <h4 className="text-center text-uppercase pt-4 pb-4 display-6">
          our beloved <strong style={{ color: "#ea3c23" }}>clients</strong>
        </h4>
        <div className="clients">
          {/* Review  */}
          <div className="text-center p-5">
            <div>
              <img
                width="128"
                height="128"
                className="rounded-circle mb-4 shadow"
                src="https://randomuser.me/api/portraits/women/51.jpg"
                alt=""
              />
            </div>
            <div>
              <strong>Virginia Apgar</strong>
              <p>Nice and Classy, everything is available.</p>
            </div>
          </div>
          {/* Review  */}
          <div className="text-center p-5">
            <div>
              <img
                width="128"
                height="128"
                className="rounded-circle mb-4 shadow"
                src="https://randomuser.me/api/portraits/men/78.jpg"
                alt=""
              />
            </div>
            <div>
              <strong>Josh Barret</strong>
              <p>Awesome trip offers and frendly behaviour.</p>
            </div>
          </div>
          {/* Review  */}
          <div className="text-center p-5">
            <div>
              <img
                width="128"
                height="128"
                className="rounded-circle mb-4 shadow"
                src="https://randomuser.me/api/portraits/women/52.jpg"
                alt=""
              />
            </div>
            <div>
              <strong>Ana Aslan</strong>
              <p>Wonderful travel plans for families.</p>
            </div>
          </div>
        </div>
      </Container>
      {/* NewsLetter  */}
      <div
        style={{ borderRadius: "10px" }}
        className="shadow mb-5 mx-auto py-5 d-grid justify-content-center res-newsletter bg"
      >
        <div>
          <h4 className="text-secondary text-uppercase text-center mb-4">
            Subscribe To Our Newsletter For Latest Update
          </h4>
        </div>
        <div>
          <InputGroup className="pb-2">
            <FormControl
              placeholder="Enter Your Email"
              aria-label="Enter Your Email"
            />
            <Button
              className="text-uppercase"
              variant="danger px-4"
              id="button-addon2"
            >
              Subscribe
            </Button>
          </InputGroup>
        </div>
      </div>
      {/* NewsLetter  */}
    </div>
  );
};

export default Home;
