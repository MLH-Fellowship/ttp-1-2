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
        <div className="Resume-header">
          <h1>
            {this.props.firstName} {this.props.lastName}
          </h1>
          <h6>
            {this.props.city}, {this.props.state} | {this.props.phoneNum} |{" "}
            {this.props.email}
          </h6>
        </div>

        <Card>
          <CardHeader tag="h3">Professional Summary</CardHeader>
          <CardBody>
            {/* <CardTitle>Special Title Treatment</CardTitle> */}
            <CardText>
              <p1> {this.props.summary} </p1>
            </CardText>
          </CardBody>
        </Card>

        <Card>
          <CardHeader tag="h3">Educational Information</CardHeader>
          <CardBody>
            {/* <CardTitle>Special Title Treatment</CardTitle> */}
            <CardText>
              <ul>
                <h5>
                  {" "}
                  {this.props.degree} - {this.props.major}{" "}
                </h5>
                <h5> {this.props.university}</h5>
                <div> {this.props.gradDate} </div>
                <div> {this.props.gpa}</div>
                <div> {this.props.activities}</div>
                <div> {this.props.description}</div>
              </ul>
            </CardText>
          </CardBody>
        </Card>

        <Card>
          <CardHeader tag="h3">Work Experience</CardHeader>
          <CardBody>
            {/* <CardTitle>Special Title Treatment</CardTitle> */}
            <CardText>
              <ul>
                <h5> {this.props.jobTitle}</h5>
                <h5> {this.props.company}</h5>
                <div> {this.props.startAndEndDate}</div>
                <div> {this.props.employmentType}</div>
                <div> {this.props.location}</div>
                <div> {this.props.duties}</div>
              </ul>
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Template;
