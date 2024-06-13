// src/components/TopBar.js
import React, { useEffect, useState } from 'react';
import './TopBar.css';

const TopBar = () => {
    const [dark, setDark] = useState(true);

    const toggleTheme = () => {
        setDark(prevDark => !prevDark);
    };

    useEffect(() => {
        console.log(dark);
    }, [dark]);

    return (
        
        <header className={ dark  ? "dark" : "top-bar" }>
            <div className="logo">My Blogs</div>
            <nav className="nav-links">
                <button onClick= {toggleTheme} >{dark ? "Theme - Dark" : "Theme - Light"}</button> 
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Narveer</a>
            </nav>
        </header>
    );
};

export default TopBar;
