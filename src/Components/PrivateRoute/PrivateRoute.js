import React from "react";
import { Route, Redirect } from "react-router";
import useAuth from "../../Hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  const style = {
    position: "fixed",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  if (isLoading) {
    return (
      <div style={style}>
        <div
          className="spinner-border spinner-border-sm text-danger"
          style={{ width: "3rem", height: "3rem" }}
        ></div>
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{ pathname: "/signin", state: { from: location } }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
