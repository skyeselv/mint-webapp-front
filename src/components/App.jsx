import React, { Component } from "react";
import "../assets/styles/app.scss";
import "../assets/styles/login.scss";
import logo from "../assets/images/logo.svg";
import logo2 from "../assets/images/logo2.svg";
import About from "../components/About";
import Main from "../components/Main";
import Videos from "../components/Videos";
import Profile from "../components/Profile";
import Register from "../components/Register";
import Error from "../components/Error";
import Modal from "react-awesome-modal";
import { login, register } from "./UserFunctions";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

class App extends Component {
  state = {
    visible: false,
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    redirect: ""
  };

  logOut = e => {
    localStorage.removeItem("usertoken");
    this.setState({ redirect: "/" });
  };

  openModalLogin() {
    this.setState({
      visible: true
    });
  }

  closeModalLogin() {
    this.setState({
      visible: false
    });
  }

  onChangeLogin = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitLogin = e => {
    const user = {
      email: this.state.email,
      password: this.state.password
    };

    login(user).then(res => {
      if (res) {
        this.setState({ redirect: "/profile" });
        this.closeModalLogin();
      }
    });
  };

  renderRedirect = () => {
    if (this.state.redirect === "/profile") {
      this.setState({ redirect: "" });
      return <Redirect to="/profile" />;
    }
    if (this.state.redirect === "/register") {
      this.setState({ redirect: "" });
      return <Redirect to="/register" />;
    }
    if (this.state.redirect === "/") {
      this.setState({ redirect: "" });
      return <Redirect to="/" />;
    }
  };

  render() {
    const buttonStateLogin = (
      <li>
        <button className="navbar-sign-button" onClick={() => this.logOut()}>
          Sign Out
        </button>
      </li>
    );

    const buttonStateLogout = (
      <li>
        <button
          className="navbar-sign-button"
          onClick={() => this.openModalLogin()}
        >
          Sign In
        </button>
      </li>
    );
    return (
      <div className="App">
        <Router>
          <header className="App-header">
            <Link className="App-logo" to="/">
              <img src={logo} alt="logo" />
            </Link>
            <div className="App-navbar">
              <ul>
                <li>
                  <Link className="navbar-link" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="navbar-link" to="/videos">
                    Videos
                  </Link>
                </li>
                <li>
                  <Link className="navbar-link" to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className={`navbar-link${
                      localStorage.usertoken ? "" : "-hidden"
                    }`}
                    to="/profile"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <input
                    className="navbar-search"
                    type="text"
                    placeholder="Search"
                  />
                </li>

                {localStorage.usertoken ? buttonStateLogin : buttonStateLogout}
              </ul>
            </div>
          </header>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Main} />
              <Route
                path="/videos"
                component={localStorage.usertoken ? Videos : Error}
              />
              <Route path="/about" component={About} />
              <Route
                path={"/profile"}
                component={localStorage.usertoken ? Profile : Error}
              />
              <Route path="/register" component={Register} />
            </Switch>
            {this.renderRedirect()}
          </div>
          <div className="App-footer">
            <Link className="App-logo-footer" to="/">
              <img src={logo2} alt="logo" />
            </Link>
            <Modal
              visible={this.state.visible}
              width="450"
              height="300"
              effect="fadeInUp"
              onClickAway={() => this.closeModalLogin()}
            >
              <div className="login-form-container">
                <div className="login-form email-block">
                  <label>Email </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={this.state.email}
                    onChange={this.onChangeLogin}
                    className="login-input email"
                  />
                </div>
                <div className="login-form password-block">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={this.state.password}
                    onChange={this.onChangeLogin}
                    className="login-input password"
                  />
                </div>
                <div>
                  <button
                    className="login-sign-button"
                    onClick={() => this.onSubmitLogin()}
                  >
                    Sign in
                  </button>
                  <button
                    className="login-sign-button"
                    onClick={() => (
                      this.setState({ redirect: "/register" }),
                      this.closeModalLogin()
                    )}
                  >
                    Register
                  </button>
                </div>
              </div>
            </Modal>
            <div className="App-navbar-footer">
              {" "}
              <ul>
                <li>
                  <Link className="navbar-link" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="navbar-link" to="/videos">
                    Videos
                  </Link>
                </li>
                <li>
                  <Link className="navbar-link" to="/about">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
