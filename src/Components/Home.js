import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style/Home.css";
import { Jumbotron, Button } from "reactstrap";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="App-header">Resume Builder</div>

        <div>
          <Jumbotron>
            <h1 className="display-3">Need help creating your resume?</h1>
            <p className="lead">
              With our site, you can create one with the click of a button.
            </p>
            <hr className="my-2" />
            <p>
              Fill in your information to get a professional resume that is
              guaranteed to attract employers!
            </p>
            <p className="lead">
              <Link to="/input">
                <Button outline color="primary">
                  Click here to start
                </Button>
              </Link>
            </p>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default Home;
