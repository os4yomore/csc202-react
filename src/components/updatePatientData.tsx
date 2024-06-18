import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './updatePatientData.css';

const UpdatePatientData: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [address, setAddress] = useState('');
    const [dateOfRegistration, setDateOfRegistration] = useState('');
    const [_22120613036, set_22120613036] = useState('');

    const handleSubmit = () => {
        if (!firstName || !lastName || !middleName || !dateOfBirth || !address || !dateOfRegistration || !_22120613036) {
            alert('Please update all the required fields');
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
    
        axios.patch(`http://localhost:3000/api/patients/update/${id}`, patientData )
            .then(() => navigate('/thanks'))
            .catch(() => alert("Couldn't reach the API endpoint"));
    };

    useEffect(() => {
        setFirstName(localStorage.getItem('firstName') || '');
        setLastName(localStorage.getItem('lastName') || '');
        setMiddleName(localStorage.getItem('middleName') || '');
        setDateOfBirth(localStorage.getItem('dateOfBirth') || '');
        setAddress(localStorage.getItem('address') || '');
        setDateOfRegistration(localStorage.getItem('dateOfRegistration') || '');
        set_22120613036(localStorage.getItem('_22120613036') || '');
    }, []);

    return (
        <div className="update-patient-form">
            <h1>Update Patient Data</h1>
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

            <button onClick={handleSubmit}>Update</button>
        </div>
    );
};

export default UpdatePatientData;
