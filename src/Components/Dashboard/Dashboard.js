import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Container, Nav } from "react-bootstrap";
import AddReview from "./AddReview/AddReview";
import AddNewBlogs from "./AddNewBlogs/AddNewBlogs";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import ManageAllBlogs from "./ManageAllBlogs/ManageAllBlogs";
import ReadAllBlogs from "./ReadAllBlogs/ReadAllBlogs";
import Tips from "./Tips/Tips";
import useAuth from "../../Hooks/useAuth";
import AdminRoute from "../AdminRoute/AdminRoute";
import "./Dashboard.css";

const Dashboard = () => {
  const { admin } = useAuth();
  let { path, url } = useRouteMatch();
  return (
    <>
      <Container className="mt-5">
        <div className="d-flex">
          <div className="side-menu d-flex justify-content-center align-items-center px-3 mb-5">
            <Nav className="dash-nav">
              <NavLink
                activeClassName="dashboard-navText-active"
                className="dashboard-navText pt-5 mb-5 text-decoration-none text-uppercase"
                to={`${url}/addnewblogs`}
              >
                <div className="icons">
                  <i className="fas fa-plus-square"></i>
                </div>
                <span className="d-navText">Add&nbsp;</span>
                <span className="d-navText">All&nbsp;</span>
                <span className="d-navText">Blogs&nbsp;&nbsp;&nbsp;</span>
              </NavLink>
              <NavLink
                activeClassName="dashboard-navText-active"
                className="dashboard-navText mb-5 text-decoration-none text-uppercase"
                to={`${url}/addreview`}
              >
                <div className="icons">
                  <i className="far fa-comment-alt"></i>
                </div>
                <span className="d-navText">Add Review</span>
              </NavLink>

              {admin && (
                <Nav className="dash-nav">
                  <NavLink
                    activeClassName="dashboard-navText-active"
                    className="dashboard-navText mb-5 text-decoration-none text-uppercase"
                    to={`${url}/ManageAllBlogs`}
                  >
                    <div className="icons">
                      <i className="fas fa-cube"></i>
                    </div>
                    <span className="d-navText">Manage&nbsp;</span>
                    <span className="d-navText">All&nbsp;</span>
                    <span className="d-navText">Blogs&nbsp;&nbsp;&nbsp;</span>
                  </NavLink>

                  <NavLink
                    activeClassName="dashboard-navText-active"
                    className="dashboard-navText mb-5 text-decoration-none text-uppercase"
                    to={`${url}/ReadAllBlogs`}
                  >
                    <div className="icons">
                      <i className="fas fa-book-open"></i>
                    </div>
                    <span className="d-navText">Read&nbsp;</span>
                    <span className="d-navText">All&nbsp;</span>
                    <span className="d-navText">Blogs</span>
                  </NavLink>

                  <NavLink
                    activeClassName="dashboard-navText-active"
                    className="dashboard-navText text-decoration-none text-uppercase mb-5"
                    to={`${url}/makeadmin`}
                  >
                    <div className="icons">
                      <i className="fas fa-user"></i>
                    </div>
                    <span className="d-navText">Make Admin</span>
                  </NavLink>

                  <NavLink
                    activeClassName="dashboard-navText-active"
                    className="dashboard-navText text-decoration-none text-uppercase mb-5"
                    to={`${url}/addnewtips`}
                  >
                    <div className="icons">
                      <i className="far fa-lightbulb"></i>
                    </div>
                    <span className="d-navText">Add New Tips</span>
                  </NavLink>
                </Nav>
              )}
            </Nav>
            {/* 1st div  */}
          </div>

          {/* {Nested Navigation///////////////////////} */}
          <div className="dashboard-section">
            <Switch>
              <Route exact path={path}>
                <AddNewBlogs></AddNewBlogs>
              </Route>

              <Route path={`${path}/addreview`}>
                <AddReview></AddReview>
              </Route>

              <Route path={`${path}/addnewblogs`}>
                <AddNewBlogs></AddNewBlogs>
              </Route>

              <AdminRoute path={`${path}/ManageAllBlogs`}>
                <ManageAllBlogs></ManageAllBlogs>
              </AdminRoute>

              {
                <AdminRoute path={`${path}/ReadAllBlogs`}>
                  <ReadAllBlogs></ReadAllBlogs>
                </AdminRoute>
              }

              <AdminRoute path={`${path}/makeadmin`}>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>

              <AdminRoute path={`${path}/addnewtips`}>
                <Tips></Tips>
              </AdminRoute>
            </Switch>
            {/* 2nd div */}
          </div>

          {/* main div  */}
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
