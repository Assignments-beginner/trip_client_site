import React from "react";
import { Container, Button } from "react-bootstrap";
import { useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./SignIn.css";
import google from "../../Images/google.png";

const SignIn = () => {
  const { signInWithGoogle, setIsLoading } = useAuth();

  const location = useLocation();
  const history = useHistory();
  // console.log(location.state?.from);
  const redirect_uri = location.state?.from || "/home";

  const googleLoginHandler = () => {
    signInWithGoogle()
      .then((result) => {
        history.push(redirect_uri);
      })
      .finally(() => setIsLoading(false));
    /* .catch((error) => {
        setError(error.message);
      }); */
  };

  return (
    <div className="signin-banner">
      <div className="custom-margin w-50 mx-auto  d-grid justify-content-center">
        <div>
          <h2 className="sign-shadow text-center text-white text-uppercase">
            Please Sign In
          </h2>
        </div>
        <div className="mt-2">
          <button onClick={googleLoginHandler} className="signin-btn">
            <div className="d-flex align-items-center justify-content-between">
              <img height="32" width="32" src={google} alt="" />{" "}
              <span>Continue With Google</span>{" "}
              <span className="text-white">G</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
