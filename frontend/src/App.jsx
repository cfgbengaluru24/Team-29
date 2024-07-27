import "./App.css";

import AdminDashboard from "../components/Admin/AdminDashboard";
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Router >
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Sign/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/admin_dashboard" element={<AdminDashboard />}/>
      </Routes>
    </Router>
  </>
  );
}

export default App;
