import React from 'react';
import './Home.css';
import '../../App.css'; // Import global styles
import useRippleEffect from '../effects/RippleEffect';

const Home = () => {
    useRippleEffect('#home');

    return (
        <section id='home'>
            <div className='page'>
                <h1 className='main-title'>Hi, I'm Hoang.</h1>
                <h2 className='subtitle'>Just someone curious in Computer Science</h2>
            </div>
        </section>
    );
};

export default Home;
