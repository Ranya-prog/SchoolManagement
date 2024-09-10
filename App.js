import React, { useState, useEffect } from 'react';
import './App.css';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import DepartmentList from './components/DepartmentList';
import DepartmentForm from './components/DepartmentForm';
import axios from 'axios';

function App() {
  const [page, setPage] = useState('home');
  const [students, setStudents] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const username = 'your-username';
    const password = 'your-password';
    const token = btoa(`${username}:${password}`);

    axios.get('http://localhost:8080/students', {
      headers: {
        'Authorization': `Basic ${token}`
      }
    })
    .then(response => setStudents(response.data))
    .catch(error => console.error('Error fetching students:', error));
  }, []);

  useEffect(() => {
    const username = 'your-username';
    const password = 'your-password';
    const token = btoa(`${username}:${password}`);

    axios.get('http://localhost:8080/departments', {
      headers: {
        'Authorization': `Basic ${token}`
      }
    })
    .then(response => setDepartments(response.data))
    .catch(error => console.error('Error fetching departments:', error));
  }, []);

  const handleAddStudent = (newStudent) => {
    setStudents((prev) => [...prev, newStudent]);
    setPage('students');
  };

  const handleAddDepartment = (newDepartment) => {
    setDepartments((prev) => [...prev, newDepartment]);
    setPage('departments');
  };

  return (
    <div>
      <header>
        <h1>Service de Scolarité</h1>
        <div className="belt"></div>
        <h2>Menu principal</h2>
        <nav>
          <button onClick={() => setPage('students')}>Gestion des Étudiants</button>
          <button onClick={() => setPage('departments')}>Gestion des Départements</button>
          <button onClick={() => setPage('addStudent')}>Ajouter Étudiant</button>
          <button onClick={() => setPage('addDepartment')}>Ajouter Département</button>
        </nav>
      </header>
      <div className="content">
        {error && <div className="error">{error}</div>}
        {page === 'students' && <StudentList students={students} />}
        {page === 'departments' && <DepartmentList departments={departments} />}
        {page === 'addStudent' && <StudentForm onAddStudent={handleAddStudent} />}
        {page === 'addDepartment' && <DepartmentForm onAddDepartment={handleAddDepartment} />}
      </div>
    </div>
  );
}

export default App;

