import React, { useState } from "react";
import { Link } from 'react-router-dom'; // Import Link
import "./styles.css";
import person from './person.png';
import user from './user.png';

const AdminDashboard = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupContent, setPopupContent] = useState("");

  const trainers = [
    { id: 1, name: "Hanu", bio: "Hanu is a dynamic finance instructor with a strong background in investment management and financial analysis. With over 12 years of teaching experience, he incorporates gamification into his courses to enhance critical thinking and decision-making skills among students. Michael's engaging teaching style and real-world case studies create an interactive learning environment that inspires students to excel. He holds an MBA and is a Chartered Financial Analyst (CFA), dedicated to empowering the next generation of financial leaders." },
    { id: 2, name: "Hanith", bio: "Hanith is a renowned organizational behavior expert with a passion for leadership development. With a rich history of working with multinational corporations and educational institutions, she brings a wealth of knowledge to her teaching. Emily employs gamification techniques to foster teamwork and collaboration among students, making her classes both fun and impactful. She holds a Doctorate in Organizational Psychology and has published extensively on topics related to team dynamics and effective leadership, striving to cultivate future leaders in her classroom." },
    { id: 3, name: "Peter", bio: "Peter is an accomplished marketing strategist and educator with over a decade of experience in both academia and the corporate world. She specializes in digital marketing and consumer behavior, utilizing gamified learning techniques to make complex concepts accessible and engaging. Sarah has a proven track record of mentoring students to success through interactive projects and collaborative activities. Holding a Ph.D. in Marketing, she is passionate about creating dynamic learning experiences that prepare students for the challenges of the modern business landscape." },
    { id: 4, name: "John Doe", bio: "John Doe is a seasoned business educator with over 15 years of experience in the field. His expertise lies in integrating gamification techniques into traditional MBA curricula, enhancing student engagement and learning outcomes. With a passion for innovative teaching methods, John has successfully led workshops and training sessions that focus on real-world applications of business theories. He holds an MBA from a prestigious university and is dedicated to fostering an interactive learning environment that inspires future leaders." },
  ];

  const openPopup = (trainer) => {
    setPopupContent(trainer.bio);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    setPopupContent("");
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="user-info">
          <img src={user} alt="user" />
          <div className="user-details">
            <p>John Doe</p>
            <p>john.doe@example.com</p>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/" className="active">Trainer</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <a href="#">Analysis</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="main-content">
        <div className="courses">
          {trainers.map((trainer) => (
            <div key={trainer.id} className="course-card">
              <img src={person} alt="trainee" />
              <h3>Trainer {trainer.id}</h3>
              <p>Name: {trainer.name}</p>
              <button onClick={() => openPopup(trainer)} className="more-btn">More</button>
            </div>
          ))}
        </div>
        <button className="transfer-info-btn">Trainee Info</button>
      </div>

      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <p>{popupContent}</p>
            <button className="popup-close-btn" onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
