import React from 'react';
import './App.css';
import logo from './assets/headshot.jpg';
import Section from "./project/section";

function App() {
    return (
        <div className="App container">
            <div className="header">
                <img src={logo} alt="Jonathan Tang" className="profile-picture"/>
                <hr className="divider"/>
                <h1>Jonathan Tang</h1>
                <div className="portfolio-links">
                    <a href="https://github.com/tangjon">Github</a>
                    <span>•</span>
                    <a href="https://www.linkedin.com/in/tangjoncl/">LinkedIn</a>
                    <span>•</span>
                    <a href="#">Email</a>
                </div>
            </div>
            <Section/>
        </div>
    );
}

export default App;
