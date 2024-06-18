import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './clinicalData.css'; 

const ClinicalData: React.FC = () => {
    const navigate = useNavigate();
    const [clinicalDate, setClinicalDate] = useState('');
    const [natureOfAilment, setNatureOfAilment] = useState('');
    const [medicinePrescribed, setMedicinePrescribed] = useState('');
    const [procedureUndertaken, setProcedureUndertaken] = useState('');
    const [dateOfNextAppointment, setDateOfNextAppointment] = useState('');

    const handleSubmit = () => {
        const patientData = JSON.parse(localStorage.getItem('patientData') || '{}');

        if (!clinicalDate || !natureOfAilment || !dateOfNextAppointment) {
            alert('Please fill in all the required fields');
            return;
        }

        const record = {
            patientDatum: patientData,
            clinicalDate,
            natureOfAilment,
            medicinePrescribed,
            procedureUndertaken,
            dateOfNextAppointment,
        };

        axios.post('http://localhost:3000/api/clinical-records/records', record)
            .then(response => {
                navigate('/thanks');
            })
            .catch(error => {
                alert("Couldn't reach the API endpoint");
            });
    };

    return (
        <div className="clinical-data-form">
            <h4>Clinical Data Form</h4>
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

            <button onClick={handleSubmit}>Submit</button>
            <button><Link to= {`/read-clinical-records`} type="submit">
                        Search Records
                    </Link></button>
                    <br />
                    <br />
                    <Link className='link-stuff' to= {`/home`} type="submit">
                        Go Home
                    </Link>

            
        </div>
    );
};

export default ClinicalData;
