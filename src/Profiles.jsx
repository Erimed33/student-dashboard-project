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
          <ShowMore student={student}/> 
          
        </div>
      ))}
      </div>
    </div>
  );
}

export default Profiles;
