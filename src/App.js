import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import axios from "axios";
import "./index.css";

//Components
import Home from "./components/Home";
import Content from "./components/Content";
import NavBar from "./components/NavBar";
import NewPost from "./components/NewPost";
import User from "./components/User";
import PostDetail from "./components/PostDetail";

function App() {
  const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN");
  const [user, setUser] = useState({});
  const [screen, setScreen] = useState(false);
  const [storedPost, setStoredPost] = useState("");
  const [storedSubject, setStoredSubject] = useState("");
  const [heroku, setHeroku] = useState("not ready");

  const history = useHistory();

  useEffect(() => {
    axios.get("https://mysite-sig2.onrender.com").then((response) => {
      if (response.data.status === "Nobodies home") {
        setHeroku("ready");
        checkLoginStatus();
      }
    });
  }, []);

  function checkLoginStatus() {
    axios
      .get("https://mysite-sig2.onrender.com/logged_in", {
        withCredentials: true,
      })
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
      .delete("https://mysite-sig2.onrender.com/logout", {
        withCredentials: true,
      })
      .then(() => {
        setLoggedInStatus("NOT_LOGGED_IN");
        setUser({});
        history.push("/");
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="app d-flex flex-column justify-content-center">
      {heroku === "not ready" ? (
        <div
          style={{ height: "100vh" }}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <span className="loader"></span>
          <h3>Database Loading</h3>
        </div>
      ) : (
        <>
          <NavBar
            loggedInStatus={loggedInStatus}
            setScreen={setScreen}
            handleLogout={handleLogout}
            user={user}
          />
          <Switch>
            <Route exact path={"/"}>
              <Content loggedInStatus={loggedInStatus} user={user} />
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

            <Route exact path={"/new"}>
              <NewPost
                user={user}
                storedPost={storedPost}
                setStoredPost={setStoredPost}
                setStoredSubject={setStoredSubject}
                storedSubject={storedSubject}
              />
            </Route>

            <Route exact path={"/user"}>
              <User user={user} setUser={setUser} />
            </Route>
            <Route exact path="/posts/:id">
              <PostDetail user={user} loggedInStatus={loggedInStatus} />
            </Route>
          </Switch>
        </>
      )}
    </div>
  );
}

export default App;
