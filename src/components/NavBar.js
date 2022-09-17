import React from "react";
import { useHistory } from "react-router-dom";

function NavBar({ loggedInStatus, setScreen, handleLogout }) {
  const history = useHistory();

  return (
    <nav className="sticky-top navbar navbar-light bg-light justify-content-between align-items-center">
      <h2
        role="button"
        onClick={() => {
          history.push("/");
        }}
        className="mx-3 mb-0"
      >
        Flatiron Blog
      </h2>

      {loggedInStatus === "NOT_LOGGED_IN" ? (
        <div>
          <button
            onClick={() => {
              setScreen(true);
              history.push("/home");
            }}
            className="btn btn-primary my-2 my-sm-0"
            type="submit"
          >
            Login
          </button>
          <button
            onClick={() => {
              setScreen(false);
              history.push("/home");
            }}
            className="btn btn-outline-primary my-2 mx-3 my-sm-0"
            type="submit"
          >
            Signup
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={() => {
              history.push("/user");
            }}
            className="btn btn-primary my-2 mx-2 my-sm-0  "
          >
            Profile
          </button>
          <button
            onClick={() => {
              history.push("/new");
            }}
            className="btn btn-primary my-2 my-sm-0"
            type="submit"
          >
            New Post
          </button>
          <button
            onClick={handleLogout}
            className="btn btn-outline-primary my-2 mx-2 my-sm-0"
            type="submit"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
