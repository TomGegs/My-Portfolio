'use client';

import { useState } from 'react';

export function useMultistep(steps) {
    const [currentAboutIndex, setCurrentAboutIndex] = useState(0);

    // move to next step
    function next() {
        setCurrentAboutIndex((current) => {
            if (current >= steps?.length - 1)
                return current - steps?.length + 1;
            return current + 1;
        });
    }

    // move to previous step
    function back() {
        setCurrentAboutIndex((current) => {
            if (current <= 0) return current + steps?.length - 1;
            return current - 1;
        });
    }

    // go to specific step
    function goToStep(stepIndex) {
        setCurrentAboutIndex(stepIndex);
    }

    return {
        currentAboutIndex,
        step: steps[currentAboutIndex],
        steps,
        next,
        back,
        goToStep,
    };
}

export default useMultistep;
