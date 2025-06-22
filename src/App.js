import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StarryBackground from './components/background/StarryBackground';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import './App.css';


const App = () => {
    return (
        <Router>
            <StarryBackground />
            <div className="app-content">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
