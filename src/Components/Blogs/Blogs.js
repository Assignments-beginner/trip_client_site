import React from "react";
import "./Blogs.css";
import { Container } from "react-bootstrap";
const Blogs = () => {
  return (
    <div style={{ backgroundColor: "#F9FBFF" }}>
      <Container className="p-5">
        {/* (1) Treatments Right */}
        <Container
          style={{ backgroundColor: "whitesmoke" }}
          className="mb-5 p-5 shadow radius"
        >
          <div className="d-flex align-items-center">
            <div className="me-5">
              <div className="pb-5">
                <h3>Urgull Mountain peak</h3>
                <p className="text-justify">
                  The hill became a defense point since the early ages of the
                  city foundation in the 12th century, but the walls and the
                  military structure were reinforced especially after the modern
                  state boundaries took shape in the 16th century.
                </p>
              </div>
              <div>
                <strong className="fs-5">By</strong> &nbsp;{" "}
                <img
                  width="48"
                  height="48"
                  className="rounded-circle"
                  src="https://randomuser.me/api/portraits/women/51.jpg"
                  alt=""
                />{" "}
                <span className="fs-5" style={{ color: "#ea3c23" }}>
                  {" "}
                  &nbsp;Virginia Apgar
                </span>
              </div>
            </div>
            <div>
              <img
                className="
                    rounded-circle
                     custom-border
                  "
                width="300"
                height="300"
                src="https://images.unsplash.com/photo-1584701024909-612cad12f12f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHRvdXJpc3R8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
          </div>
        </Container>

        {/* (2) Treatments Left */}
        <Container
          style={{ backgroundColor: "whitesmoke" }}
          className="mb-5 p-5 shadow radius"
        >
          <div className="d-flex align-items-center">
            <div>
              <img
                className="
                    rounded-circle
                     
                    custom-border
                  "
                width="300"
                height="300"
                src="https://images.unsplash.com/photo-1583128298365-6cf945ea11ee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRvdXJpc3R8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div className="ms-5">
              <div className="pb-5">
                <h3>Qin Mountains Tradition</h3>
                <p className="text-justify">
                  To the north is the densely populated Wei River valley, an
                  ancient center of Chinese civilization. To the south is the
                  Han River valley. To the west is the line of mountains along
                  the northern edge of the Tibetan Plateau.
                </p>
              </div>
              <div>
                <strong className="fs-5">By</strong> &nbsp;{" "}
                <img
                  width="48"
                  height="48"
                  className="rounded-circle"
                  src="https://randomuser.me/api/portraits/men/80.jpg"
                  alt=""
                />{" "}
                <span className="fs-5" style={{ color: "#ea3c23" }}>
                  {" "}
                  &nbsp;Richard Thomson
                </span>
              </div>
            </div>
          </div>
        </Container>

        {/* (3) Treatments Right */}
        <Container
          style={{ backgroundColor: "whitesmoke" }}
          className="mb-5 p-5  shadow radius"
        >
          <div className="d-flex align-items-center">
            <div className="me-5">
              <div className="pb-5">
                <h3>Gondola Punta‎</h3>
                <p className="text-justify">
                  Beginning as early as AD 166–168, the Quadi and Marcomanni
                  destroyed the main Roman town in the area, present-day Oderzo.
                  This part of Roman Italy was again overrun in the early 5th
                  century by the Visigoths and, some 50 years later, by the Huns
                  led by Attila.
                </p>
              </div>
              <div>
                <strong className="fs-5">By</strong> &nbsp;{" "}
                <img
                  width="48"
                  height="48"
                  className="rounded-circle"
                  src="https://randomuser.me/api/portraits/women/52.jpg"
                  alt=""
                />{" "}
                <span className="fs-5" style={{ color: "#ea3c23" }}>
                  {" "}
                  &nbsp;Ana Aslan
                </span>
              </div>
            </div>
            <div>
              <img
                className="
                    rounded-circle
                     custom-border
                  "
                width="300"
                height="300"
                src="https://images.unsplash.com/photo-1597354859765-d94ad451271c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHRvdXJpc3R8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
          </div>
        </Container>

        {/* (4) Treatments Left */}
        <Container
          style={{ backgroundColor: "whitesmoke" }}
          className="mb-5 p-5  shadow radius"
        >
          <div className="d-flex align-items-center">
            <div>
              <img
                className="
                    rounded-circle
                     custom-border
                  "
                width="300"
                height="300"
                src="https://images.unsplash.com/photo-1594026227336-c02a1c8fe4b7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRvdXJpc3R8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <div className="ms-5">
              <div className="pb-5">
                <h3>Musee D'Orsay‎</h3>
                <p className="text-justify">
                  The Musée d'Orsay is a museum in Paris, France, on the Left
                  Bank of the Seine. It is housed in the former Gare d'Orsay, a
                  Beaux-Arts railway station built between 1898 and 1900. The
                  museum holds mainly French art dating from 1848 to 1914,
                  including paintings, sculptures, furniture, and photography.
                </p>
              </div>
              <div>
                <strong className="fs-5">By</strong> &nbsp;{" "}
                <img
                  width="48"
                  height="48"
                  className="rounded-circle"
                  src="https://randomuser.me/api/portraits/men/78.jpg"
                  alt=""
                />{" "}
                <span className="fs-5" style={{ color: "#ea3c23" }}>
                  {" "}
                  &nbsp;Josh Barret
                </span>
              </div>
            </div>
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default Blogs;
