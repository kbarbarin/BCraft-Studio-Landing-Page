import React from "react";

import './Header.css';

function Header () {
    return (
        <header className="header">
            <img src="./Small Logo.png" alt="logo" />
            <h1>BCraft</h1>
            <h1>Studio</h1>
            <h2>A Propos</h2>
            <h2>Services</h2>
            <h2>Expertise</h2>
            <button>Nous Contacter</button>
        </header>
    )
}

export default Header;