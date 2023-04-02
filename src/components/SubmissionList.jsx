// import React, { useState, useEffect } from "react";
// import { getSubmissions } from "../services/localStorage";
// import SubmissionCard from "./SubmissionCard";

// const SubmissionList = ({ onCardClick, searchTerm }) => {
//   const [submissions, setSubmissions] = useState([]);
  
  
//   useEffect(() => {
//     setSubmissions(getSubmissions());
//   }, []);

//   const filteredSubmissions = submissions.filter(
//     (submission) =>
//       submission.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );



//   return (
//     <div>
//       <div style={{ display: "flex", flexWrap: "wrap" }}>
//         {filteredSubmissions.length > 0 && filteredSubmissions.map((submission, index) => (
//         <SubmissionCard key={index} submission={submission} onClick={() => onCardClick(index)}/>
//       ))}
//       </div>
      
//     </div>
//   );
// };

// export default SubmissionList;

import React, { useState, useEffect } from "react";
import { getSubmissions } from "../services/localStorage";
import SubmissionCard from "./SubmissionCard";
import SubmissionDetail from "./SubmissionDetail";

const SubmissionList = ({ searchTerm }) => {
  const [submissions, setSubmissions] = useState([]);
  const [selectedSubmissionIndex, setSelectedSubmissionIndex] = useState(null);

  useEffect(() => {
    setSubmissions(getSubmissions());
  }, []);

  const filteredSubmissions = submissions.filter(
    (submission) =>
      submission.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCardClick = (index) => {
    setSelectedSubmissionIndex(index);
  };

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredSubmissions.length > 0 &&
          filteredSubmissions.map((submission, index) => (
            <SubmissionCard
              key={index}
              submission={submission}
              onClick={() => handleCardClick(index)}
            />
          ))}
      </div>
      {selectedSubmissionIndex !== null && (
        <SubmissionDetail
          submission={filteredSubmissions[selectedSubmissionIndex]}
        />
      )}
    </div>
  );
};

export default SubmissionList;
