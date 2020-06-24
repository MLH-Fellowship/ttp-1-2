import React, { Component } from "react";
import Input from "./Input";
class Template extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      college: "",
      city: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    alert(
      "Values: " +
        this.state.firstName +
        " " +
        this.state.lastName +
        " " +
        this.state.college +
        " " +
        this.state.city
    );
    event.preventDefault();
  }


  render() {
    return (
      <div>
        <Input handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        
      </div>
    );
  }
}

export default Template;
