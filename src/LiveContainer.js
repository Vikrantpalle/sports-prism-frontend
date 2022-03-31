import React from "react";
import LeagueMatchContainer from "./LeagueMatchContainer";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

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

class LiveContainer extends React.Component {
  constructor(props) {
    super(props);
    var result = this.props.matches.reduce(function (rv, x) {
      if (x.league) {
        if (x.home_score && x.away_score) {
          (rv[x.league.name] = rv[x.league.name] || []).push(x);
        }
      } else if (x.series) {
        if (x.state === "LIVE") {
          (rv[x.series.name] = rv[x.series.name] || []).push(x);
        }
      }
      return rv;
    }, {});
    console.log(result);
    this.state = {
      leagues: result,
    };
  }

  render() {
    const keys = Object.keys(this.state.leagues);
    return (
      <motion.div
        variants={containerVarients}
        initial="hidden"
        animate="visible"
      >
        {keys.map((key) => {
          return (
            <motion.div variants={item}>
              <Container fluid>
                <LeagueMatchContainer
                  header={key}
                  matches={this.state.leagues[key]}
                />
              </Container>
            </motion.div>
          );
        })}
      </motion.div>
    );
  }
}

export default LiveContainer;
