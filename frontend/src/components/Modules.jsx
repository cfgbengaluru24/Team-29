import React, { useState } from 'react';
import './Modules.css';

const Modules = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const languages = ['English', 'Kannada', 'Telugu', 'Malayalam', 'Hindi'];

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
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
            className={`language-button ${selectedLanguage === language ? 'selected' : ''}`}
          >
            {language}
          </button>
        ))}
      </div>

      <div className="video-grid">
        <div className="video-box">Video 1</div>
        <div className="video-box">Video 2</div>
        <div className="video-box">Video 3</div>
        <div className="video-box">Video 4</div>
      </div>
    </div>
  );
};

export default Modules;








