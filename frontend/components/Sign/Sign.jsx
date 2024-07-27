import "./Sign.css";
import { useState } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

const Sign = () => {
  const [u, setU] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    setU((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/login",
        u,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log("User logged in successfully");
      console.log(response.data.data);
      console.log(response.data.data.username);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="sign-cont">
      <form action="" className="sign" onSubmit={handleSubmit}>
        <div className="sign-main-reg">
          <div className="opt-reg">
            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>
          </div>
        </div>
        <div className="sign-field">
          <label htmlFor="">Name</label>
          <input
            name="name"
            type="text"
            placeholder="name"
            onChange={handleChange}
          />
          <label htmlFor="">Password</label>
          <input name="password" type="password" onChange={handleChange} />
        </div>

        <div className="sign-button-field">
          <button className="sign-button" type="submit">
            Submit
          </button>
          <button className="sign-button">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Sign;
