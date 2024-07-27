import { useState } from "react";
import Sidebar from "../../src/components/Side/Sidebar";
import Modules from "../../src/components/Modules";
import TraineeList from "../../src/components/TraineeList";

import FaqList from "../../src/components/Faq/Faq";

const Trainer = () => {
  const [selectedComponent, setSelectedComponent] = useState("dashboard");

  // Function to render the component based on the selected sidebar item
  const renderComponent = () => {
    switch (selectedComponent) {
      case "dashboard":
        return <Modules />;
      case "aiAssistance":
        return (
          <>
            <iframe
              src="https://crewaitutorial-6j4yzbngokfjahpeh2mwtt.streamlit.app/?embed=true"
              height="450"
              style={{ width: "100%" }}
            ></iframe>
          </>
        );
      case "trainee":
        return <TraineeList />;
      case "faqs":
        return <FaqList />;
      default:
        return <></>;
    }
  };

  return (
    <div>
      <Sidebar onSelect={setSelectedComponent} />
      <div className="main-content">{renderComponent()}</div>
    </div>
  );
};

export default Trainer;
