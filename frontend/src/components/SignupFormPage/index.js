import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            size="50"
            required
          />
        </label>
        <label>
          <input
            type="text"
            value={username}
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
            size="50"
            required
          />
        </label>
        <label>
          <input
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            size="50"
            required
          />
        </label>
        <label>
          <input
            type="password"
            value={confirmPassword}
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            size="50"
            required
          />
        </label>
        <button id="signup-btn" type="submit">Sign Up</button>

        <span>
          By signing up, you agree with Flimg's
          <NavLink to=""> Terms of Services </NavLink>
          and
          <NavLink to=""> Privacy Policy.</NavLink>
        </span>

        <div id="line-sep"></div>

        <p>Already a Flimg member?
          <NavLink to="/login"> Log in here.</NavLink>
        </p>
      </form>
      <div id="cc-text">
        <p>033120190455 by Henry , CC BY</p>
      </div>
    </>
  );
}

export default SignupFormPage;