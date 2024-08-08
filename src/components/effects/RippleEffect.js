import { useEffect } from 'react';
import $ from 'jquery';
import 'jquery.ripples';

const useRippleEffect = (selector) => {
    useEffect(() => {
        $(selector).ripples({
            resolution: 256,
            dropRadius: 60,
            strength: 0.06
        });

        const createRippleAtMouse = (event) => {
            const $element = $(selector);
            const x = event.clientX;
            const y = event.clientY;
            const dropRadius = 45;
            const strength = 0.08;

            $element.ripples('drop', x, y, dropRadius, strength);
        };

        const element = document.querySelector(selector);
        if (element) {
            element.addEventListener('mousemove', createRippleAtMouse);
        }

        return () => {
            $(selector).ripples('destroy');
            if (element) {
                element.removeEventListener('mousemove', createRippleAtMouse);
            }
        };
    }, [selector]);
};

export default useRippleEffect;
