import React, { Component } from "react";

class Template extends Component {
  

  render() {
    return (
      <div>
        <h1>{this.props.firstName}</h1>
        <h1>{this.props.lastName}</h1>
        <h1>{this.props.college}</h1>
        <h1>{this.props.city}</h1>
      </div>
    );
  }
}

export default Template;
