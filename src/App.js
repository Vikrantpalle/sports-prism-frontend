import React from 'react'
import './App.css';
import LiveContainer from './LiveContainer';
import axios from 'axios';



class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
      isLoading: true,
      data: [],
    };
    
  }

  componentDidMount() {
    axios.get("/sports/"+this.props.sport).then(response => this.setState({data: response.data, isLoading: false}));
  }


  render(){
  return (
    <div className="App">
      {this.state.isLoading ? "loading..." : <LiveContainer matches={this.state.data.data || this.state.data.matches} /> }
    </div>
  );
  }
}

export default App;
