import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home'; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SignUp from './SignUp';
import SignIn from './SignIn';


ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/sports/football" element={<App sport="football"/>}/>
      <Route path="/sports/cricket" element={<App sport="cricket"/>}/>
      <Route path="/sports/hockey" element={<App sport="hockey"/>}/>
      <Route path="/sports/basketball" element={<App sport="basketball"/>}/>
      <Route path="/sports/tennis" element={<App sport="tennis"/>}/>
    </Routes>
  </Router>,
  document.getElementById('root')
);
