import React from 'react';
import './Contact.css'
import useRippleEffect from "../effects/RippleEffect";
const Contact = () => {
    useRippleEffect('#contact');
    return (
        <section id={'contact'}>
            <div className={"page"} id={"contact"}>
                <h1>Contact</h1>
                <p>Email: <a href="mailto:hoanglyquoc@gmail.com">hoanglyquoc@gmail.com</a></p>
                <p>LinkedIn: <a href="https://linkedin.com/in/hoang-ly" target="_blank" rel="noopener noreferrer">linkedin.com/in/hoang-ly</a></p>
                <p>GitHub: <a href="https://github.com/Unravel2802" target="_blank" rel="noopener noreferrer">github.com/Unravel2802</a></p>
            </div>
        </section>
    );
};

export default Contact;
