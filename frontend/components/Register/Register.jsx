import { useState } from "react";
import { FaUser, FaPenNib } from "react-icons/fa";
import { motion } from "framer-motion";
import axios from "axios";
import "./Register.css";

function Register() {
  const [file, setFile] = useState(null);
  const [res, setRes] = useState(null);
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
      await axios.post("http://localhost:3000/api/v1/users/register", formData);
      console.log("User created successfully");
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
        <div className="nav-main-reg">
          <div className="opt-reg">
            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="leftform">
            <div className="line-reg">
              <FaUser className="icon-reg" /> <h1>Create New Account</h1>
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
              placeholder=""
              onChange={handleChange}
            />
            <label htmlFor="age">Age</label>
            <input
              name="age"
              type="number"
              placeholder="30"
              onChange={handleChange}
            />
            <label htmlFor="contact">Phone Number</label>
            <input
              name="contact"
              type="text"
              placeholder="+1 234 567 89"
              onChange={handleChange}
            />
            <div>
              <label>Gender</label>
              <div style={{ display: 'flex', marginTop: '10px' }}>
                <div style={{ marginRight: '20px' }}>
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
            </div>

            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              type="submit"
            >
              Register
            </motion.button>
          </div>
          <div className="rightform">
            <div className="line-reg">
              <FaPenNib className="icon-reg" /> <h1>Basic Information</h1>
            </div>

            <label htmlFor="area">Area</label>
            <input
              name="area"
              type="text"
              placeholder="Bangalore"
              onChange={handleChange}
            />
            <label htmlFor="shg">SHG</label>
            <input
              name="shg"
              type="text"
              placeholder="SHG Name"
              onChange={handleChange}
            />
            <label htmlFor="married">Married</label>
            <input
              name="married"
              type="text"
              placeholder="Married/Single"
              onChange={handleChange}
            />
            <label htmlFor="income">Income</label>
            <input
              name="income"
              type="number"
              placeholder="1000"
              onChange={handleChange}
            />
            <label htmlFor="loans">Loans</label>
            <input
              name="loans"
              type="number"
              placeholder="1000"
              onChange={handleChange}
            />
            <div>
              <label>Assets</label>
              <div style={{ display: 'flex', marginTop: '10px' }}>
                <div style={{ marginRight: '20px' }}>
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
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
