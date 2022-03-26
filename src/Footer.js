import React from "react";
import "./Footer.css";
import { Row } from "react-bootstrap";
class Footer extends React.Component {
  render() {
    return (
      <div class="footer">
        <div class="social-icon">
          <a href="#" class="fa fa-linkedin fa-2x social"></a>
          <a href="#" class="fa fa-instagram fa-2x social" target="_blank"></a>
          <a href="#" class="fa fa-github fa-2x social"></a>
          <a
            href="#"
            class="fa fa-facebook-square fa-2x social"
            aria-hidden="true"
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
