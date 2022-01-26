import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Container, Nav } from "react-bootstrap";
import AddReview from "./AddReview/AddReview";
import AddNewBlogs from "./AddNewBlogs/AddNewBlogs";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
import ManageAllBlogs from "./ManageAllBlogs/ManageAllBlogs";
import useAuth from "../../Hooks/useAuth";
import AdminRoute from "../AdminRoute/AdminRoute";
import "./Dashboard.css";

const Dashboard = () => {
  const { admin } = useAuth();
  let { path, url } = useRouteMatch();
  return (
    <>
      <div className="dashboard-text pt-4">
        <span className="text-uppercase text-dark">Dash</span>
        <span className="text-uppercase text-danger">Board</span>
      </div>
      <hr className="new mb-4 mx-auto" />
      <Container className="mt-2">
        <div className="d-flex">
          <div className="side-menu d-flex justify-content-center align-items-center px-3 mb-5">
            <Nav className="dash-nav">
              
              <NavLink
                activeClassName="dashboard-navText-active"
                className="dashboard-navText mb-5 text-decoration-none text-uppercase"
                to={`${url}/addreview`}
              >
                <div className="icons">
                  <i className="far fa-comment-alt"></i>
                </div>{" "}
                <span className="d-navText">Add Review</span>
              </NavLink>
              {admin && (
                <Nav className="dash-nav">
                  <NavLink
                    activeClassName="dashboard-navText-active"
                    className="dashboard-navText mb-5 text-decoration-none text-uppercase"
                    to={`${url}/addnewblogs`}
                  >
                    <div className="icons">
                      <i className="fas fa-plus-square"></i>
                    </div>{" "}
                    <span className="d-navText">Add New Product</span>
                  </NavLink>
                  <NavLink
                    activeClassName="dashboard-navText-active"
                    className="dashboard-navText mb-5 text-decoration-none text-uppercase pe-3"
                    to={`${url}/ManageAllBlogs`}
                  >
                    <div className="icons">
                      <i className="fas fa-cube"></i>
                    </div>{" "}
                    <span className="d-navText">Manage&nbsp;</span>
                    <span className="d-navText">All&nbsp;</span>
                    <span className="d-navText">Products</span>
                  </NavLink>                 

                  <NavLink
                    activeClassName="dashboard-navText-active"
                    className="dashboard-navText text-decoration-none text-uppercase pb-5"
                    to={`${url}/makeadmin`}
                  >
                    <div className="icons">
                      <i className="fas fa-user"></i>
                    </div>{" "}
                    <span className="d-navText">Make Admin</span>
                  </NavLink>
                </Nav>
              )}
            </Nav>
            {/* 1st div  */}
          </div>

          <div className="dashboard-section">
            <Switch>
              <Route exact path={path}>
                <AddNewBlogs></AddNewBlogs>
              </Route>

              <Route path={`${path}/addreview`}>
                <AddReview></AddReview>
              </Route>

              <AdminRoute path={`${path}/addnewblogs`}>
                <AddNewBlogs></AddNewBlogs>
              </AdminRoute>

              <AdminRoute path={`${path}/ManageAllBlogs`}>
                <ManageAllBlogs></ManageAllBlogs>
              </AdminRoute>

              <AdminRoute path={`${path}/makeadmin`}>
                <MakeAdmin></MakeAdmin>
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
