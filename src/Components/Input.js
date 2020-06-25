import React, { Component } from "react";
import Template from "./Template";
import { Button } from 'reactstrap';


class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      city: "",
      phoneNum: "",
      email: "",
      summary: "",
      major: "",
      university: "",
      gpa: "",
      activities: "",
      description: "",
      showTemplate: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  clickToggle = () => {
    this.state.showTemplate === true
      ? this.setState({ showTemplate: false })
      : this.setState({ showTemplate: true });
  };

  render() {
    let templates =
      this.state.showTemplate === true ? (
        <div>
          <Template {...this.state} />
          <Button outline color="warning" onClick={this.clickToggle}>Go Back</Button>
        </div>
      ) : (
        <form onSubmit={this.handleSubmit}>
          <h2>Personal Information:</h2>
          <label>
            First name:
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <label>
            Last name:
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <label>
            City:
            <input
              type="text"
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <label>
            Phone Number:
            <input
              type="text"
              name="phoneNum"
              value={this.state.phoneNum}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <label>
            Professional Summary:
            <input
              type="text"
              name="summary"
              value={this.state.summary}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <h2>Educational Background</h2>
          <label>
            University:
            <input
              type="text"
              name="university"
              value={this.state.university}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <label>
            Major:
            <input
              type="text"
              name="major"
              value={this.state.major}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <label>
            GPA:
            <input
              type="text"
              name="gpa"
              value={this.state.gpa}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <label>
            Activities:
            <input
              type="text"
              name="activities"
              value={this.state.activities}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          <Button outline color="success" onClick={this.clickToggle}>Submit</Button>
        </form>
      );

    return <div>
      <div className = "App-header">
        Resume Builder
      </div>
      {templates}
      </div>;
  }
}

export default Input;
