import React from "react";
import { Container, Button } from "react-bootstrap";
import axios from "axios";
import { Navigate } from "react-router-dom";
import "./signup.css";
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      errors: {},
      validated: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      user: { ...this.state.user, [e.target.id]: e.target.value },
    });
  };

  handleSubmit = () => {
    axios
      .post("/signup", this.state.user)
      .then((res) => {
        this.setState({ ...this.state, validated: true });
      })
      .catch((error) => {
        this.setState({
          ...this.state,
          errors: { ...error.response.data.errors },
        });
        console.log(this.state);
      });
  };

  render() {
    return (
      <Container fluid className="h-100 row m-0 p-0">
        {this.state.validated && <Navigate to="/signin" />}
        <div className="body1">
          <div class="head" id="logo">
            <img src={require("./assets/WEBD.png")} alt="Logo" id="first" />
            <h1 id="header">
              <img src={require("./assets/sports.png")} alt="No Image" />
            </h1>
          </div>

          <div class="one">
            <p id="head">Create a new account</p>
            <p id="desc">It's quick and easy</p>
            <hr id="rule" />
            <input
              type="name"
              id="name"
              className="firsto"
              placeholder="Username"
              onChange={this.handleChange}
            />

            <br />
            <br />
            <input
              type="email"
              id="email"
              placeholder="Email address"
              className="third1"
              onChange={this.handleChange}
            />
            <br />
            <br />
            <input
              type="password"
              id="password"
              placeholder="Password"
              class="fourth1"
              onChange={this.handleChange}
            />
            <br />
            <br />
            <input
              type="password"
              id="password_confirmation"
              placeholder="Confirm Password"
              class="fourth1"
              onChange={this.handleChange}
            />
            <p id="last">
              By clicking Sign Up,you agree to our
              <a href="https://www.facebook.com/legal/terms/update" class="co">
                Terms
              </a>
              ,
              <a
                href="https://www.facebook.com/about/privacy/update"
                class="co"
              >
                Data Policy
              </a>
              and
              <a href="https://www.facebook.com/policies/cookies/" class="co">
                Cookie Policy.
              </a>
              You may receive SMS notifications from us and can opt out at any
              time.
            </p>
            <Button
              variant="primary"
              className="mt-0"
              id="soup"
              onClick={this.handleSubmit}
            >
              Sign Up
            </Button>
            <div>
              <a href="/signin" id="lies">
                Already have an account?
              </a>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default SignUp;
