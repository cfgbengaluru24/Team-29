import "./Sign.css";
import { useState } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;
const Sign = () => {
  const [u, setU] = useState({
    email: "",
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
        "http://localhost:3000/api/v1/users/login",
        u,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("User loggedIn successfully");
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
          {" "}
          <label htmlFor="">Email</label>
            <input
              name="email"
              type="email"
              placeholder="email"
              onChange={handleChange}
            />
            <label htmlFor="">Password</label>
            <input name="password" type="password" onChange={handleChange} />
        </div>

        <div className="sign-button-field">
          {" "}
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
