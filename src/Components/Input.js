import React, { Component } from "react";

class Input extends Component {
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
      <form onSubmit={this.handleSubmit}>
        <label>
          First name:
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Last name:
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
        </label>
        <label>
          College:
          <input
            type="text"
            name="college"
            value={this.state.college}
            onChange={this.handleChange}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={this.state.city}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Input;
