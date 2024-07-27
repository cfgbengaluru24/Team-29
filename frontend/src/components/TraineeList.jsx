import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TraineeList.css'; // Import the CSS file

const TraineeList = () => {
  const [trainees, setTrainees] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrainees = async () => {
      try {
        const response = await axios.get('http://localhost:5000/trainees');
        setTrainees(response.data);
        console.log(trainees);
      } catch (err) {
        setError('Error fetching trainees');
      }
    };

    fetchTrainees();
  }, []);

  return (
    <div className="trainee-list">
      <h1>Trainee List</h1>
      {error && <p className="error-message">{error}</p>}
      <div className="trainee-container">
        {trainees.map((trainee, index) => (
          <div key={index} className="trainee-card">
            <h2>{trainee.name}</h2>
            <p><strong>Age:</strong> {trainee.age}</p>
            <p><strong>Contact:</strong> {trainee.contact}</p>
            <p><strong>Gender:</strong> {trainee.gender}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TraineeList;
