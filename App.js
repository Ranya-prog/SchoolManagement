/*import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function StudentForm({ onAddStudent }) {
  const [formData, setFormData] = useState({
    name: '',
    prenom: '',
    code: '',
    departements: []
  });

  const departementsList = [
    'Informatique',
    'Mathématiques',
    'Physique',
    'Chimie',
    'Biologie'
  ];

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === 'checkbox') {
      setFormData((prevState) => {
        const newDepartements = checked
          ? [...prevState.departements, value]
          : prevState.departements.filter(dep => dep !== value);
        return { ...prevState, departements: newDepartements };
      });
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddStudent(formData);
    setFormData({
      name: '',
      prenom: '',
      code: '',
      departements: []
    });
  };
  axios.get('http://localhost:8080/api/your-endpoint')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Il y a eu une erreur!', error);
    });
  return (
    <form onSubmit={handleSubmit}>
      <h2>Ajouter un Étudiant</h2>
      <div>
        <label htmlFor="name">Nom:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="prenom">Prénom:</label>
        <input 
        type="text"
        id="prenom"
        name="prenom"
        value={formData.prenom}
        onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="code">Code Étudiant:</label>
        <input
          type="text"
          id="code"
          name="code"
          value={formData.code}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Départements:</label>
        {departementsList.map((dep) => (
          <div key={dep}>
            <input
              type="checkbox"
              id={dep}
              name="departements"
              value={dep}
              checked={formData.departements.includes(dep)}
              onChange={handleChange}
            />
            <label htmlFor={dep}>{dep}</label>
          </div>
        ))}
      </div>
      <button type="submit">Ajouter</button>
    </form>
  );
}


function StudentList({ students }) {
  return (
    <div>
      <h2>Liste des Étudiants</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student.name}  {student.prenom} - {student.code} </li>
        ))}
      </ul>
    </div>
  );
}


function DepartmentList() {
  const departments = ['Informatique', 'Mathématiques', 'Physique','Chimie','Biologie'];

  return (
    <div>
      <h3>Liste des Départements</h3>
      <ul>
        {departments.map((dep, index) => (
          <li key={index}>{dep}</li>
        ))}
      </ul>
    </div>
  );
}


function App() {
  const [page, setPage] = useState('home');
  const [students, setStudents] = useState([
    { name: 'Ranya Hassouni', code: 'E001' },
    { name: 'Adam Hassouni', code: 'E002' },
    { name: 'Hind Danyali', code: 'E003' },
    { name: 'Samira Mahile', code: 'E004' }
  ]);

  const handleAddStudent = (newStudent) => {
    setStudents((prev) => [...prev, newStudent]);
    setPage('students');
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

        </nav>
      </header>
      <div className="content">
        {page === 'students' && <StudentList students={students} />}
        {page === 'departments' && <DepartmentList />}
        {page === 'addStudent' && <StudentForm onAddStudent={handleAddStudent} />}
      </div>
    </div>
  );
}

export default App;*/
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
    const [data, setData] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8080/students/data')
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="App">
            <h1>Data from Spring Boot:</h1>
            <p>{data}</p>
        </div>
    );
}

export default App;