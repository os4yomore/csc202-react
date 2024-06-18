import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DisplayPatients.css';

const DisplayPatients: React.FC = () => {
    const [patients, setPatients] = useState<any[]>([]);

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/patients');
                setPatients(response.data);
            } catch (error) {
                console.error('Error fetching patient data', error);
            }
        };

        fetchPatients();
    }, []);

    return (
        <div className="table-container">
            <h3 className='text-stuff1'>Patient Data</h3>
            <table className="data-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Last Name</th>
                        <th>Date of Birth</th>
                        <th>Address</th>
                        <th>Date of Registration</th>
                        <th>_22120613036</th>
                
                    </tr>
                </thead>
                <tbody>
                    {patients.map((patient) => (
                        <tr key={patient._id}>
                            <td>{patient._id}</td>
                            <td>{patient.firstName}</td>
                            <td>{patient.middleName}</td>
                            <td>{patient.lastName}</td>
                            <td>{new Date(patient.dateOfBirth).toLocaleDateString()}</td>
                            <td>{patient.address}</td>
                            <td>{new Date(patient.dateOfRegistration).toLocaleDateString()}</td>
                            <td>{patient._22120613036}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DisplayPatients;
