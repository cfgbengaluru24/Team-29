import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import FaqList from './components/Faq/Faq';
import './components/Faq/faq.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Nav />
      <FaqList />
      <Footer/>
    </div>
  );
}

export default App;
