import React, { useState } from "react";
import axios from "axios";

function User({ user, setUser }) {
  const [userName, setUserName] = useState({
    username: "",
  });
  const [pictureURL, setPictureURL] = useState("");
  const [error, setError] = useState("");

  function handleChange(event) {
    setUserName({
      ...userName,
      [event.target.id]: event.target.value,
    });
  }

  function handleImageSubmit(event) {
    event.preventDefault();
    let updatedPictureURL = pictureURL;
    let updatedPicture = { picture: updatedPictureURL };

    axios
      .patch(
        `https://mysite-ll4a.onrender.com/picture/${user.id}`,
        {
          user: {
            picture: updatedPictureURL,
          },
        },
        { withCredentials: true }
      )
      .then(() => {
        setError("");
        setUser((user) => ({
          ...user,
          ...updatedPicture,
        }));
        setPictureURL("");
      });
  }

  function handleSubmit(event) {
    let updatedUsername = userName.username;
    let updatedValue = { username: updatedUsername };

    event.preventDefault();
    axios
      .patch(
        `https://mysite-ll4a.onrender.com/registrations/${user.id}`,
        {
          user: {
            username: updatedUsername,
          },
        },
        { withCredentials: true }
      )
      .then(() => {
        setError("");
        setUser((user) => ({
          ...user,
          ...updatedValue,
        }));
        setUserName({ username: "" });
      })
      .catch(() => {
        setError("That username has already been taken");
      });
  }

  return (
    <div>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div className="container bootstrap snippets bootdeys">
        <div className="row">
          <div className="col-xs-12 col-sm-9">
            <div className="panel">
              <div className="d-flex flex-end">
                <img
                  src={user.picture}
                  alt="User avatar"
                  className="w-25 mb-2 mt-2"
                />
                <div className="d-flex flex-column justify-content-end mt-3 mb-2 mx-2 w-100">
                  <form onSubmit={handleImageSubmit}>
                    <input
                      type="url"
                      className="form-control w-100"
                      id="picture"
                      value={pictureURL}
                      onChange={(event) => setPictureURL(event.target.value)}
                      placeholder="New Profile Picture URL"
                      required
                      autoComplete="off"
                    />
                    <button type="submit" className="btn btn-primary mt-2">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h2 className="panel-title">User info</h2>
              </div>
            </div>
            <div className="panel-body">
              <form className="form-group-1" onSubmit={handleSubmit}>
                <label className="col-sm-2 control-label">Email</label>
                <h3 className="col-md-10 control-label">{user.email}</h3>
                <label className="col-sm-2 control-label">Username</label>
                <h3 className="col-md-10 control-label">{user.username}</h3>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={userName.username}
                    onChange={handleChange}
                    placeholder="New Username"
                    required
                    autoComplete="off"
                  />
                  {error === "" ? null : (
                    <div className="text-danger">{error}</div>
                  )}
                  <button type="submit" className="btn btn-primary mt-2">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
