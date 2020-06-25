import React, { Component } from "react";

class Template extends Component {
  render() {
    return (
      <div>
        <h1>Personal Information</h1>
        <h1>
          {this.props.firstName} {this.props.lastName}
        </h1>
        <h1>{this.props.city}</h1>
        <h1>{this.props.phoneNum}</h1>
        <h1>{this.props.email}</h1>
        <h1>{this.props.summary}</h1>
        <h1>Educational Background</h1>
        <h1>{this.props.university}</h1>
        <h1>{this.props.major}</h1>
        <h1>{this.props.gpa}</h1>
        <h1>{this.props.activities}</h1>
        <h1>{this.props.description}</h1>
      </div>
    );
  }
}

export default Template;
