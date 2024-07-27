import React, { useState } from 'react';
import './BankingSolutions.css';

const bankData = [
  { name: "Bank of Baroda", url: "https://www.bankofbaroda.in", logo: "./Bank-of-Baroda-logo.png" },
  { name: "Bank Of India", url: "https://www.bankofindia.co.in", logo: "./png-clipart-bank-of-india-logo-horizontal-bank-logos.png" },
  { name: "Axis Bank", url: "https://www.axisbank.com", logo: "./png-clipart-axis-bank-logo-horizontal-bank-logos.png" },
  { name: "Bank of Maharashtra", url: "https://www.bankofmaharashtra.in", logo: "./20231222141014.webp" },
  { name: "Canara Bank", url: "https://www.canarabank.com", logo: "./canara-bank.jpg" },
  { name: "State Bank of India", url: "https://www.onlinesbi.com", logo: "./sbi-logo-indian-bank-transparent-260nw-2352233325.webp" },
];

const BankingSolutions = () => {
  const [selectedBank, setSelectedBank] = useState("");

  const handleBankSelect = (bankName) => {
    setSelectedBank(bankName);
  };

  const handleSubmit = () => {
    const bank = bankData.find(b => b.name === selectedBank);
    if (bank) {
      window.location.href = bank.url;
    }
  };

  return (
    <div className="banking-solutions-container">
      <h1>BANKING SOLUTIONS</h1>
      <div className="bank-list">
        {bankData.map((bank) => (
          <div
            key={bank.name}
            className={`bank-card ${selectedBank === bank.name ? 'selected' : ''}`}
            onClick={() => handleBankSelect(bank.name)}
          >
            <div className="bank-info">
              <img src={bank.logo} alt={`${bank.name} logo`} className="bank-logo" />
              <span>{bank.name}</span>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleSubmit} disabled={!selectedBank}>
        Submit
      </button>
    </div>
  );
};

export default BankingSolutions;
