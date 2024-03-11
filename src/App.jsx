import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Landing from './LandingPage';
import Login from './LoginPage.jsx';
import SignUp from './Signup.jsx';
import Navbar from './components/Navbar.jsx';
import SwipeableTemporaryDrawer from './components/Sidebar.jsx';
import SAttendance from './components/SAttendance.jsx';
import TAttendance from './components/TAttendance.jsx';
import Community from './components/Community.jsx';
import Chatbot from './components/Chatbot.jsx';
import Home from './components/Home.jsx';
import TAssignment from './components/TAssignment.jsx';
import SAssignment from './components/SAssignment.jsx';
import AnnouncementSection from './components/Announcement.jsx';
import InsideClass from './components/InsideClass.jsx';
import JoinClass from './components/JoinClass.jsx';
import CreateClass from './components/CreateClass.jsx';

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
          <Route path="/sattendance" element={<SAttendance />} />
          <Route path="/tattendance" element={<TAttendance />} />
          <Route path="/tassignment" element={<TAssignment />} />
          <Route path="/sassignment" element={<SAssignment />} />
          <Route path="/community" element={<Community />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/home" element={<Home />} />
          <Route path="/announcement" element={<AnnouncementSection />} />
          <Route path="/insideclass" element={<InsideClass />} />
          <Route path="/joinclass" element={<JoinClass />} />
          <Route path="/createclass" element={<CreateClass />} />

        </Routes>
      </Router>
      </div>
    
  );
}

export default App;
