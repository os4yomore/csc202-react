import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UpdatePatientData from './components/updatePatientData';
import UpdateClinicalRecords from './components/updateClinicalRecords';
import DeleteClinical from './components/deleteClinicalRecord'; 
import DeletePatient from './components/deletePatient';
import './App.css';
import PatientData from './components/PatientData';
import ClinicalData from './components/clinicalData';
import Thanks from './components/thanks';
import ReadPatientData from './components/ReadPatientData';
import ReadClinicalRecords from './components/ReadClinicalRecords';
import DisplayPatients from './components/DisplayPatients';
import DisplayClinicalRecords from './components/DisplayClinicalRecords';
import Home from './components/home';

const App = () => {
  return (
    <div className="main">
      <BrowserRouter basename='/'>
        
        <Routes>
          <Route path="/home" element={< Home/>} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="/update-patient-data/:id" element={<UpdatePatientData />} />
          <Route path="/update-clinical-records/:id" element={<UpdateClinicalRecords />} />
          <Route path="/delete-clinical-record/:id" element={<DeleteClinical />} />
          <Route path="/delete-patient/:id" element={<DeletePatient />} />
          
          <Route path="/patients" element={<PatientData />} />
          <Route path="/clinical-data" element={<ClinicalData />} />
          <Route path="/read-patient-data" element={<ReadPatientData />} />
          <Route path="/read-clinical-records" element={<ReadClinicalRecords />} />
          <Route path="/display-patients" element={<DisplayPatients />} />
          <Route path="/display-clinical-records" element={<DisplayClinicalRecords />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;