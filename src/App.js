import React from "react";
import "./App.css";
import LiveContainer from "./LiveContainer";
import axios from "axios";
import NavBar from "./NavBar";
import Footer from "./Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get("/" + this.props.sport)
      .then((response) =>
        this.setState({ data: response.data, isLoading: false })
      );
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        {this.state.isLoading ? (
          "loading..."
        ) : (
          <LiveContainer
            matches={this.state.data.data || this.state.data.matches}
          />
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
