import React, { Component } from "react";
import { Link } from "react-router-dom";
import Template from "./Template"

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      college: "",
      city: "",
      showTemplate: false,
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


  clickToggle = () => {
    this.state.showTemplate === true ? this.setState({ showTemplate: false }) : this.setState({ showTemplate: true });
  };


  render() {

    let templates = this.state.showTemplate === true ? (<div>
      <Template {...this.state} />
      <button onClick={this.clickToggle}>Go Back</button></div>) 
    : (<form onSubmit={this.handleSubmit}>
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
      <input type="submit" value="Submit" onClick={this.clickToggle}/>
    </form>);

    return (
      <div>
        {templates}
      </div>
    );
  }
}

export default Input;
