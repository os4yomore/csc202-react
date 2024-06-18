import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DisplayClinicalRecords.css';

const DisplayClinicalRecords: React.FC = () => {
    const [clinicalRecords, setClinicalRecords] = useState<any[]>([]);

    useEffect(() => {
        const fetchClinicalRecords = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/clinical-records/findAll');
                console.log(response)
                setClinicalRecords(response.data);
            } catch (error) {
                console.error('Error fetching clinical records', error);
            }
        };

        fetchClinicalRecords();
    }, []);

    return (
        <div className="table-container">
            <h3 className='stuff-text'>Clinical Records</h3>
            <table className="data-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Clinic Date</th>
                        <th>Nature of Ailment</th>
                        <th>Medicine Prescribed</th>
                        <th>Procedure Undertaken</th>
                        <th>Date of Next Appointment</th>
                    </tr>
                </thead>
                <tbody>
                    {clinicalRecords.map((record) => (
                        <tr key={record._id}>
                            <td>{record._id}</td>
                            <td>{new Date(record.clinicalDate).toLocaleDateString()}</td>
                            <td>{record.natureOfAilment}</td>
                            <td>{record.medicinePrescribed}</td>
                            <td>{record.procedureUndertaken}</td>
                            <td>{new Date(record.dateOfNextAppointment).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DisplayClinicalRecords;
