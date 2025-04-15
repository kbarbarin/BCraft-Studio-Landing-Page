import React from "react";
import './Knowledge.css';

function Knowledge () {
    return (
        <section className="knowledge">
            <h1 className="knowledge-title">Ce que nous savons faire</h1>
            <div className="knowledge-details">
                <article className="knowledge-details-articles">
                    <img src="/website.png" alt="web"/>
                    <h2>Web</h2>
                    <p>Site web modernes et applications web performantes</p>
                </article>
                <article className="knowledge-details-articles">
                    <img src="/phone.png" alt="web"/>
                    <h2>Mobile</h2>
                    <p>Site web modernes et applications web performantes</p>
                </article>
                <article className="knowledge-details-articles">
                    <img src="/pencil.png" alt="web"/>
                    <h2>UI/UX</h2>
                    <p>Site web modernes et applications web performantes</p>
                </article>
                <article className="knowledge-details-articles">
                    <img src="/graduate.png" alt="web"/>
                    <h2>Formation</h2>
                    <p>Site web modernes et applications web performantes</p>
                </article>
            </div>
        </section>
    );
}

export default Knowledge;