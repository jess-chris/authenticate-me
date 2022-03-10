import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("Enter Email");
  const [username, setUsername] = useState("Enter Username");
  const [password, setPassword] = useState("Enter Password");
  const [confirmPassword, setConfirmPassword] = useState("Confirm Password");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <>
      <form id="signup-form" onSubmit={handleSubmit}>
        <img src="../../includes/blue-pink.svg" style={{height: "1.5rem", width: "1.5rem"}}></img>
        <h6>Sign up for Flimg</h6>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>

        <label>
          <input
            type="text"
            value={email}
            onFocus={(e) => {if(e.target.value === "Enter Email") e.target.value = ""}}
            onBlur={(e) => {if(e.target.value === "") e.target.value = "Enter Email"}}
            onChange={(e) => setEmail(e.target.value)}
            size="50"
            required
          />
        </label>
        <label>
          <input
            type="text"
            value={username}
            onFocus={(e) => {if(e.target.value === "Enter Username") e.target.value = ""}}
            onBlur={(e) => {if(e.target.value === "") e.target.value = "Enter Username"}}
            onChange={(e) => setUsername(e.target.value)}
            size="50"
            required
          />
        </label>
        <label>
          <input
            type={password === "Enter Password" ? "text" : "password"}
            value={password}
            onFocus={(e) => {if(e.target.value === "Enter Password") e.target.value = ""}}
            onBlur={(e) => {if(e.target.value === "") e.target.value = "Enter Password"}}
            onChange={(e) => setPassword(e.target.value)}
            size="50"
            required
          />
        </label>
        <label>
          <input
            type={confirmPassword === "Confirm Password" ? "text" : "password"}
            value={confirmPassword}
            onFocus={(e) => {if(e.target.value === "Confirm Password") e.target.value = "" }}
            onBlur={(e) => {if(e.target.value === "") e.target.value = "Confirm Password"}}
            onChange={(e) => setConfirmPassword(e.target.value)}
            size="50"
            required
          />
        </label>
        <button id="signup-btn" type="submit">Sign Up</button>

        <span>
          By signing up, you agree with Flimg's
          <a href=""> Terms of Services </a>
          and
          <a href=""> Privacy Policy.</a>
        </span>

        <div id="line-sep"></div>

        <p>Already a Flimg member?
          <a href="/login"> Log in here.</a>
        </p>
      </form>
      {/* <div id="under-form-links">
        <div>
          <a>English</a>
          <span>
            <a>Help</a>
            <a>Privacy</a>
            <a>Terms</a>
          </span>
        </div>
      </div> */}
      <div id="cc-text">
        <p>033120190455 by Henry , CC BY</p>
      </div>
    </>
  );
}

export default SignupFormPage;