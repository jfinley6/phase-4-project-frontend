import React, { useState } from "react";
import axios from "axios";

function Login({ handleSuccessfulAuth, setScreen }) {
  const [registration, setRegistration] = useState({
    username: "",
    email: "",
    password: "",
    loginErrors: "",
  });

  const { email, password } = registration;

  function handleChange(event) {
    setRegistration({
      ...registration,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    axios
      .post(
        "http://localhost:3001///sessions",
        {
          user: {
            email: email,
            password: password,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.logged_in) {
          handleSuccessfulAuth(response.data.user);
        }
      })
      .catch((error) => {
        console.log("login error", error);
      });
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column">
      <div className="form-group d-flex flex-column align-items-center">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          name="email"
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Enter email"
          value={email}
          onChange={handleChange}
          required
          autoComplete="off"
        />
      </div>
      <div className="form-group d-flex flex-column align-items-center">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          value={password}
          onChange={handleChange}
          required
          autoComplete="off"
        />
      </div>
      <button className="btn btn-primary mt-2" type="submit">
        Login
      </button>
      <div className="d-flex flex-column align-items-center mt-2">
        <div>Don't have an account?</div>
        <a
          onClick={(e) => {
            e.preventDefault();
            setScreen(false);
          }}
          className="link-secondary"
        >
          Sign Up Here
        </a>
      </div>
    </form>
  );
}

export default Login;
