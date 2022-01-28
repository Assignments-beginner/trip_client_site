import React from "react";
import { Container } from "react-bootstrap";
import bbc from "../../Images/BBCLogo.png";
import natgeo from "../../Images/NationalGeographicLogo.png";
import cnn from "../../Images/CNNLogo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div
      // style={{ backgroundColor: "whiteSmoke" }}
      className="main-footer w-100 bg-dark"
    >
      <Container className="footer-details py-4">
        {/* ////////////////////// Connect With Us ////////////////////// */}
        <div className="text-center d-grid footer-first-details">
          <p>
            <strong className="text-white text-uppercase">follow Us</strong>
          </p>
          <p className="text-white">Feel Free - Like, Share and Subscribe</p>
          <div className="social-media d-flex justify-content-center fs-4">
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
        </div>

        {/* ////////////////////// Open Hours ////////////////////// */}
        <div className="text-center mt-2 footer-details-top">
          <p className="text-white text-uppercase">
            <strong>We Have been featured in</strong>
          </p>
          <div>
            <img src={cnn} alt="" />
            <img src={bbc} alt="" />
          </div>
          <div>
          <img src={natgeo} alt="" />
          </div>
        </div>

        {/*////////////////////// ADDRESS //////////////////////*/}
        <div className="text-center d-grid footer-details-top">
          <p>
            <strong className="text-white">ADDRESS</strong>
          </p>

          <p className="text-white">California St, Stockton, United States</p>

          <p className="text-white">
            <i style={{ color: "#ea3c23" }} className="fas fa-phone"></i> +1
            209-507-5152
          </p>
        </div>
      </Container>
      <hr className="new" />
      {/* Footer Logo  */}
      <div className="w-100 py-3 bg-dark">
        {/*/////////////////////// Title ////////////////////// */}
        <div className="d-grid justify-content-center">
          <Container>
            <div className="text-white">
              <span className="d-block text-center text-uppercase fs-5">
                <strong style={{ color: "#EA3C23" }}>trip</strong> expo
              </span>
              <span className="copyright">
                Copyright &copy; 2021 All Rights Reserved
              </span>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Footer;
