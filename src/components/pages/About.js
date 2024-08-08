import React, { useEffect } from 'react';
import './About.css'
import hoang from '../../images/about.jpg';
import $ from 'jquery';
import 'jquery.ripples';
import useRippleEffect from "../effects/RippleEffect";
const About = () => {
    useRippleEffect('#about')
    return (
        <section id={"about"}>
            <div className={"page about-page"} id={"about"}>
                <h1>About Me</h1>
                <div className={"about-content"}>
                    <div className={"about-text"}>
                        <p>
                            My name is Ly Quoc Hoang (you can call me Justin), a computer enthusiast from Hanoi,
                            Vietnam. I'm interested in the application of Machine Learning in other fields like medicine and education.
                            My experience at VNPT Technology and FPT Information System has equipped me with skills in
                            full-stack web development and real-world ML applications. Right now, I'm a junior studying computer
                            science and mathematics at the University of Massachusetts Amherst.
                        </p>
                    </div>
                    <div className={"about-image"}>
                        <img src={hoang} alt={"hoang"}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
