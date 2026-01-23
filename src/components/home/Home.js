// Home.js
import React from 'react';
import Profile from '../profile/Profile';
import Projects from '../projects/Projects';
import './Home.css';
import TechStack from "../techstack/TechStack";
import Experiencie from '../experiencie/Experiencie';

const Home = () => {
    return (
        <div>
            <Profile/>
            <Experiencie/>
            <Projects />
            <TechStack/>
        </div>
    );
};

export default Home;
