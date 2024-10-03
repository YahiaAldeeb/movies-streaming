import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
       <Header />
       <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<LoginPage />} />
       
      </Routes>
    </Router>
    </div>
  );
}

export default App;
