import React from 'react';

const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div>
                <h3>Placedotio</h3>
                <p>React, Firebase, NodeJS (June 2023 – Sept 2023)</p>
                <ul>
                    <li>Developed an interactive web application using JavaScript and React.js.</li>
                    <li>Implemented Firebase authentication to secure user data and provide a seamless login experience.</li>
                    <li>Utilized Firebase real-time database to ensure synchronized updates to the canvas.</li>
                    <li>Employed React for server-side operations, ensuring a smooth user experience even during peak usage periods.</li>
                </ul>
            </div>
            <div>
                <h3>Entities Extract</h3>
                <p>Chrome Extension, Django, spaCy (May 2024 – July 2024)</p>
                <ul>
                    <li>Implemented a text analysis algorithm to identify and return various types of entities.</li>
                    <li>Designed the extension to assist researchers and data scientists with text data annotation for machine learning tasks.</li>
                    <li>Integrated features to aid students in breaking down complex texts into recognizable entities.</li>
                    <li>Proposed future enhancements including user customization options, multi-language support, and integration with platforms like Google Drive and Slack.</li>
                </ul>
            </div>
        </section>
    );
};

export default Projects;
