// Home.js
import React from 'react';
import './Home.css'; // Make sure to create this CSS file
import useRippleEffect from '../effects/RippleEffect';

const Home = () => {
    useRippleEffect('#home');

    return (
        <section id='home'>
            <div className='page' id='page'>
                <h1 className='main-title'>Hi, I'm Hoang.</h1>
                <h2 className='subtitle'>Just someone curious in Computer Science</h2>
            </div>
        </section>
    );
};

export default Home;
