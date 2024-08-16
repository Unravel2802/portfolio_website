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
                    <div className={'projects-item'}>
                        <h2>Porfolio Website</h2>
                        <div className={'projects-image'}>
                            <img src={wi} alt={'alt web icon'}/>
                        </div>
                    </div>
                    <div className={'projects-item'}>
                        <h2>Extract Entities</h2>
                        <div className={'projects-image'}>
                            <img src={ee} alt={'extract entities chrome extension icon'}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
