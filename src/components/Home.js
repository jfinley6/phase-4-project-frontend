import React from "react";
import Registration from "./auth/Registration";
import Login from "./auth/Login";
import { useHistory } from "react-router-dom";

function Home({ loggedInStatus, handleLogin }) {
  const history = useHistory();

  function handleSuccessfulAuth(data) {
    handleLogin(data)
    history.push("/dashboard");
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Home</h1>
      <h1>Status: {loggedInStatus}</h1>
      <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
      <Login handleSuccessfulAuth={handleSuccessfulAuth} />
    </div>
  );
}

export default Home;
