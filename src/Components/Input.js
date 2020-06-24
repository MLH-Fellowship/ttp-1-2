import React, { Component } from "react";
import { Link } from "react-router-dom";

class Input extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   firstName: "",
    //   lastName: "",
    //   college: "",
    //   city: "",
    // };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(event) {
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //   });
  // }

  // handleSubmit(event) {
  //   alert(
  //     "Values: " +
  //       this.state.firstName +
  //       " " +
  //       this.state.lastName +
  //       " " +
  //       this.state.college +
  //       " " +
  //       this.state.city
  //   );
  //   event.preventDefault();
  // }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label>
          First name:
          <input
            type="text"
            name="firstName"
            // value={this.state.firstName}
            onChange={this.props.handleChange}
          />
        </label>
        <label>
          Last name:
          <input
            type="text"
            name="lastName"
            // value={this.state.lastName}
            onChange={this.props.handleChange}
          />
        </label>
        <label>
          College:
          <input
            type="text"
            name="college"
            // value={this.state.college}
            onChange={this.props.handleChange}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            // value={this.state.city}
            onChange={this.props.handleChange}
          />
        </label>
        <Link to="/template"><input type="submit" value="Submit" /></Link>
      </form>
    );
  }
}

export default Input;
