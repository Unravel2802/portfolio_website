import React from 'react';
import './Experience.css';
import '../../App.css';
import fpt from '../../images/ai-fpt.jpeg'; // Replace with actual image paths
import vnpt from '../../images/smarthome-vnpt.png'; // Replace with actual image paths
import useRippleEffect from "../effects/RippleEffect";

const Experience = () => {
    useRippleEffect('#experience');

    return (
        <section id='experience'>
            <div className='experience-page'>
                <h1 className='experience-header'>Experience</h1>

                <div className='experience-content'>
                    <div className='experience-item'>
                        <h2>FPT Information System</h2>
                        <p>
                            I built a machine learning model that predicted patient wait times with 95% accuracy.
                            I also streamlined our AI toolkit, reducing the workload for data scientists by 30%.
                            Additionally, I resolved critical bugs in our data processing system, significantly
                            improving its reliability.
                        </p>
                    </div>
                    <div className='experience-image'>
                        <img src={fpt} alt='FPT Information System Project' />
                    </div>

                    <div className='experience-image'>
                        <img src={vnpt} alt='VNPT Technology Project' />
                    </div>
                    <div className='experience-item'>
                        <h2>VNPT Technology</h2>
                        <p>
                            I designed and launched a web app for expense tracking, achieving a 90% user satisfaction rate.
                            Additionally, I developed an efficient API for smooth frontend-backend communication and optimized
                            the app's performance by 20%.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
