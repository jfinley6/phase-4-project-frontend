import React from "react";
import { useHistory } from "react-router";
// import {} from "react-icons";

function User({ user }) {
  const history = useHistory();
  console.log(user);
  // const [email, password_digest] = user;
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
                  src="https://media.istockphoto.com/vectors/default-avatar-profile-icon-vector-vector-id1337144146?b=1&k=20&m=1337144146&s=170667a&w=0&h=ys-RUZbXzQ-FQdLstHeWshI4ViJuEhyEa4AzQNQ0rFI="
                  className="img-circle profile-avatar"
                  alt="User avatar"
                />
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">User info</h4>
              </div>
            </div>

            <div className="panel-body">
              <div className="form-group">
                <label className="col-sm-2 control-label">E-mail</label>
                <div className="col-sm-10">
                  <input type="email" className="form-control" />
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
                  <input
                    type="password"
                    className="form-control"
                    value="password-input"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label">New password</label>
                <div className="col-sm-10">
                  <input type="password" className="form-control" />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-10 col-sm-offset-2"></div>
              </div>
              <div className="form-group">
                <div className="col-sm-10 col-sm-offset-2">
                  <button type="submit" className="btn btn-primary">
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
  );
}

export default User;
