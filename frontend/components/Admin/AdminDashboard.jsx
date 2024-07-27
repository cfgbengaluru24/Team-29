import "./styles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AssignTraninees from "../../src/components/TraineeList";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleTraineeButton = async () =>{
    navigate('/assign_trainees');
  }

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:5000/logout',
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      sessionStorage.removeItem('token');
      navigate('/');
      // Redirect to login page or perform other actions
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="user-info">
          <img src="https://via.placeholder.com/50" alt="User" />
          <div className="user-details">
            <p>John Doe</p>
            <p>john.doe@example.com</p>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#" className="active">
                Trainers
              </a>
            </li>
            <li>
              <a href="#">Typography</a>
            </li>
            <li>
              <a href="#">Widgets</a>
            </li>
            <li>
              <a href="#">Charts</a>
            </li>
            <li>
              <a href="#">Forms</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="main-content">
        <div className="top-nav">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <i className="material-icons">search</i>
          </div>
          <div className="nav-icons">
            <i className="material-icons">notifications</i>
            <i className="material-icons">settings</i>
            <i className="material-icons">person</i>
          </div>
        </div>
        <div className="courses">
          <div className="course-card">
            <img src="person1.jpg" alt="trainee" />
            <h3>Trainer 1</h3>
            <p>
              Name: hanu
              <br />
            </p>
            <a href="#" className="more-btn">
              More
            </a>
          </div>
          <div className="course-card">
            <img src="person1.jpg" alt="trainee" />
            <h3>Trainer 2</h3>
            <p>
              Name: hanith
              <br />
            </p>
            <a href="#" className="more-btn">
              More
            </a>
          </div>
          <div className="course-card">
            <img src="person1.jpg" alt="trainee" />
            <h3>Trainer 3</h3>
            <p>
              Name: Peter
              <br />
            </p>
            <a href="#" className="more-btn">
              More
            </a>
          </div>
          <div className="course-card">
            <img src="person1.jpg" alt="trainee" />
            <h3>Trainer 4</h3>
            <p>
              Name: John
              <br />
            </p>
            <a href="#" className="more-btn">
              More
            </a>
          </div>
        </div>
        <button className="transfer-info-btn" onClick={handleTraineeButton}>Trainee Info</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
