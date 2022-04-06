import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Aboutus from "./Aboutus";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/football" element={<App sport="football" />} />
      <Route path="/cricket" element={<App sport="cricket" />} />
      <Route path="/hockey" element={<App sport="hockey" />} />
      <Route path="/basketball" element={<App sport="basketball" />} />
      <Route path="/tennis" element={<App sport="tennis" />} />
      <Route path="/Aboutus" element={<Aboutus />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
