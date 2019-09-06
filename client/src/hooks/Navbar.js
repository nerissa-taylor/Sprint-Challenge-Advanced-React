import React, { useState } from 'react';
import useDarkMode from './useDarkMode';
import { useLocalStorage } from './useLocalStorage';

const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode('dark-mode');
    const toggleMode = (e) => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <nav className="navbar">
            <h1>Players Club</h1>
            <div className="dark-mode__toggle">
                <button onClick={toggleMode} className={darkMode ? 'toggle toggled' : 'toggle'}>DarkMode</button> />
            </div>
        </nav>
    );
};

export default Navbar;
