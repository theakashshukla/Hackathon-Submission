import React, { useState, useEffect } from "react";
import { getSubmissions } from "../services/localStorage";
import SubmissionCard from "./SubmissionCard";

const SubmissionList = ({ onCardClick, searchTerm }) => {
  const [submissions, setSubmissions] = useState([]);
  
  useEffect(() => {
    setSubmissions(getSubmissions());
  }, []);

  const filteredSubmissions = submissions.filter(
    (submission) =>
      submission.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredSubmissions.length > 0 && filteredSubmissions.map((submission, index) => (
        <SubmissionCard key={index} submission={submission} onClick={() => onCardClick(index)}/>
      ))}
      </div>
      
    </div>
  );
};

export default SubmissionList;
