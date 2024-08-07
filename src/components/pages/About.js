import React from 'react';
import './About.css'
const About = () => {
    return (
        <div className={"about-page"} id={"about"}>
            <div className={"about-content"}>
                <h1>About Me</h1>
                <div className={"about-text"}>
                    <p>
                        Hi, I'm Hoang, a computer enthusiast from Hanoi, Vietnam.
                        I'm passionate about applying Machine Learning in fields like medicine and education.
                        My experience at VNPT Technology and FPT Information System has equipped me with skills in
                        full-stack web development and real-world ML applications. Currently, I'm a junior at the
                        University of Massachusetts Amherst.
                    </p>
                </div>
                <div className={"about-image"}>

                </div>
            </div>
        </div>
    );
};

export default About;
