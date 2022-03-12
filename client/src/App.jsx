import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Authentication/Login';
import SignUp from './pages/Authentication/Signup';
import CompleteProfile from './pages/Authentication/CompleteProfile';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* External Pages */}
        <Route index element={<Home />} />
        <Route path="/account/login" element={<Login />} />
        <Route path="/account/signup" element={<SignUp />} />
        <Route path="/account/complete-profile" element={<CompleteProfile />} />
      </Routes>
    </div>
  );
}

export default App;
