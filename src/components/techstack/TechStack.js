import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiTailwindcss, SiKotlin } from 'react-icons/si';
import './TechStack.css';

const TechStack = () => {
    return (
        <div className="solar-wrapper">
            <div className="solar-system">
                <div className="sun">
                    <div className="sun-glow"/>
                </div>

                <div className="orbit orbit-react">
                    <div className="planet">
                        <FaReact size={35} color="#61DBFB" />
                    </div>
                </div>
                <div className="orbit orbit-html">
                    <div className="planet">
                        <FaHtml5 size={35} color="#E34F26" />
                    </div>
                </div>
                <div className="orbit orbit-css">
                    <div className="planet">
                        <FaCss3Alt size={35} color="#264de4" />
                    </div>
                </div>
                <div className="orbit orbit-js">
                    <div className="planet">
                        <FaJsSquare size={35} color="#F0DB4F" />
                    </div>
                </div>
                <div className="orbit orbit-tailwind">
                    <div className="planet">
                        <SiTailwindcss size={35} color="#38B2AC" />
                    </div>
                </div>
                <div className="orbit orbit-kotlin">
                    <div className="planet">
                        <SiKotlin size={35} color="#7F52FF" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechStack;