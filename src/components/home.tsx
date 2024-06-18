import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1 className = "heading">Welcome to ToothFixers</h1>
      <div className="button-container">
        <Link to="/patients" className="home-button">Create Patient Record</Link>
        <Link to="/clinical-data" className="home-button">Create Clinical Record</Link>
        <Link to="/read-clinical-records" className="home-button">Search for Clinical Record</Link>
        
        <Link to="/read-patient-data" className="home-button">Search for Patient Record</Link>
        <Link to="/display-clinical-records" className="home-button">View all Clinical Records</Link>
        <Link to="/display-patients" className="home-button">View all Patient Records</Link>
      </div>
    </div>
  );
};

export default Home;
