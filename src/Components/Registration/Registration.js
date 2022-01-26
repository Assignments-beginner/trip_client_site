import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Registration = () => {
  const {
    passwordBlurHandler,
    emailBlurHandler,
    nameBlurHandler,
    setUserName,
    email,
    password,
    registerNewUser,
    error,
    setError,
  } = useAuth();

  const location = useLocation();
  const history = useHistory();
  // console.log(location.state?.from);
  const redirect_uri = location.state?.from || "/greetings";

  /*-------------------------------------------------------------------------------*\
  /////////////////////////////// REGISTER HANDLER \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
\*-------------------------------------------------------------------------------*/
  const registrationHandler = (e) => {
    e.preventDefault();
    registerNewUser(email, password)
      .then((result) => {
        //Redirect Path
        history.push(redirect_uri);
        const user = result.user;
        console.log(user);
        setError("");
        //Update displayName 
        setUserName();
        //add user to mongoDB
        addUserToDatabase(user.email);
        window.location.reload();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //Heroku_Problem
  //add user to mongoDB
 
  const addUserToDatabase = (email) => {
    //Heroku_Problem
    // fetch("http://localhost:5000/users", {      
    fetch("https://morning-badlands-81993.herokuapp.com/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  
  //For Remove Error
  const removeError = () => {
    setError("");
  };

  return (
    <Row>
      <Col xl={3} lg={3} sm={12} className="mt-4 mx-auto px-5">
      <p className="text-danger text-uppercase fs-2">Registration</p>
      <Form>
        {/* Name Field */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onClick={removeError}
            onBlur={nameBlurHandler}
            type="text"
            placeholder="Enter Name"
          />
        </Form.Group>
        {/* Email Field */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onClick={removeError}
            onBlur={emailBlurHandler}
            type="email"
            placeholder="Enter Email"
          />
        </Form.Group>
        {/* Password Field */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onClick={removeError}
            onBlur={passwordBlurHandler}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        {/*  Having an account */}
        <div className="mb-3">
          <span>Already have an account?</span>
          &nbsp; &nbsp;
          <Link className="text-danger" onClick={removeError} to="/signin">
            Sign In
          </Link>
        </div>
        {/* Display Error */}

        {/* |.| */}

        <p className="text-danger">{error}</p>

        {/* |.| */}

        {/* Register Button */}
        <div className="mb-5">
          <Button onClick={registrationHandler} variant="danger" type="submit">
            Sign Up
          </Button>
        </div>
      </Form>
    </Col>
    </Row>
  );
};

export default Registration;
