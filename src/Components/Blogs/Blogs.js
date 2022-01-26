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
          <h2 className="text-center display-6 text-uppercase mb-5">
            latest <strong style={{ color: "#ea3c23" }}>blogs</strong>
          </h2>
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
            {/* 1//////// */}
            <div>
              <button onClick={handleShow} className="tipsButton">
                <span>GET INSPIRED</span>
              </button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                  <div className="d-flex justify-content-center">
                    <i
                      style={{ fontSize: "60px" }}
                      className="my-3 far fa-lightbulb"
                    ></i>
                  </div>
                  <p
                    className="px-5 pb-4"
                    style={{ fontSize: "20px", textAlign: "justify" }}
                  >
                    Planning a trip and being on the road is a lot easier than
                    you think. It’s the decision to take that step out the door
                    that is the hardest part. It requires the most change.
                    You’re leaving your old life behind for a new one.
                  </p>
                </Modal.Body>
              </Modal>
            </div>
            {/* 2//////// */}
            <div>
              <button onClick={handleShow} className="tipsButton">
                <span>HOW TO SAVE FOR ANY TRIP</span>
              </button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                  <div className="d-flex justify-content-center">
                    <i
                      style={{ fontSize: "60px" }}
                      className="my-3 far fa-lightbulb"
                    ></i>
                  </div>
                  <p
                    className="px-5 pb-4"
                    style={{ fontSize: "20px", textAlign: "justify" }}
                  >
                    The key to any trip is being smart with your money – and
                    that starts even before you hit the road! It’s important to
                    know how to save and plan your trip so you don’t find
                    yourself running out of money on the road. Here are my best
                    tips and tricks on how to save money for any trip -even if
                    you don’t make a ton of money. I’ve found tons of ways to
                    compound your savings and get on the road faster!
                  </p>
                </Modal.Body>
              </Modal>
            </div>
            {/* 3//////// */}
            <div>
              <button onClick={handleShow} className="tipsButton">
                <span>HOW TO PLAN YOUR TRIP</span>
              </button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                  <div className="d-flex justify-content-center">
                    <i
                      style={{ fontSize: "60px" }}
                      className="my-3 far fa-lightbulb"
                    ></i>
                  </div>
                  <p
                    className="px-5 pb-4"
                    style={{ fontSize: "20px", textAlign: "justify" }}
                  >
                    Planning your trip can be a lot of work! Where do you start?
                    What’s step one? What’s step two? What’s step three? Fret
                    not! This page will give you all the best resources I have
                    for planning your trip from start to finish. These posts go
                    into the nuts and bolts of planning. They will teach you
                    what to do first, second, and third. They will teach you how
                    to narrow down your travel choices, know where to get legit
                    information on the web (besides here), and help you avoid
                    the newbie mistakes I made in the beginning!
                  </p>
                </Modal.Body>
              </Modal>
            </div>
            {/* 4//////// */}
            <div>
              <button onClick={handleShow} className="tipsButton">
                <span>GET THE RIGHT GEAR</span>
              </button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                  <div className="d-flex justify-content-center">
                    <i
                      style={{ fontSize: "60px" }}
                      className="my-3 far fa-lightbulb"
                    ></i>
                  </div>
                  <p
                    className="px-5 pb-4"
                    style={{ fontSize: "20px", textAlign: "justify" }}
                  >
                    Outside a few key things, I don’t think travelers don’t need
                    a lot of gear when they travel (unless you’re hiking and
                    camping). The more you carry, the more you’re weighed down.
                    However, since gear is expensive, making a mistake or two
                    can lead you to wasting money, buying the wrong gear, or
                    traveling with too much stuff. This section will teach you
                    how to buy the right backpack, what to pack, protect your
                    data and teach, and give you some other advanced tips and
                    tricks for the road!
                  </p>
                </Modal.Body>
              </Modal>
            </div>
            {/* 5//////// */}
            <div>
              <button onClick={handleShow} className="tipsButton">
                <span>HOW TO GET CHEAP AIRFARE</span>
              </button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                  <div className="d-flex justify-content-center">
                    <i
                      style={{ fontSize: "60px" }}
                      className="my-3 far fa-lightbulb"
                    ></i>
                  </div>
                  <p
                    className="px-5 pb-4"
                    style={{ fontSize: "20px", textAlign: "justify" }}
                  >
                    Looking for a cheap flight? The cost of airfare is one of
                    the main reasons people don’t travel more. However, thanks
                    to the rise of international budget airlines and deal
                    finding websites, it’s gotten a lot easier to fly around the
                    world on the cheap!
                  </p>
                </Modal.Body>
              </Modal>
            </div>
            {/* 6//////// */}
            <div>
              <button onClick={handleShow} className="tipsButton">
                <span>GET ACCOMMODATION</span>
              </button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                  <div className="d-flex justify-content-center">
                    <i
                      style={{ fontSize: "60px" }}
                      className="my-3 far fa-lightbulb"
                    ></i>
                  </div>
                  <p
                    className="px-5 pb-4"
                    style={{ fontSize: "20px", textAlign: "justify" }}
                  >
                    Accommodation will be one of your biggest daily expenses –
                    and lowering that cost can lead to huge savings. To a lot of
                    people, the choice seems to be either expensive hotels or
                    cheap hostel dorms. But there are many other options
                    available to travelers – whether you are a solo traveler,
                    couple, or family. These articles will help choose the right
                    accommodation for you, find the best deals, avoid being
                    scammed, and break out of the hotel/hostel mold.
                  </p>
                </Modal.Body>
              </Modal>
            </div>
            {/* 7//////// */}
            <div>
              <button onClick={handleShow} className="tipsButton">
                <span>HANDLE LIFE ON THE TRIP</span>
              </button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                  <div className="d-flex justify-content-center">
                    <i
                      style={{ fontSize: "60px" }}
                      className="my-3 far fa-lightbulb"
                    ></i>
                  </div>
                  <p
                    className="px-5 pb-4"
                    style={{ fontSize: "20px", textAlign: "justify" }}
                  >
                    Long-term travel is one of the most exciting, interesting,
                    and learning experiences a person can do in their lifetime.
                    It makes you a far more well-adjusted person, more
                    open-minded, more independent, and more confident.
                  </p>
                </Modal.Body>
              </Modal>
            </div>
          </aside>
        </Col>
      </Row>
    </Container>
  );
};

export default Blogs;
