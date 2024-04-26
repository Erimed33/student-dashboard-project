import React from 'react'
import Profiles from './Profiles'
import Semester from './Semester'
import './app.css'
function App() {
  return (
    <div>
      <h1>Student Dashboard</h1>
      <Semester/>
      <Profiles/>

    </div>
  );
}

export default App;
