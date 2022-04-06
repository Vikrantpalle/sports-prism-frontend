import React from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { Navigate } from "react-router-dom";
import "./signin.css";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      errors: {},
      validated: false,
      showPassword: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      user: { ...this.state.user, [e.target.id]: e.target.value },
    });
  };

  handleSubmit = () => {
    axios
      .post("/signin", this.state.user)
      .then((res) => {
        localStorage.setItem(
          "userData",
          JSON.stringify({
            username: res.data.message.name,
            token: res.data.token,
          })
        );
        this.setState({ ...this.state, validated: true });
      })
      .catch((error) => {
        this.setState({
          ...this.state,
          errors: { ...error.response.data.errors },
        });
      });
  };

  render() {
    return (
      <Container fluid className="h-100 w-100 row m-0 p-0">
        {this.state.validated && <Navigate to="/" />}
        <div className="body">
          <div class="head" id="logo">
            <img src={require("./assets/WEBD.png")} alt="Logo" id="first" />
            <h1 id="header">
              <img src={require("./assets/sports.png")} alt="No Image😜😜" />
            </h1>
          </div>

          {/* // <!-- This is the entire box */}
          <div class="box">
            <div class="login">
              <form>
                <h3 id="log">Log In</h3>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    id="email"
                    className="email"
                    onChange={this.handleChange}
                  />
                </div>
                <div id="pass">
                  {/* <!-- Password field --> */}
                  <input
                    type={this.state.showPassword ? "text" : "password"}
                    placeholder="Password"
                    id="password"
                    className="password"
                    onChange={this.handleChange}
                  />

                  {/* <!-- An element to toggle between password visibility --> */}

                  <table>
                    <td id="check">
                      <input
                        type="checkbox"
                        onChange={() =>
                          this.setState({
                            ...this.state,
                            showPassword: !this.state.showPassword,
                          })
                        }
                      />
                    </td>
                    <td id="show">Show Password</td>
                  </table>
                  <input
                    value="  Log In"
                    type=""
                    class="submit"
                    id="submit"
                    onClick={this.handleSubmit}
                  />
                  <a href="/signup">
                    <input
                      type=""
                      value="New User? Create Account"
                      class="submit"
                      id="submituser"
                    />
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default SignIn;
