import React from 'react';
import './App.css';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar';
import DiscoveryPage from './pages/DiscoveryPage';
import GenerateInformation from './pages/GenerateInformation';

import ClassesPage from './pages/ClassesPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar /> {/* Sidebar now inside Router */}
        <Routes>
        <Route path="/" element={<DiscoveryPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/discovery" element={<DiscoveryPage />} />
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/generateInformation" element={<GenerateInformation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
