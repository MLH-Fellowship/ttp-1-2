import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to our Portfolio Builder!</h1>
        <h2>Need help building a portfolio?</h2>
        <h2>
          With our site you can create your resume in a few easy steps! Just
          enter in your info and a resume will be built for you!
        </h2>
        <Link to="/input">
          <button>Click here to start</button>
        </Link>
      </div>
    );
  }
}

export default Home;
