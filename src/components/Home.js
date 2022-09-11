import React, { useState } from "react";
import Registration from "./auth/Registration";
import Login from "./auth/Login";
import { useHistory } from "react-router-dom";

function Home({ loggedInStatus, handleLogin }) {
  const [screen, setScreen] = useState(true);
  const history = useHistory();

  function handleSuccessfulAuth(data) {
    handleLogin(data);
    history.push("/dashboard");
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Home</h1>
      {screen !== true ? (
        <Registration handleSuccessfulAuth={handleSuccessfulAuth} setScreen={setScreen} />
      ) : null}
      {screen == true ? (
        <Login handleSuccessfulAuth={handleSuccessfulAuth} setScreen={setScreen} />
      ) : null}

    </div>
  );
}

export default Home;
