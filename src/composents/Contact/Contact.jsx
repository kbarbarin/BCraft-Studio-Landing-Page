import React from "react";
import './Contact.css';

function Contact () {
    return (
        <section className="contact">
            <form className="contact-form">
                <h1>Parlons de votre projet</h1>
                <label>Nom complet</label>
                <input type="text"/>
                <label>Email</label>
                <input type="text"/>
                <label>Message</label>
                <textarea rows="5"/>
                <input type="submit" value="Envoyer le message" />
            </form>
        </section>
    );
}

export default Contact;