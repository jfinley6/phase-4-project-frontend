import React, { Component } from "react";
import axios from "axios";

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      registrationErrors: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    const { email, password, password_confirmation } = this.state;
    axios.post("http://localhost:3001/registrations", {
      user: {
        email: email,
        password: password,
        password_confirmation: password_confirmation,
      },
    },
    { withCredentials: true }
    ).then(response => {
        console.log("registration res", response)
    })
    .catch(error => {
        console.log("registration error", error)
    })
    event.preventDefault();
    event.target.reset()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="d-flex flex-column">
        <div className="form-group d-flex flex-column align-items-center">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-group d-flex flex-column align-items-center">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-group d-flex flex-column align-items-center">
          <label htmlFor="exampleInputPassword1">Password Confirmation</label>
          <input
            type="password"
            name="password_confirmation"
            className="form-control"
            id="exampleInputPassword2"
            placeholder="Password Confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            required
          />
        </div>
        <button className="btn btn-primary mt-2" type="submit">
          Register
        </button>
      </form>
    );
  }
}
