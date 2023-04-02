import React, { useState } from "react";
import { saveSubmission } from "../services/localStorage";
import { Form, Button, Row, Col } from "react-bootstrap";

const SubmissionForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    description: "",
    coverImage: "",
    hackathonName: "",
    hackathonStartDate: "",
    hackathonEndDate: "",
    githubRepoLink: "",
    otherLinks: [],
    submissionTime: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const submissionData = {
      ...formData,
      submissionTime: new Date().toISOString(),
    };
    saveSubmission(submissionData);
    setSubmitted(true);
    console.log(formData);
  };

  return (
    <div className="m-12">
      <Form onSubmit={handleSubmit}>
        <Row className="m-2">
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              type="text"
              placeholder="Enter title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        </Row>

        <Row className="m-2">
          <Form.Group controlId="formSummary">
            <Form.Label>Summary</Form.Label>
            <Form.Control
              name="summary"
              type="text"
              placeholder="Enter summary"
              value={formData.summary}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        </Row>
        <Row className="m-2">
          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="description"
              as="textarea"
              rows={15}
              placeholder="Enter description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        </Row>

        <Row className="m-2">
          <Form.Group controlId="formCoverImage">
            <Form.Label>Cover Image</Form.Label>
            <Form.Control
              name="coverImage"
              type="file"
              placeholder="Enter cover image URL"
              value={formData.coverImage}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        </Row>

        <Row className="m-2">
          <Form.Group controlId="formHackathonName">
            <Form.Label>Hackathon Name</Form.Label>
            <Form.Control
              name="hackathonName"
              type="text"
              placeholder="Enter hackathon name"
              value={formData.hackathonName}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        </Row>
        <Row className="m-2">
          <Col>
            <Form.Group controlId="formHackathonStartDate">
              <Form.Label>Hackathon Start Date</Form.Label>
              <Form.Control
                name="hackathonStartDate"
                type="date"
                value={formData.hackathonStartDate}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formHackathonEndDate">
              <Form.Label>Hackathon End Date</Form.Label>
              <Form.Control
                name="hackathonEndDate"
                type="date"
                value={formData.hackathonEndDate}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="m-2">
          <Form.Group controlId="formGithubRepoLink">
            <Form.Label>Github Repository Link</Form.Label>
            <Form.Control
              name="githubRepoLink"
              type="website"
              placeholder="Enter Github repo link"
              value={formData.githubRepoLink}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        </Row>
        <Row className="m-2">
          <Form.Group controlId="formOtherLinks">
            <Form.Label>Other Links</Form.Label>
            <Form.Control
              name="otherLinks"
              type="website"
              placeholder="Enter other links (optional)"
              value={formData.otherLinks}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {submitted && <p>Thank you for submitting your project!</p>}
    </div>
  );
};

export default SubmissionForm;
