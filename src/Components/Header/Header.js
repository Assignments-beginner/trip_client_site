import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import travelBoy from "../../Images/travelBoy.png";
import useAuth from "../../Hooks/useAuth";
import "./Header.css";
const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="py-1 bg-dark">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand
            style={{ lineHeight: "1" }}
            className="text-center text-uppercase text-white"
          >
            <span className="d-block fs-4">
              <strong style={{ color: "#EA3C23" }}>trip&nbsp;</strong>
              <img
                width="30"
                height="50"
                className="ms-1 travelBoy"
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

          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav className="align-items-center">
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

              {user?.email && (
                <NavLink
                  activeclassname="navs-active"
                  className="fs-6 navs me-3 text-decoration-none"
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              )}

              {!user?.email && (
                <NavLink
                  activeClassName="navs-active"
                  className="fs-6 navs text-center text-uppercase text-decoration-none"
                  to="/signin"
                >
                  Sign In
                </NavLink>
              )}
            </Nav>

            <Nav className="d-flex align-items-center">
              {user?.email && (
                <div className="d-flex align-items-center userBar">
                  <img
                    className="rounded-circle user-img"
                    width={32}
                    height={32}
                    src={user.photoURL}
                    alt=""
                  />
                  <span style={{ fontSize: "12px" }} className="text-white">
                    &nbsp;{user.displayName}
                  </span>
                  <NavLink
                    style={{ fontSize: "12px" }}
                    className="text-danger ms-2 me-3 text-uppercase text-decoration-none"
                    to="/signin"
                    onClick={logOut}
                  >
                    Log Out
                  </NavLink>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
