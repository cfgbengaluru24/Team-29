import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-main">
      <div className="part2">
        <div className="hero-main-txt">
          <span style={{ "--i": 1 }}>U</span>
          <span style={{ "--i": 2 }}>p</span>
          <span style={{ "--i": 3 }}>l</span>
          <span style={{ "--i": 4 }}>i</span>
          <span style={{ "--i": 5 }}>f</span>
          <span style={{ "--i": 6 }}>t</span>
          <span style={{ "--i": 7 }}>i</span>
          <span style={{ "--i": 8 }}>n</span>
          <span style={{ "--i": 9 }}>g</span>
          <span className="black" style={{ "--i": 6 }}>
            |
          </span>
          <span style={{ "--i": 10 }}>W</span>
          <span style={{ "--i": 11 }}>o</span>
          <span style={{ "--i": 12 }}>m</span>
          <span style={{ "--i": 13 }}>e</span>
          <span style={{ "--i": 14 }}>n</span>
          <span style={{ "--i": 14 }}>,</span>
          <span className="black" style={{ "--i": 10 }}>
            |
          </span>
          <span style={{ "--i": 15 }}>t</span>
          <span style={{ "--i": 16 }}>r</span>
          <span style={{ "--i": 17 }}>a</span>
          <span style={{ "--i": 18 }}>n</span>
          <span style={{ "--i": 19 }}>s</span>
          <span style={{ "--i": 20 }}>f</span>
          <span style={{ "--i": 21 }}>o</span>
          <span style={{ "--i": 22 }}>r</span>
          <span style={{ "--i": 23 }}>m</span>
          <span style={{ "--i": 24 }}>i</span>
          <span style={{ "--i": 25 }}>n</span>
          <span style={{ "--i": 26 }}>g</span>

          <span className="black" style={{ "--i": 16 }}>
            |
          </span>
          <span style={{ "--i": 27 }}>L</span>
          <span style={{ "--i": 28 }}>i</span>
          <span style={{ "--i": 29 }}>v</span>
          <span style={{ "--i": 30 }}>e</span>
          <span style={{ "--i": 31 }}>s</span>
        </div>
        <span className="hero-byline">Empowering Professional Growth</span>

        <div className="txt1">Come be a Part </div>
        <div className="txt2"> of the </div>
        <div className="txt1">Journey</div>
        <div className="hero-but">
          {" "}
          <button className="readmore">
            {" "}
            <span>Read More</span>
          </button>
          <button className="readmore1">
            {" "}
            <Link
              to="/register"
              style={{
                textDecoration: "none",
                color: "skyblue",
              }}
            >
              <span>Register</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
