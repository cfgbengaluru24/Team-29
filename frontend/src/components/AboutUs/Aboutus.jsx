// AboutUs.jsx
import React from "react";
import "../AboutUs/Aboutus.css"; // Import your CSS file

const AboutUs = () => {
  return (
    <div className="aboutus">
      <h1>About Us</h1>
      <section>
        <h2>Our Mission</h2>
        <p>
          At BPF, we recognize the challenges faced by the poor in accessing
          sustainable livelihood opportunities. Traditional development programs
          often require the poor to invest time, capital, and effort into
          manufacturing specific products, only to leave them struggling with
          market access and the initial hurdles of starting a business.
          Government and financial institutions frequently emphasize skill
          development without aligning it with market demand, resulting in
          livelihood options that are not always sustainable or market-driven.
        </p>
      </section>

      <section>
        <h2>MOVE: A Game-Changing Innovation</h2>
        <p>
          To address these challenges, BPF has developed a groundbreaking
          livelihoods innovation known as MOVE (Market Oriented Value
          Enhancement). MOVE was honored with an award from the World
          Bank-ILO-YEN MarketPlace, reflecting its impact and effectiveness.
        </p>
        <p>
          MOVE, often described as an experiential, gamified desi-MBA, is
          designed for well-established self-help groups (SHGs). It empowers
          these groups to conduct market research, select suitable activities
          based on their findings, enhance their skills, and ultimately become
          successful entrepreneurs.
        </p>
        <h3>Key Elements of MOVE:</h3>
        <ul>
          <li>
            <strong>Adaptability:</strong> MOVE has proven successful across
            diverse vulnerable populations, including quarry workers, beedi
            workers, MSMs, sexual minorities, slum youth, and rural women from
            SHGs. To date, MOVE has helped establish 365 successful businesses,
            with trainees experiencing significant profits within the first year
            and incomes doubling or even quadrupling.
          </li>
          <li>
            <strong>Handholding:</strong> We provide support to businesses until
            they break even, achieve reasonable profits, and become self-reliant
            and sustainable.
          </li>
          <li>
            <strong>Inclusivity:</strong> MOVE is a highly inclusive
            intervention, welcoming participants from various backgrounds and
            identities, including gender and sexual minorities, sex workers, and
            Dalit populations.
          </li>
        </ul>
      </section>

      <section>
        <h2>Our Vision</h2>
        <p>
          BPF aims to create at least 20,000 new businesses over the next five
          years. We plan to scale up MOVE by partnering with METSCON to
          establish a Centre of Excellence, furthering our mission to enhance
          livelihoods and drive economic empowerment.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
