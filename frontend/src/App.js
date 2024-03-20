import React from 'react';
import './App.css';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar';
import DiscoveryPage from './pages/DiscoveryPage';
import GenerateInformation from './pages/GenerateInformation';
import ClassesPage from './pages/ClassesPage';
import DonationPage from './pages/donationPage';
import { UserProvider } from './utils/userContext'; // Import UserProvider

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Router>
          <Sidebar /> 
          <Routes>
            <Route path="/" element={<DiscoveryPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/discovery" element={<DiscoveryPage />} />
            <Route path="/classes" element={<ClassesPage />} />
            <Route path="/generateInformation" element={<GenerateInformation />} />
            <Route path="/donations" element={<DonationPage />} />
          </Routes>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
