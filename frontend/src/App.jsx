import "./App.css";
import AdminDashboard from "../components/Admin/AdminDashboard";
import Home from './Home';
import Sign from '../components/Sign/Sign';
import Register from '../components/Register/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AssignTrainees from "./components/TraineeList";
import TraineeList from "./components/TraineeList";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Sign />} />
          <Route path="/register" element={<Register />} />
          <Route path="/assign_trainees" element={<TraineeList/>} />
          <Route path="/admin_dashboard" element={<AdminDashboard />} />  
        </Routes>
      </Router>
    </>
  );
}

export default App;
