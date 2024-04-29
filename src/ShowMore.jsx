import React, { useState } from 'react';
import './showmore.css'

const ShowMore = ({ student }) => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div >
      <button id='showmore' onClick={toggleInfo}>
        {showInfo ? 'Show Less' : 'Show More'}
      </button>
      {showInfo && (
        <div>
          <div style={{ position: 'absolute', left: '0%', width: '35%', height: '155px', border: '1px solid green' }} >
            <p>CodeWars Current Total: {student.codewars.current.total}</p>
            <p>Last Week: {student.codewars.current.lastWeek}</p>
            <p>Goal: {student.codewars.goal.total}</p>
            <p>Percent of Goal Achieved: {((student.codewars.current.total / student.codewars.goal.total) * 100).toFixed(2)}%</p>
          </div>
          <div style={{ position: 'absolute', left: '35%', width: '35%', height: '155px', border: '1px solid green' }}>
            <p>Assignments: {student.cohort.scores.assignments}</p>
            <p>Projects: {student.cohort.scores.projects}</p>
            <p>Assessment: {student.cohort.scores.assessments}</p>
          </div>
          <div style={{ position: 'absolute', left: '70%', width: '30%', height: '155px', border: '1px solid green' }}>
            <p>Resume: {student.certifications.resume}</p>
            <p>LinkedIn: {student.certifications.linkedin}</p>
            <p>Mock Interview: {student.certifications.mockInterview}</p>
            <p>Github: {student.certifications.github}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowMore;
