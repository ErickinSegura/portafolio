import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StarryBackground from './components/background/StarryBackground';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home';
import TechStack from './components/techstack/TechStack';
import './App.css';
import MainBlog from "./components/blog/MainBlog";


const App = () => {
    return (
        <Router>
            <StarryBackground/>
            <div className="app-content">
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/techstack" element={<TechStack/>}/>
                    <Route path={"/blog"} element={<MainBlog/>}/>
                </Routes>
            </div>
        </Router>

    );
};

export default App;
