import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("Email");
  const [username, setUsername] = useState("Username");
  const [password, setPassword] = useState("Password");
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
    <form id="signup-form" onSubmit={handleSubmit}>
      <h6>Sign up for Flimg</h6>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>

      <label>
        <input
          type="text"
          value={email}
          onFocus={(e) => {if(e.target.value === "Email") e.target.value = ""}}
          onBlur={(e) => {if(e.target.value === "") e.target.value = "Email"}}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        <input
          type="text"
          value={username}
          onFocus={(e) => {if(e.target.value === "Username") e.target.value = ""}}
          onBlur={(e) => {if(e.target.value === "") e.target.value = "Username"}}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label>
        <input
          type={password === "Password" ? "text" : "password"}
          value={password}
          onFocus={(e) => {if(e.target.value === "Password") e.target.value = ""}}
          onBlur={(e) => {if(e.target.value === "") e.target.value = "Password"}}
          onChange={(e) => setPassword(e.target.value)}
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
          required
        />
      </label>
      <button id="signup-btn" type="submit">Sign Up</button>
    </form>
  );
}

export default SignupFormPage;