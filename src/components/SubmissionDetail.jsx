import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { updateSubmission, deleteSubmission } from "../services/localStorage";

const SubmissionDetail = ({ submission, index }) => {
  const [editMode, setEditMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(submission);
  const [isFavorite, setIsFavorite] = useState(submission.isFavorite);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    updateSubmission(index, formData);
    setEditMode(false);
  };

  const handleDelete = () => {
    deleteSubmission(index);
    setShowModal(false);
  };

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    updateSubmission(index, { ...formData, isFavorite: !isFavorite });
  };

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const formatDateTime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    return `${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`;
  };

  return (
    <>
      <Card>
        <Card.Img variant="top" src={submission.coverImage} />
        <Card.Body>
          <Card.Title>{submission.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {submission.hackathonName} (
            {formatDateTime(submission.hackathonStartDate)} -{" "}
            {formatDateTime(submission.hackathonEndDate)})
          </Card.Subtitle>
          <Card.Text>{submission.summary}</Card.Text>
          <Card.Text>{submission.description}</Card.Text>
          <Card.Text>
            GitHub Repository:{" "}
            <a href={submission.githubRepoLink}>{submission.githubRepoLink}</a>
          </Card.Text>
          {Array.isArray(submission.otherLinks) &&
            submission.otherLinks.length > 0 && (
              <Card.Text>
                Other Links:
                <ul>
                  {submission.otherLinks.map((link, i) => (
                    <li key={i}>
                      <a href={link}>{link}</a>
                    </li>
                  ))}
                </ul>
              </Card.Text>
            )}
          <Card.Footer>
            {editMode ? (
              <>
                <Button variant="primary" onClick={handleSave}>
                  Save
                </Button>
                <Button
                  variant="secondary"
                  className="ml-2"
                  onClick={() => setEditMode(false)}
                >
                  Cancel
                </Button>
              </>
            ) : (
              <>
                <Button variant="primary" onClick={handleEdit}>
                  Edit
                </Button>
                <Button
                  variant="danger"
                  className="ml-2"
                  onClick={handleShowModal}
                >
                  Delete
                </Button>
              </>
            )}
            <Button
              variant={isFavorite ? "warning" : "secondary"}
              className="ml-2"
              onClick={handleFavorite}
            >
              {isFavorite ? "Unfavorite" : "Favorite"}
            </Button>
          </Card.Footer>
        </Card.Body>
        <Card.Footer className="text-muted">
          Submitted on {formatDateTime(submission.submissionTime)}
        </Card.Footer>
      </Card>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default SubmissionDetail;
