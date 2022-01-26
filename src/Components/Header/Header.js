import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import travelBoy from "../../Images/travelBoy.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="py-1 bg-dark">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand
            style={{ lineHeight: "1" }}
            className="text-center text-uppercase text-white"
          >
            <span className="d-block fs-4">
              <strong style={{ color: "#EA3C23" }}>trip</strong>
              <img
                width="30"
                height="50"
                className="ms-2"
                src={travelBoy}
                alt=""
              />
              expo
            </span>
            <span
              style={{ fontSize: "12px" }}
              className="mt-2 d-block text-white text-uppercase"
            >
              adventure
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-5 me-auto align-items-center">
              <NavLink
                activeClassName="navs-active"
                className="fs-6 navs me-3 text-decoration-none"
                to="/home"
              >
                Home
              </NavLink>

              <NavLink
                activeClassName="navs-active"
                className="fs-6 navs me-3 text-decoration-none"
                to="/about"
              >
                About
              </NavLink>

              <NavLink
                activeClassName="navs-active"
                className="fs-6 navs me-3 text-decoration-none"
                to="/destinations"
              >
                Destinations
              </NavLink>

              <NavLink
                activeClassName="navs-active"
                className="fs-6 navs me-3 text-decoration-none"
                to="/blogs"
              >
                Blogs
              </NavLink>
            </Nav>

            {/* <Nav className="d-flex align-items-center">
              <div>
                {user?.email && (
                  <img
                    className="rounded-circle user-img"
                    width={32}
                    height={32}
                    src={user.photoURL}
                    alt=""
                  />
                )}
              </div>
              <NavLink
                className="fs-6 ms-3 me-3 text-decoration-none text-white"
                to="#"
              >
                {user.displayName}
              </NavLink>

              {!user?.email && (
                <NavLink
                  activeClassName="navs-active"
                  className="fs-6 navs ms-3 me-3 text-decoration-none"
                  to="/signin"
                >
                  Sign In
                </NavLink>
              )}

              {user?.email && (
                <NavLink
                  activeClassName="navs-active"
                  className="fs-6 navs ms-3 me-3 text-decoration-none"
                  to="/signin"
                  onClick={logOut}
                >
                  Log Out
                </NavLink>
              )}
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
