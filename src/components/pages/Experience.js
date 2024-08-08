import React from 'react';
import useRippleEffect from "../effects/RippleEffect";

const Experience = () => {
    useRippleEffect('#experience');
    return (
        <section id={'experience'}>
            <div className={"page"} id={"experience"}>
                <h1>My Experience</h1>
            </div>
        </section>
    );
};

export default Experience;
