import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Landing from './LandingPage';
import Login from './LoginPage.jsx';
import SignUp from './Signup.jsx';
import Navbar from './components/Navbar.jsx';
import SwipeableTemporaryDrawer from './components/Sidebar.jsx';

function App() {
  

  return (
  
      <div>
        <Router>
        <Routes>
        <Route path="/" element={<Login/>} /> 
        <Route path="/signup" element={<SignUp />} /> 
          <Route path="/landing" element={<Landing />} />        
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/sidebar" element={<SwipeableTemporaryDrawer />} />
        </Routes>
      </Router>
      </div>
    
  );
}

export default App;
