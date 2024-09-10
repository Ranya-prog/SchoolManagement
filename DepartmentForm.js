// src/DepartmentForm.js
import React, { useState } from 'react';

function DepartmentForm({ onAddDepartment }) {
  const [code, setCode] = useState('');
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (code && titre && description) {
      onAddDepartment({ code, titre, description });
      setCode('');
      setTitre('');
      setDescription('');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Department Code:</label>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Add Department</button>
    </form>
  );
}

export default DepartmentForm;
