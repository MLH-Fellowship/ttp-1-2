import React, { Component } from "react";
import Template from "./Template";
//import { Button } from "reactstrap";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

class InputPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      city: "",
      state: "",
      phoneNum: "",
      email: "",
      summary: "",

      major: "",
      degree: "",
      university: "",
      gradDate: "",
      gpa: "",
      activities: "",
      description: "",

      company: "",
      jobTitle: "",
      location: "",
      employmentType: "",
      startAndEndDate: "",
      duties: "",

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
          <Button outline color="warning" onClick={this.clickToggle}>
            Go Back
          </Button>
        </div>
      ) : (
        // <form onSubmit={this.handleSubmit}>
        //   <h2>Personal Information:</h2>
        //   <label>
        //     First name:
        //     <input
        //       type="text"
        //       name="firstName"
        //       value={this.state.firstName}
        //       onChange={this.handleChange}
        //     />
        //   </label>
        //   <br></br>
        //   <label>
        //     Last name:
        //     <input
        //       type="text"
        //       name="lastName"
        //       value={this.state.lastName}
        //       onChange={this.handleChange}
        //     />
        //   </label>
        //   <br></br>
        //   <label>
        //     City:
        //     <input
        //       type="text"
        //       name="city"
        //       value={this.state.city}
        //       onChange={this.handleChange}
        //     />
        //   </label>
        //   <br></br>
        //   <label>
        //     Phone Number:
        //     <input
        //       type="text"
        //       name="phoneNum"
        //       value={this.state.phoneNum}
        //       onChange={this.handleChange}
        //     />
        //   </label>
        //   <br></br>
        //   <label>
        //     Email:
        //     <input
        //       type="text"
        //       name="email"
        //       value={this.state.email}
        //       onChange={this.handleChange}
        //     />
        //   </label>
        //   <br></br>
        //   <label>
        //     Professional Summary:
        //     <input
        //       type="text"
        //       name="summary"
        //       value={this.state.summary}
        //       onChange={this.handleChange}
        //     />
        //   </label>
        //   <br></br>
        //   <h2>Educational Background</h2>
        //   <label>
        //     University:
        //     <input
        //       type="text"
        //       name="university"
        //       value={this.state.university}
        //       onChange={this.handleChange}
        //     />
        //   </label>
        //   <br></br>
        //   <label>
        //     Major:
        //     <input
        //       type="text"
        //       name="major"
        //       value={this.state.major}
        //       onChange={this.handleChange}
        //     />
        //   </label>
        //   <br></br>
        //   <label>
        //     GPA:
        //     <input
        //       type="text"
        //       name="gpa"
        //       value={this.state.gpa}
        //       onChange={this.handleChange}
        //     />
        //   </label>
        //   <br></br>
        //   <label>
        //     Activities:
        //     <input
        //       type="text"
        //       name="activities"
        //       value={this.state.activities}
        //       onChange={this.handleChange}
        //     />
        //   </label>
        //   <br></br>
        //   <label>
        //     Description:
        //     <input
        //       type="text"
        //       name="description"
        //       value={this.state.description}
        //       onChange={this.handleChange}
        //     />
        //   </label>
        //   <br></br>
        //   <Button outline color="success" onClick={this.clickToggle}>Submit</Button>
        // </form>
        <div>
          <div className="App-header">Resume Builder</div>
          <Form>
            <h2>Personal Information</h2>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="firstName">First Name</Label>
                  <Input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="First name"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="lastName">Last Name</Label>
                  <Input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Last name"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row Form>
              <Col md={4}>
                <FormGroup>
                  <Label for="city">City</Label>
                  <Input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="City"
                    value={this.state.city}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={1}>
                <FormGroup>
                  <Label for="state">State</Label>
                  <Input
                    type="text"
                    name="state"
                    id="state"
                    placeholder="XX"
                    value={this.state.state}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="phoneNum">Phone Number</Label>
                  <Input
                    type="text"
                    name="phoneNum"
                    id="phoneNum"
                    placeholder="xxx-xxx-xxxx"
                    value={this.state.phoneNum}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="example@email.com"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={12}>
                <FormGroup>
                  <Label for="summary">Professional Summary</Label>
                  <Input
                    type="textarea"
                    name="summary"
                    id="summary"
                    placeholder="Summary here"
                    value={this.state.summary}
                    style={{ height: "100px" }}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <h2>Educational Background</h2>
            <Row form>
              <Col md={4}>
                <FormGroup>
                  <Label for="university">University</Label>
                  <Input
                    type="text"
                    name="university"
                    id="university"
                    placeholder="University"
                    value={this.state.university}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="major">Major</Label>
                  <Input
                    type="text"
                    name="major"
                    id="major"
                    placeholder="Major"
                    value={this.state.major}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="degree">Degree</Label>
                  <Input
                    type="text"
                    name="degree"
                    id="degree"
                    placeholder="Degree"
                    value={this.state.degree}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={1}>
                <FormGroup>
                  <Label for="gradDate">Graduation Date</Label>
                  <Input
                    type="text"
                    name="gradDate"
                    id="gradDate"
                    placeholder="mm/yyyy"
                    value={this.state.gradDate}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={1}>
                <FormGroup>
                  <Label for="gpa">GPA</Label>
                  <Input
                    type="text"
                    name="gpa"
                    id="gpa"
                    placeholder="GPA"
                    value={this.state.gpa}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row Form>
              <Col md={12}>
                <FormGroup>
                  <Label for="activities">Extra Curricular Activities</Label>
                  <Input
                    type="textarea"
                    name="activities"
                    id="activities"
                    placeholder="Social activities/clubs"
                    value={this.state.activities}
                    style={{ height: "100px" }}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row Form>
              <Col md={12}>
                <FormGroup>
                  <Label for="description">Description</Label>
                  <Input
                    type="textarea"
                    name="description"
                    id="description"
                    placeholder="Description"
                    value={this.state.description}
                    style={{ height: "100px" }}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>

            <h2>Work Experience</h2>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="jobTitle">Job Title</Label>
                  <Input
                    type="text"
                    name="jobTitle"
                    id="jobTitle"
                    placeholder="Ex: Retail Sales Management"
                    value={this.state.jobTitle}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="company">Company</Label>
                  <Input
                    type="text"
                    name="company"
                    id="company"
                    placeholder="Ex: Microsoft"
                    value={this.state.company}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row Form>
              <Col md={4}>
                <FormGroup>
                  <Label for="startAndEndDate">
                    Start Date - Present/End Date
                  </Label>
                  <Input
                    type="text"
                    name="startAndEndDate"
                    id="startAndEndDate"
                    placeholder="mm/yyyy - mm/yyyy"
                    value={this.state.startAndEndDate}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="location">Location</Label>
                  <Input
                    type="text"
                    name="location"
                    id="location"
                    placeholder="Ex: New York, NY"
                    value={this.state.location}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="employmentType">Employment Type</Label>
                  <Input
                    type="text"
                    name="employmentType"
                    id="employmentType"
                    placeholder="Ex: Part Time"
                    value={this.state.employmentType}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row Form>
              <Col md={12}>
                <FormGroup>
                  <Label for="duties">Description</Label>
                  <Input
                    type="textarea"
                    name="duties"
                    id="duties"
                    placeholder="Description"
                    value={this.state.duties}
                    style={{ height: "100px" }}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Button outline color="success" onClick={this.clickToggle}>
              Submit
            </Button>
          </Form>
        </div>
      );

    return (
      <div>
        {/* <div className="App-header">Resume Builder</div> */}
        {templates}
      </div>
    );
  }
}

export default InputPage;
