import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Employee from './components/Employee/Employee.js';
import Home from './components/Home/Home.js';
import exemploJSON from './exemploJSON.json';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/funcionarios" element={<Employee data={exemploJSON} />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
