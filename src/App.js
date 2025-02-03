import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StarryBackground from './components/background/StarryBackground';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Techstack from './components/profile/Techstack';
import './App.css';

const App = () => {
    return (
        <Router>
            <StarryBackground />

            <div className="app-content">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Profile />} />
                    <Route path="/techstack" element={<Techstack />} />
                </Routes>
            </div>


        </Router>
    );
};

export default App;
