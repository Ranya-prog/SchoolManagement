// src/StudentForm.js
import React, { useState } from 'react';

function StudentForm({ onAddStudent }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [code, setCode] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName && lastName && code && department) {
      onAddStudent({ firstName, lastName, code, department });
      setFirstName('');
      setLastName('');
      setCode('');
      setDepartment('');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label>Code:</label>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>
      <div>
        <label>Department:</label>
        <input
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
      </div>
      <button type="submit">Add Student</button>
    </form>
  );
}

export default StudentForm;




