import React from "react";
import { Card } from "react-bootstrap";
import moment from "moment";

const SubmissionCard = ({ submission, onClick }) => {
  // const getTimeAgo = (timestamp) => {
  //   const date = new Date(timestamp);

  //   if (isNaN(date.getTime())) {
  //     return "Invalid date";
  //   }

  //   const now = new Date();
  //   const seconds = Math.floor((now - timestamp) / 1000);

  //   if (seconds < 60) {
  //     return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
  //   }

  //   const minutes = Math.floor(seconds / 60);

  //   if (minutes < 60) {
  //     return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  //   }

  //   const hours = Math.floor(minutes / 60);

  //   if (hours < 24) {
  //     return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  //   }

  //   const days = Math.floor(hours / 24);

  //   if (days < 7) {
  //     return `${days} day${days !== 1 ? "s" : ""} ago`;
  //   }

  //   return new Intl.DateTimeFormat("en-US").format(timestamp);
  // };

  // const timeAgo = getTimeAgo(new Date(submission.Time));
  const timeAgo = moment(submission.submissionTime).fromNow();

  return (
    <>
      {/* margin */}
      <div style={{ flexBasis: "33%", padding: "10px" }}>
        <Card
          onClick={onClick}
          style={{
            width: "100%",
            height: "20rem",
            margin: "10px",
            cursor: "pointer",
          }}
        >
          <Card.Img variant="top" src={submission.coverImage} />
          <Card.Body>
            <Card.Title>{submission.title}</Card.Title>
            <Card.Text>{submission.summary}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{timeAgo}</small>
          </Card.Footer>
        </Card>
      </div>
    </>
  );
};

export default SubmissionCard;
