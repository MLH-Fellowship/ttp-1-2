import React, { Component } from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

class Template extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          {this.props.firstName} {this.props.lastName}
        </div>
        <Card>
          <CardHeader tag="h3">Personal Information</CardHeader>
          <CardBody>
            {/* <CardTitle>Special Title Treatment</CardTitle> */}
            <CardText>
              <ul>
                <h3>
                  {this.props.firstName} {this.props.lastName}
                </h3>
                <h3>{this.props.city}</h3>
                <h3>{this.props.state}</h3>
                <h3>{this.props.phoneNum}</h3>
                <h3> {this.props.email}</h3>
                <h3> {this.props.summary}</h3>
              </ul>
            </CardText>
          </CardBody>
        </Card>

        <Card>
          <CardHeader tag="h3">Educational Information</CardHeader>
          <CardBody>
            {/* <CardTitle>Special Title Treatment</CardTitle> */}
            <CardText>
              <ul>
                <h3> {this.props.university}</h3>
                <h3> {this.props.major}</h3>
                <h3> {this.props.degree}</h3>
                <h3> {this.props.gpa}</h3>
                <h3> {this.props.activities}</h3>
                <h3> {this.props.description}</h3>
              </ul>
            </CardText>
          </CardBody>
        </Card>

        {/* <h1>Personal Information</h1>
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
        <h1>{this.props.degree}</h1>
        <h1>{this.props.gpa}</h1>
        <h1>{this.props.activities}</h1>
        <h1>{this.props.description}</h1> */}
      </div>
    );
  }
}

export default Template;
