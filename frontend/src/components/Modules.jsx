import React, { useState } from "react";
import "./Modules.css";
import axios from 'axios';

const Modules = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [videoUrl, setVideoUrl] = useState("");
  const [apiResponse, setApiResponse] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const languages = ["Hindi", "Kannada", "Telugu", "Malayalam"];
  const dict = [
    {
      name: "Hindi",
      link: "https://www.youtube.com/embed/4VWfhW0X8nA?si=TF48EAA5Vp090WDf"
    },
    {
      name: "Kannada",
      link: "https://www.youtube.com/embed/GtAr3YrDVtw?si=sGG2bxkr9To-XgS_"
    },
    {
      name: "Telugu",
      link: "https://www.youtube.com/embed/wXCHy57QK78?si=snz-n8vFtQaHWgQu"
    },
    {
      name: "Malayalam",
      link: "https://www.youtube.com/embed/b3_2xeuEczA?si=qaMYxsPU1WPfWHbZ"
    }
  ];

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const handleVideoUrlChange = (e) => {
    setVideoUrl(e.target.value);
  };

  const trans = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/upload",
        {
          language: selectedLanguage,
          videoUrl: videoUrl
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);

      setApiResponse(response.data.analysis);
      setIsLoading(false);
    } catch (error) {
      setErrorMessage(`An error occurred: ${error.message}`);
      console.error("Error details:", error);
      setIsLoading(false);
    }
  };

  const getVideoLink = (language) => {
    const languageObj = dict.find((lang) => lang.name === language);
    return languageObj ? languageObj.link : "";
  };

  return (
    <div className="modules-container">
      <h1 className="modules-heading">Modules</h1>
      <div className="language-selector">
        <p>Select language:</p>
        {languages.map((language) => (
          <button
            key={language}
            onClick={() => handleLanguageChange(language)}
            className={`language-button ${
              selectedLanguage === language ? "selected" : ""
            }`}
          >
            {language}
          </button>
        ))}
      </div>

      {isLoading && <p>Loading...</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {apiResponse && <div className="api-response">{apiResponse}</div>}

      <div className="video-grid">
        {Array(4).fill().map((_, index) => (
          <div className="video-box" key={index}>
            {`Video ${index + 1}`}
            <iframe
              src={getVideoLink(selectedLanguage)}
              title={`YouTube video player ${index + 1}`}
              autoPlay
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modules;
