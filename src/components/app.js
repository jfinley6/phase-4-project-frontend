import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Content from "./Content";
import NavBar from "./NavBar";
import axios from "axios";

function App() {
  const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN");
  const [user, setUser] = useState({});
  const [screen, setScreen] = useState(true);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const history = useHistory();

  function checkLoginStatus() {
    axios
      .get("http://localhost:3001/logged_in", { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in && loggedInStatus === "NOT_LOGGED_IN") {
          setLoggedInStatus("LOGGED_IN");
          setUser(response.data.user);
          history.push("/");
        } else if (!response.data.logged_in && loggedInStatus === "LOGGED_IN") {
          setLoggedInStatus("NOT_LOGGED_IN");
          setUser({});
        } else if (!response.data.logged_in) {
          setUser({});
          history.push("/");
        }
      })
      .catch((error) => console.log(error));
  }

  function handleLogin(data) {
    setLoggedInStatus("LOGGED_IN");
    setUser(data);
  }

  function handleLogout() {
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then(() => {
        setLoggedInStatus("NOT_LOGGED_IN");
        setUser({});
        history.push("/");
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="app d-flex flex-column justify-content-center">
      <NavBar loggedInStatus={loggedInStatus} setScreen={setScreen} handleLogout={handleLogout} />
      <Switch>
        <Route exact path={"/"}>
          <Content />
        </Route>
        <Route exact path={"/home"}>
          <Home
            screen={screen}
            setScreen={setScreen}
            loggedInStatus={loggedInStatus}
            setLoggedInStatus={setLoggedInStatus}
            handleLogin={handleLogin}
          />
        </Route>
        {/* <Route exact path={"/dashboard"}>
          <Dashboard
            loggedInStatus={loggedInStatus}
            handleLogout={handleLogout}
          />
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
