import "./App.css";
import Register from "../components/Register/Register";
import Sign from "../components/Sign/Sign";
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return <>
    <Router >
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Sign/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  </>;
}

export default App;
