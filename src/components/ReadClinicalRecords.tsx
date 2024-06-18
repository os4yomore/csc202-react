import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ReadClinicalRecords.css';

interface ClinicData {
    id: number;
    clinicalDate: string;
    natureOfAilment: string;
    medicinePrescribed: string;
    procedureUndertaken: string;
    dateOfNextAppointment: string;
}

const ReadClinicalRecords: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [clinicalData, setClinicalData] = useState<ClinicData | null>(null);
    const [searchId, setSearchId] = useState(id || '');
    const [errorMessage, setErrorMessage] = useState('');

    const fetchData = async (recordId: string) => {
        try {
            const response = await axios.get(`http://localhost:3000/api/clinical-records/${recordId}`);
            if (response.data) {
                setClinicalData(response.data);
                setErrorMessage('');
            } else {
                setClinicalData(null);
                setErrorMessage('Record not found');
            }
        } catch (error) {
            console.error("Error fetching the clinical data", error);
            setClinicalData(null);
            setErrorMessage('Error fetching the clinical data');
        }
    };

    useEffect(() => {
        if (id) {
            fetchData(id);
        }
    }, [id]);

    const handleSearch = () => {
        fetchData(searchId);
    };

    return (
        <div className="read-clinical-data">
            <h3>Search for Clinical Data</h3>
            <div className="search-box">
                <input 
                    type="text" 
                    placeholder="Enter ID" 
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)} 
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {clinicalData && (
                <div className="clinical-data-details">
                    <p>Your clinic date: {clinicalData.clinicalDate}</p>
                    <p>Your nature of ailment: {clinicalData.natureOfAilment}</p>
                    <p>The medicine prescribed: {clinicalData.medicinePrescribed}</p>
                    <p>The procedure undertaken: {clinicalData.procedureUndertaken}</p>
                    <p>Your next date of appointment is: {clinicalData.dateOfNextAppointment.substring(0, 10)}</p>
                    {/* <h4>Click me to Update your data</h4> */}
                    <Link to={`/update-clinical-records/${clinicalData.id}`} type="submit">
                        Update Clinical Record
                    </Link>
                    <br />
                    {/* <h4> Click me to Delete your data</h4> */}
                    <Link to={`/delete-clinical-record/:${clinicalData.id}`} type="submit">
                        Delete Clinical Record
                    </Link>
                </div>
            )}
        </div>
    );
};

export default ReadClinicalRecords;
