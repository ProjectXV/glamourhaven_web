import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Login from './pages/Authentication/Login';
import SignUp from './pages/Authentication/Signup';
import CompleteProfile from './pages/Authentication/CompleteProfile';
import Dashboard from './pages/Admin/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* External Pages */}
        <Route index element={<Home />} />

        {/* Authentication */}
        <Route path="/account/login" element={<Login />} />
        <Route path="/account/signup" element={<SignUp />} />
        <Route path="/account/complete-profile" element={<CompleteProfile />} />

        {/* Admin Pages */}
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
