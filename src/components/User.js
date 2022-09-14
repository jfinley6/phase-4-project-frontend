import React, { useState } from "react";
import { useHistory } from "react-router";
// import {} from "react-icons";
import axios from "axios";
import "../style/User.css";

function User({ user }) {
  const history = useHistory();

  const [userName, setUserName] = useState({
    username: "",
  });
  const [errors, setErrors] = useState([])

  function handleChange(event) {
    setUserName({
      ...userName,
      [event.target.id]: event.target.value,
    });
  }
  function handleSubmit(event) {
    axios
      .patch(
<<<<<<< HEAD
        "http://localhost:3001/registrations",
        {
          user: {
            username: user.username,
=======
        `http://localhost:3001/registrations/${user.id}`,
        {
          user: {
            username: userName.username,
            // email: email,
            password: userName.password,
            password_confirmation: userName.password,
>>>>>>> main
          },
        },
        { withCredentials: true }
      )
<<<<<<< HEAD
      .then((response) => {
        if (response.data.status === "created") {
          handleSuccessfulAuth(response.data.user);
        }
      })
      .catch((error) => {
        console.log("YOU the best", error);
      });
    event.preventDefault();
  }

=======
      
  } 

  
  // async function updateUser(){
  //   const updateData = {
  //       username: userName.username
  //   }
  //   const config = {
  //       method: 'PATCH',
  //       headers: {
  //           'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(updateData)
  //   }
  //   const res = await fetch(`/user/${user.id}`, config)
  //       if (res.ok) {
  //           setUserName({
  //               username: '',
  //           })
  //           setErrors([])
  //       } else {
  //           const messages = await res.json()
  //           setErrors(messages.errors)
  //       }
  //   }

  //   function handleSubmit(e){
  //     e.preventDefault();
  //     updateUser()
  //   }
  // const [email, password_digest] = user;
>>>>>>> main
  return (
    <div>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div className="container bootstrap snippets bootdeys">
        <div className="row">
          <div className="col-xs-12 col-sm-9">
            <div className="panel panel-default">
              <div className="panel-body text-center">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar6.png"
                  className="img-circle profile-avatar"
                  alt="User avatar"
                  id="profile-pic"
                />
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">User info</h4>
              </div>
            </div>
            <div className="panel-body">
              <span className="form-group-1">
                <label className="col-sm-2 control-label">Username</label>
                <h4 className="col-md-10 control-label">{user.username}</h4>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={userName.username}
                    onChange={handleChange}
                    placeholder="New Username"
                    defaultValue="New Username"
                    // value={user.username}
                  />
                </div>
              </span>
              <div className="panel-body">
                <div className="form-group-2">
                  <label className="col-sm-2 control-label">E-mail</label>
                  <div className="col-sm-10">
                    <h4>{user.email}</h4>
                  </div>
                </div>
                <div className="form-group"></div>
              </div>
            </div>

            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">Security</h4>
              </div>
              <div className="panel-body">
                <div className="form-group">
                  <label className="col-sm-2 control-label">
                    Current password
                  </label>
                  <div className="col-sm-10">
<<<<<<< HEAD
                    <input
                      type="password"
                      className="form-control"
                      defaultValue="Password"
                    />
=======
                    <input type="password" className="form-control" value="" />
>>>>>>> main
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">New password</label>
                  <div className="col-sm-10">
                    <input
                      type="password"
                      className="form-control"
<<<<<<< HEAD
                      defaultValue="new-password"
=======
                      value="new-password"
>>>>>>> main
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">
                    Confirm password
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="password"
                      className="form-control"
<<<<<<< HEAD
                      defaultValue="confirm-password"
=======
                      id="password"
                      value={userName.password}
                      onChange={handleChange}
>>>>>>> main
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-10 col-sm-offset-2"></div>
                </div>
                <div className="form-group">
                  <div className="col-sm-10 col-sm-offset-2">
<<<<<<< HEAD
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={handleSubmit}
                    >
=======
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
>>>>>>> main
                      Submit
                    </button>
                    <button type="reset" className="btn btn-default">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default User;
