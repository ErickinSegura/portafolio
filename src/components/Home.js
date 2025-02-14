// Home.js
import React from 'react';
import Profile from './profile/Profile';
import Projects from './projects/Projects';
import './Home.css';

const Home = () => {
    return (
        /* <div className="home-container">
            <aside className="profile-sidebar">
                <Profile />
            </aside>
            <main className="main-content">
                <projects />
                </main></div> */
        <div>
            <Profile/>
            <Projects/>
        </div>



    );
};

export default Home;
