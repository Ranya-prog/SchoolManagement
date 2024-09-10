// src/DepartmentList.js
import React from 'react';

function DepartmentList({ departments }) {
  return (
    <div>
      <h2>Department List</h2>
      {departments.length === 0 ? (
        <p>No departments available.</p>
      ) : (
        <ul>
          {departments.map((department, index) => (
            <li key={index}>
              <strong>Code:</strong> {department.code} <br />
              <strong>Title:</strong> {department.titre} <br />
              <strong>Description:</strong> {department.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DepartmentList;

