import axios from "axios";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import './deleteClinicalRecord.css'; 
// welcome page : create both, search for both
const DeleteClinical: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const deleteData = () => {
    const slicedVariable = id?.substring(1);
    console.log(slicedVariable)
    axios.delete(`http://localhost:3000/api/clinical-records/delete/${slicedVariable}`)
      .then(response => {
        navigate('/thanks');
      })
      .catch(error => {
        console.error(error)
        alert("There was an error deleting the data");
      });
  }

  return (
    <div className="thank-you-delete-container">
      <h4>To delete your data, click the button below.</h4>
      <h5>Warning, this process is irreversible</h5>
      <button type="submit" onClick={deleteData}>
        Delete data
      </button>
      <br />
                    <br />
                    <Link className='link-stuff' to= {`/home`} type="submit">
                        Go Home
                    </Link>

    </div>
  );
}

export default DeleteClinical;
