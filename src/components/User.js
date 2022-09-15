import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";

function User({ user, setUser }) {
  const [userName, setUserName] = useState({
    username: "",
  });
  const [error, setError] = useState("")

  function handleChange(event) {
    setUserName({
      ...userName,
      [event.target.id]: event.target.value,
    });
  }

  function handleSubmit(event) {
    let updatedUsername = userName.username;
    let updatedValue = { username: updatedUsername };

    event.preventDefault();
    axios
      .patch(
        `http://localhost:3001/registrations/${user.id}`,
        {
          user: {
            username: updatedUsername,
          },
        },
        { withCredentials: true }
      )
      .then(() => {
        setError("")
        setUser((user) => ({
          ...user,
          ...updatedValue,
        }));
        setUserName({ username: "" });
      })
      .catch(() => {
        setError("That username has already been taken")
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
              <div className="">
                <img
                  src="https://media.istockphoto.com/vectors/default-avatar-profile-icon-vector-vector-id1337144146?b=1&k=20&m=1337144146&s=170667a&w=0&h=ys-RUZbXzQ-FQdLstHeWshI4ViJuEhyEa4AzQNQ0rFI="
                  alt="User avatar"
                  className="w-25 mb-2 mt-2"
                />
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h2 className="panel-title">User info</h2>
              </div>
            </div>
            <div className="panel-body">
              <form className="form-group-1">
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
                  />
                  {error === "" ? null : <div className="text-danger">{error}</div>}
                  <button
                    type="submit"
                    className="btn btn-primary mt-2"
                    onClick={handleSubmit}
                  >
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
