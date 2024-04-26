import React from 'react'
import Data from "/src/data/data.json"

const TotalStudents = () => {

   const totalStudents = Data.length;

  return (
    <div>Total Students:{totalStudents}</div>
  )
}

export default TotalStudents