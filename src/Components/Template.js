import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

class Template extends Component {
  render() {
    return (
      <div className="template">
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
          <div className="Professional-summary">
            <CardHeader tag="h3">Professional Summary</CardHeader>
            <CardBody>
              {/* <CardTitle>Special Title Treatment</CardTitle> */}
              <CardText>
                <ul>
                  <p1> {this.props.summary} </p1>
                </ul>
              </CardText>
            </CardBody>
          </div>
        </Card>

        <Card>
          <div className="Educational-Background">
            <CardHeader tag="h3">Educational Information</CardHeader>
            <CardBody>
              {/* <CardTitle>Special Title Treatment</CardTitle> */}
              <CardText>
                <h5>
                  {" "}
                  {this.props.degree} - {this.props.major}{" "}
                </h5>
                <h5> {this.props.university}</h5>
                <ul>
                  <li> {this.props.gradDate} </li>
                  <li> {this.props.gpa}</li>
                  <li> {this.props.activities}</li>
                  <li> {this.props.description}</li>
                </ul>
              </CardText>
            </CardBody>
          </div>
        </Card>

        <Card>
          <div className="Work-Experience">
            <CardHeader tag="h3">Work Experience</CardHeader>
            <CardBody>
              {/* <CardTitle>Special Title Treatment</CardTitle> */}
              <CardText>
                <h5> {this.props.jobTitle}</h5>
                <h5> {this.props.company}</h5>
                <ul>
                  <li> {this.props.startAndEndDate}</li>
                  <li> {this.props.employmentType}</li>
                  <li> {this.props.location}</li>
                  <li> {this.props.duties}</li>
                </ul>
              </CardText>
            </CardBody>
          </div>
        </Card>
      </div>
      </div>
    );
  }
}

export default Template;
