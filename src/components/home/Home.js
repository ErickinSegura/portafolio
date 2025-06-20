// Home.js
import React from 'react';
import Profile from '../profile/Profile';
import Projects from '../projects/Projects';
import './Home.css';
import TechStack from "../techstack/TechStack";

const Home = () => {
    return (
        <div>
            <Profile/>
            <Projects/>
            <TechStack/>
        </div>
    );
};

export default Home;
