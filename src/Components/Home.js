import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style/Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div className = "App-header">
          <h2>Portfolio Builder</h2>
        </div>

        <div className="introduction">
          <h1>Welcome to our Portfolio Builder!</h1>
          <h2>Need help building a portfolio?</h2>

          <h3>
            With our site you can create your resume in a few easy steps! Just
            enter in your info and a resume will be built for you!
          </h3>
        </div>

        <Link to="/input">
          <button>Click here to start</button>
        </Link>
      </div>
    );
  }
}

export default Home;
