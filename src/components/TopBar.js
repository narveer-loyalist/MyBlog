// src/components/TopBar.js
import React, { useMemo, useState } from 'react';
import './TopBar.css';

const TopBar = () => {
    const [dark,setDark] = useState(true)
    const toggleTheme = () => {
        setDark(prevDark => !prevDark);
        console.log(dark)
    };

    return (
        
        <header className={ dark  ? "dark" : "top-bar" }>
            <div className="logo">My Blog</div>
            
            <nav className="nav-links">
                <button onClick= {toggleTheme} >Theme Toggler</button> 
                <a href="/">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    );
};

export default TopBar;
