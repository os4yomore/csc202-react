import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './PatientData.css'; 
import axios from 'axios';

const PatientData: React.FC = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [address, setAddress] = useState('');
    const [dateOfRegistration, setDateOfRegistration] = useState('');
    const [_22120613036, set_22120613036] = useState('');

    const handleSubmit = () => {

       
        if (!firstName || !lastName || !middleName || !dateOfBirth || !address || !dateOfRegistration || !_22120613036) {
            alert('Please fill in all the required fields');
            return;
        }

        const patientData = {
            firstName,
            lastName,
            middleName,
            address,
            _22120613036,
            dateOfBirth,
            dateOfRegistration,
        };
        
        localStorage.setItem('patientData', JSON.stringify(patientData));
        axios.post('http://localhost:3000/api/patients/create', patientData)
        .then(response => {
            navigate('/thanks');
        })
        .catch(error => {
            alert("Couldn't reach the API endpoint");
        });
    };

    return (
        <div className="patient-data-form">
            {/* <h3>Welcome to Tooth Fixers</h3> */}
            <h4>Patient Registration Form</h4>
            <label>First Name</label>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            
            <label>Last Name</label>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            
            <label>Middle Name</label>
            <input type="text" value={middleName} onChange={(e) => setMiddleName(e.target.value)} required />
            
            <label>Date Of Birth</label>
            <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} required />
            
            <label>Home Address</label>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
            
            <label>Date Of Registration</label>
            <input type="date" value={dateOfRegistration} onChange={(e) => setDateOfRegistration(e.target.value)} required />
            
            <label>_22120613036</label>
            <input type="boolean" value={_22120613036} onChange={(e) => set_22120613036(e.target.value)} required />

            <button onClick={handleSubmit}>Submit</button>

            {/* <h4> Click me to search for Patient Data Records</h4> */}
                    <Link className='link-stuff' to= {`/read-patient-data`} type="submit">
                        Search Records
                    </Link> <br />
                    <br />
                    <Link className='link-stuff' to= {`/home`} type="submit">
                        Home
                    </Link>
        </div>
    );
};

export default PatientData;
