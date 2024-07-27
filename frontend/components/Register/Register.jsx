import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import axios from "axios";
import "./Register.css";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    contact: "",
    gender: "",
    income: "",
    assets: "",
    shg: "",
    salary: "",
    loans: "",
    area: "",
    married: ""
  });

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      for (const key in user) {
        formData.append(key, user[key]);
      }
      const response = await axios.post("http://127.0.0.1:5000/register", formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
      console.log(user, "from frontend");
      console.log("User created successfully", response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.025,
    },
    tap: {
      scale: 0.975,
    },
  };

  return (
    <div className="register">
      <div className="cont-reg">
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-header">
            <FaUser className="icon-reg" />
            <h1>Create New Account</h1>
          </div>

          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            placeholder="John Doe"
            onChange={handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            placeholder="email@example.com"
            onChange={handleChange}
          />

          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="password"
            onChange={handleChange}
          />

          <div className="form-row">
            <div>
              <label htmlFor="age">Age</label>
              <input
                name="age"
                type="number"
                placeholder="30"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="contact">Phone Number</label>
              <input
                name="contact"
                type="text"
                placeholder="+1 234 567 89"
                onChange={handleChange}
              />
            </div>
          </div>

          <label htmlFor="gender">Gender</label>
          <div className="gender-options">
            <div>
              <input
                type="radio"
                name="gender"
                id="male"
                value="Male"
                onChange={handleChange}
              />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input
                type="radio"
                name="gender"
                id="female"
                value="Female"
                onChange={handleChange}
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>

          <div className="form-row">
            <div>
              <label htmlFor="area">Area</label>
              <input
                name="area"
                type="text"
                placeholder="Bangalore"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="shg">SHG</label>
              <input
                name="shg"
                type="text"
                placeholder="SHG Name"
                onChange={handleChange}
              />
            </div>
          </div>

          <label htmlFor="married">Married</label>
          <input
            name="married"
            type="text"
            placeholder="Married/Single"
            onChange={handleChange}
          />

          <div className="form-row">
            <div>
              <label htmlFor="income">Income</label>
              <input
                name="income"
                type="number"
                placeholder="1000"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="loans">Loans</label>
              <input
                name="loans"
                type="number"
                placeholder="1000"
                onChange={handleChange}
              />
            </div>
          </div>

          <label htmlFor="assets">Assets</label>
          <div className="assets-options">
            <div>
              <input
                type="radio"
                name="assets"
                id="yes"
                value="Yes"
                onChange={handleChange}
              />
              <label htmlFor="yes">Yes</label>
            </div>
            <div>
              <input
                type="radio"
                name="assets"
                id="no"
                value="No"
                onChange={handleChange}
              />
              <label htmlFor="no">No</label>
            </div>
          </div>

          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            type="submit"
            className="register-button"
          >
            Register
          </motion.button>
        </form>
      </div>
    </div>
  );
}

export default Register;
