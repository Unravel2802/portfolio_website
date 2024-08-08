import React from 'react';
import useRippleEffect from "../effects/RippleEffect";

const Projects = () => {
    useRippleEffect('#projects')
    return (
        <section id={'projects'}>
            <div className={"page"} id={"projects"}>
                <h1>My Projects</h1>
            </div>
        </section>
    );
};

export default Projects;
