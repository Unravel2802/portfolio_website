import React from 'react';
import useRippleEffect from "../effects/RippleEffect";
import './Project.css';
import ee from '../../images/ee.webp';
import wi from '../../images/webicon.png';

const Projects = () => {
    useRippleEffect('#projects')
    return (
        <section id={'projects'}>
            <div className={"projects-page"}>
                <h1 className={'projects-header'}>My Projects</h1>

                <div className={'projects-content'}>
                    <div className={'projects-image'}>
                        <img src={wi} alt={'alt web icon'}/>
                    </div>
                    <div className={'projects-item'}>
                        <h2>Porfolio Website</h2>
                        <p>
                            The Entity Extractor is a powerful Chrome extension that simplifies the process of extracting named
                            entities from any web page. With a single click, users can highlight text and instantly retrieve important
                            information such as names, locations, and dates. Whether you're a researcher annotating data, a student breaking
                            down complex texts, or anyone needing quick information retrieval, Entity Extractor streamlines your workflow,
                            making it easy to organize and analyze web content efficiently.
                        </p>
                    </div>
                    <div className={'projects-item'}>
                        <h2>Extract Entities</h2>
                        <p>
                            This portfolio website is a personal project built using React and CSS, serving as the foundation for showcasing
                            my work and professional journey. The site features a clean, simple design with intuitive navigation and includes
                            key sections of home, about, experience, projects, and contact. This website is a starting point that I will
                            continue to improve and expand over time as I grow and evolve as a developer
                        </p>
                    </div>
                    <div className={'projects-image'}>
                        <img src={ee} alt={'extract entities chrome extension icon'}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
