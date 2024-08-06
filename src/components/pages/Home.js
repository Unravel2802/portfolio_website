import React, { useEffect } from 'react';
import './Home.css'; // Make sure to create this CSS file
import $ from 'jquery';
import 'jquery.ripples';

const Home = () => {
    useEffect(() => {
        $('#home').ripples({
            resolution: 256,
            dropRadius: 40,
            perturbance: 0.04
        });

        // Function to create ripples at mouse position
        const createRippleAtMouse = (event) => {
            const $home = $('#home');
            const x = event.clientX;
            const y = event.clientY;
            const dropRadius = 30;
            const strength = 0.08;

            $home.ripples('drop', x, y, dropRadius, strength);
        };

        // Add mousemove event listener to create ripples
        document.getElementById('home').addEventListener('mousemove', createRippleAtMouse);

        // Cleanup on unmount
        return () => {
            $('#home').ripples('destroy');
            document.getElementById('home').removeEventListener('mousemove', createRippleAtMouse);
        };
    }, []);

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
