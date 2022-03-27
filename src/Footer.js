import React from "react";
import "./Footer.css";
import { Row } from "react-bootstrap";
class Footer extends React.Component {
  render() {
    return (
      <div class="footer">
        <div class="social-icon">
          <a
            href="https://www.linkedin.com/"
            class="fa fa-linkedin fa-2x social"
            aria-hidden="true"
            target="_blank"
          ></a>
          <a
            href="https://www.instagram.com/"
            class="fa fa-instagram fa-2x social"
            aria-hidden="true"
            target="_blank"
          ></a>
          <a
            href="https://github.com/"
            class="fa fa-github fa-2x social"
            aria-hidden="true"
            target="_blank"
          ></a>
          <a
            href="https://www.facebook.com/"
            class="fa fa-facebook-square fa-2x social"
            aria-hidden="true"
            target="_blank"
          ></a>
        </div>
        <div class="fluid">
          <Row className="justify-content-center mb-3 mt-5">
            Copyright © 2022 SPORTSPRISM
          </Row>
        </div>
      </div>
    );
  }
}

export default Footer;
