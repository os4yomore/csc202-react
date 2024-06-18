import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './updateClinicalRecords.css';

const UpdateClinicalRecords: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [clinicalDate, setClinicalDate] = useState('');
    const [natureOfAilment, setNatureOfAilment] = useState('');
    const [medicinePrescribed, setMedicinePrescribed] = useState('');
    const [procedureUndertaken, setProcedureUndertaken] = useState('');
    const [dateOfNextAppointment, setDateOfNextAppointment] = useState('');

    const handleSubmit = () => {
        if (!clinicalDate || !natureOfAilment || !dateOfNextAppointment) {
            alert('Please update all the required fields');
            return;
        }

        const clinicalData = {
            clinicalDate,
            natureOfAilment,
            medicinePrescribed,
            procedureUndertaken,
            dateOfNextAppointment,
        };

        axios.patch(`http://localhost:3000/api/clinical-records/update/${id}`, clinicalData)
            .then(() => navigate('/thanks'))
            .catch(() => alert("Couldn't reach the API endpoint"));
    };

    useEffect(() => {
        setClinicalDate(localStorage.getItem('clinicalDate') || '');
        setNatureOfAilment(localStorage.getItem('natureOfAilment') || '');
        setMedicinePrescribed(localStorage.getItem('medicinePrescribed') || '');
        setProcedureUndertaken(localStorage.getItem('procedureUndertaken') || '');
        setDateOfNextAppointment(localStorage.getItem('dateOfNextAppointment') || '');
    }, []);

    return (
        <div className="update-clinical-form">
            <h1>Update Clinical Records</h1>
            <label>Date of Consultation</label>
            <input type="date" value={clinicalDate} onChange={(e) => setClinicalDate(e.target.value)} required />

            <label>Nature of Ailment</label>
            <input type="text" value={natureOfAilment} onChange={(e) => setNatureOfAilment(e.target.value)} required />

            <label>Medicine Prescribed</label>
            <input type="text" value={medicinePrescribed} onChange={(e) => setMedicinePrescribed(e.target.value)} />

            <label>Procedures Undertaken</label>
            <input type="text" value={procedureUndertaken} onChange={(e) => setProcedureUndertaken(e.target.value)} />

            <label>Date of Next Appointment</label>
            <input type="date" value={dateOfNextAppointment} onChange={(e) => setDateOfNextAppointment(e.target.value)} required />

            <button onClick={handleSubmit}>Update</button>
        </div>
    );
};

export default UpdateClinicalRecords;
