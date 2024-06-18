import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ReadPatientData.css';

interface patientData
{
    id: number;
    firstName: string;
    lastName: string;
    middleName: string;
    address: string;
    dateOfRegistration: string;
    _22120613036: boolean
}


const ReadPatientData: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [patientData, setPatientData] = useState<any>(null);
    const [searchId, setSearchId] = useState(id || '');
    const [errorMessage, setErrorMessage] = useState('');

    const fetchData = async (recordId: string) => {
        try {
            const response = await axios.get(`http://localhost:3000/api/patients/get/${recordId}`);
            if (response.data) {
                setPatientData(response.data);
                setErrorMessage('');
            } else {
                setPatientData(null);
                setErrorMessage('Record not found');
            }
        } catch (error) {
            console.error("Error fetching the patient data", error);
            setErrorMessage('Error fetching the patient data');
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
        <div className="read-patient-data">
            <h3 className='search-text'>Search Patient Records</h3>
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
            {patientData && (
                <div className="patient-data-details">
                    <p>Your first name is: {patientData.firstName}</p>
                    <p>Your middle name is: {patientData.middleName}</p>
                    <p>Your last name is: {patientData.lastName}</p>
                    <p>Your date of birth is: {patientData.dateOfBirth.substring(0, 10)}</p>
                    <p>Your home address is: {patientData.address}</p>
                    <p>Your matriculation number is: {patientData._22120613036}</p>
                    <br/>
    
                    <Link to={`/update-patient-data/${searchId}`} type="submit">
                        Update Patient Data
                    </Link>
                    
                    <Link to={`/delete-patient/:${patientData.id}`} type="submit">
                        Delete Clinical Records
                    </Link>
                </div>
            )}
        </div>
    );
};

export default ReadPatientData;
