import React from "react";
import { Container, Card, Col, Row, Button } from "react-bootstrap";
import Footer from "./Footer";
import "./Home.css";
import NavBar from "./NavBar";
import { motion } from "framer-motion";

const sportData = [
  { src: "football.jpg", title: "Football" },
  { src: "cricket.jpg", title: "Cricket" },
  { src: "basketball.jpg", title: "Basketball" },
  { src: "tennis.jpg", title: "Tennis" },
  { src: "hockey.jpg", title: "Hockey" },
];

const containerVarients = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

class Home extends React.Component {
  render() {
    return (
      <Container fluid className="p-0">
        <NavBar />
        <div class="jumbotron p-3 p-md-5 text-white bg-dark custom">
          <div class="col-md-6 px-0">
            <h1 class="display-4 font-italic">SPORTS PRISM</h1>
            <p class="lead my-3">
              Sports is something that drives people crazy. It can unite people
              as well as divide them. But apart from all of these, people love
              watching sports. Sportsprism is a multisports streaming website
              where the user can choose between a wide range of choices of
              sports and can enjoy live action from each sports.
            </p>
            <p class="lead mb-0">
              <a href="/" class="text-white font-weight-bold">
                Continue reading...
              </a>
            </p>
          </div>
        </div>
        <motion.div
          variants={containerVarients}
          initial="hidden"
          animate="visible"
        >
          <Row xs={1} md={2} className="g-4 p-2">
            {sportData.map((sport) => {
              return (
                <motion.div variants={item}>
                  <Col>
                    <Card>
                      <Card.Img
                        className="card-img"
                        variant="top"
                        src={require("./assets/" + sport.src)}
                      />
                      <Card.Body>
                        <Card.Title>{sport.title}</Card.Title>
                        <Button href={"/" + sport.src.slice(0, -4)}>
                          LIVE MATCHES
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </motion.div>
              );
            })}
          </Row>
        </motion.div>
        <Footer />
      </Container>
    );
  }
}

export default Home;
