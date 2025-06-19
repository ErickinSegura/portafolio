// Home.js
import React from 'react';
import Profile from '../profile/Profile';
import Projects from '../projects/Projects';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Profile/>
            <Projects/>
        </div>
    );
};

export default Home;
