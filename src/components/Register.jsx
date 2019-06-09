import React, { Component } from "react";
import { register } from "./UserFunctions";
import "../assets/styles/register.scss";

class Register extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    const user = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password
    };
    register(user).then(res => {});
  };

  render() {
    return (
      <div className="register-form">
        <div className="register-form-block">
          <label className="register-form-block-label">First Name</label>
          <input
            type="text"
            name="first_name"
            placeholder="Enter Fist Name"
            value={this.state.first_name}
            onChange={this.onChange}
            className="register-form-input"
          />
        </div>
        <div className="register-form-block">
          <label className="register-form-block-label">Last Name</label>
          <input
            type="text"
            name="last_name"
            placeholder="Enter Last Name"
            value={this.state.last_name}
            onChange={this.onChange}
            className="register-form-input"
          />
        </div>
        <div className="register-form-block">
          <label className="register-form-block-label">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={this.state.email}
            onChange={this.onChange}
            className="register-form-input"
          />
        </div>
        <div className="register-form-block">
          <label className="register-form-block-label">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={this.state.password}
            onChange={this.onChange}
            className="register-form-input"
          />
        </div>
        <div className="register-form-block">
          <button className="register-button" onClick={() => this.onSubmit()}>
            Register
          </button>
        </div>
      </div>
    );
  }
}

export default Register;
