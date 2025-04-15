import React from "react";
import './Mission.css';

function Missions() {
    return (
        <section className="missions">
            <h1 className="missions-title">Notre Mission</h1>
            <p className="missions-text">Nous créons des solutions digitales innovantes qui transforment vos idées en réalité.
                Notre expertise technique et notre créativité nous permettent de développer des applications qui dépassent vos attentes.</p>
            <div className="missions-elements">
                <article className="missions-elements-articles">
                    <img src="/Ampoule.png" alt="ampoule" />
                    <h1>Innivation</h1>
                    <p>Nous repoussons les limites pour créer des solutions avant-gardistes.</p>
                </article>
                <article className="missions-elements-articles">
                <img src="/handshake.png" alt="handshake" />
                    <h1>Collaboration</h1>
                    <p>Un partenariat étroit pour des résultats execptionnels.</p>
                </article>
                <article className="missions-elements-articles">
                <img src="/rocket.png" alt="rocket" />
                    <h1>Excellence</h1>
                    <p>La qualité est au coeur de chaque ligne de code.</p>
                </article>
            </div>
        </section>
    )
}

export default Missions;