import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
import Login from './components/login_page/Login';
import Signup from './components/login_page/Signup';
import Home from './components/Home/Home';
import Navbar from './components/navbar/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResetPassword from "./components/login_page/ResetPassword";
import 'leaflet/dist/leaflet.css';

import Essentials from './components/Essentials/Essentials';
import Explore from './components/Explore/Explore';
import Create from './components/Create/Create';
import Consult from './components/Consult/Consult';
import Train from './components/Train/Train';
import Settings from './components/Setting/Settings';
import Users from './components/Explore Users/Users';
import Reels from "./components/Reels/Reels"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Add a loading state
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Check if the token exists
    setIsLoading(false); // Set loading to false after checking token
  }, []);

  if (isLoading) {
    // Optionally, render a loading indicator while checking for the token
    return (<div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>);
  }

  return (
    <div className="App">
      {isLoggedIn ? (
        <Routes>
          <Route path="/" element={<><Navbar /><Home /></>} />
          <Route path="/Essentials" element={<Essentials />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/Consult" element={<Consult />} />
          <Route path="/Train" element={<Train />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Reels" element={<Reels />} />
          <Route path="/Users" element={<Users />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      ) : (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <Routes location={location}>
              <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/Forget-Password" element={<ResetPassword />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      )}
    </div>
  );
}

export default App;
