import React from 'react';
import data from './data/data.json';
import './profiles.css'
import ShowMore from './ShowMore.jsx'
import TotalStudents from './TotalStudents.jsx';

const Profiles = () => {
  return (
    <div className='outer-box'>
      <h2>All Students</h2>
      <p> <TotalStudents /></p>
      <div className='profile-card'>
      {data.map(student => (
        <div key={student.id}>
          <h2>{student.names.preferredName} {student.names.middleName} {student.names.surname}</h2>
          <p>{student.username}</p>
          <p>Date of Birth: {student.dob}</p>
          <img src={student.profilePhoto} alt="Profile" />
          <p>CodeWars Current Total: {student.codewars.current.total}</p>
          <p>CodeWars Goal Total: {student.codewars.goal.total}</p>
          <p>Cohort: {student.cohort.cohortCode}</p>
          <p>Cohort Start Date: {student.cohort.cohortStartDate}</p>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Profiles;
