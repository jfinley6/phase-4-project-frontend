import React from "react";
import { useHistory } from "react-router";

function NavBar({ loggedInStatus, setScreen, handleLogout }) {
  const history = useHistory();

  return (
    <nav className="navbar navbar-light bg-light justify-content-between align-items-center">
      <h2
        role="button"
        onClick={() => {
          history.push("/");
        }}
        className="mx-3 mb-0"
      >
        Navbar
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
        <button
          onClick={handleLogout}
          className="btn btn-primary my-2 mx-3 my-sm-0"
          type="submit"
        >
          Logout
        </button>
      )}
    </nav>
  );
}

export default NavBar;
