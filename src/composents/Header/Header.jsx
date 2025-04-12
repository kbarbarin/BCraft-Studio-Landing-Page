import React from "react";

import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                <img src="./Small Logo.png" className="header-logo-img" alt="logo" />
                <h1 className="header-logo-bcraft">BCraft</h1>
                <h1 className="header-logo-studio">Studio</h1>
            </div>
            <nav className="header-nav">
                <a className="header-nav-link">À Propos</a>
                <a className="header-nav-link">Services</a>
                <a className="header-nav-link">Expertise</a>
                <button className="header-nav-button">Nous Contacter</button>
            </nav>
        </header>
    )
}

export default Header;