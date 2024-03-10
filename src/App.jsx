import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Landing from './LandingPage';
import Login from './LoginPage.jsx';
import SignUp from './Signup.jsx';
import Navbar from './components/Navbar.jsx';
import SwipeableTemporaryDrawer from './components/Sidebar.jsx';
import Attendance from './components/Attendance.jsx';
import Assignment from './components/Assignment.jsx';
import Community from './components/Community.jsx';
import QuizSection from './components/Quiz.jsx';
import Chatbot from './components/Chatbot.jsx';
import Home from './components/Home.jsx';

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
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/assignment" element={<Assignment />} />
          <Route path="/community" element={<Community />} />
          <Route path="/quiz" element={<QuizSection />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
      </div>
    
  );
}

export default App;
