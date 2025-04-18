import React from "react";
import './Main.css';

function Main() {
    return (
        <section className="main">
            <div className="main-info">
                <h1 className="main-info-title">Développons vos idées</h1>
                <p className="main-info-text">Applications et sites sur mesure pour les professionnels exigants</p>
                <a href="#contact" className="main-info-button">Travaillons ensemble →</a>
            </div>
            <div className="main-image">
                <img className="main-image-img" src="/mainImage.png" />
            </div>
        </section>
    )
}

export default Main;