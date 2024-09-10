// src/StudentList.js
import React from 'react';

function StudentList({ students }) {
  return (
    <div>
      <h2>Student List</h2>
      {students.length === 0 ? (
        <p>No students available.</p>
      ) : (
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              {student.firstName} {student.lastName} - {student.code} ({student.department})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StudentList;
