import { useState } from 'react';

import images from '../../data/images';

function Process() {
    const processArray = [
        {
            label: 'User-Centric Research',
            description: 'Identify user needs, behaviors, and pain points',
        },
        {
            label: 'Design Thinking Application',
            description: 'Create innovative and user-friendly solutions',
        },
        {
            label: 'Rapid Prototyping',
            description: 'Bring ideas to life quickly and iteratively',
        },
        {
            label: 'Usability Testing',
            description: 'Refine designs for optimal user experience',
        },
        {
            label: 'User Engagement Strategies',
            description: 'Enhance user engagement and retention',
        },
        {
            label: 'Continuous Improvement',
            description: 'Iteratively improving products for enhanced outcomes',
        },
    ];

    const [isOpenAccordion, setIsOpenAccordion] = useState(
        Array(processArray.length).fill(false)
    );

    const toggleAccordion = (index) => {
        const updatedIsOpenAccordion = [...isOpenAccordion];
        updatedIsOpenAccordion[index] = !updatedIsOpenAccordion[index];
        setIsOpenAccordion(updatedIsOpenAccordion);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-3 lg:p-10 bg-gradient-to-b from-bgPrimary to-[#d7e4e0]/10 shadow-md backdrop-blur rounded-2xl border-bgPrimary text-white">
            {processArray.map((process, index) => (
                <div
                    key={process.label}
                    onClick={() => toggleAccordion(index)}
                    onKeyDown={() => toggleAccordion}
                    role="button"
                    tabIndex={0}
                    className="w-full flex flex-col border rounded-2xl border-bgSecondary px-2 py-5 lg:py-10 group-hover:text-white cursor-pointer"
                >
                    <div className="flex items-center justify-center relative h-full">
                        <h4 className="text-center font-thin lg:font-normal lg:text-xl text-white/75 transition-all delay-75 ease-in-out group-hover:text-white">
                            {process.label}
                        </h4>
                        <span className="absolute right-2 top-[25%]">
                            {isOpenAccordion[index] ? (
                                <images.upArrowIcon className="text-altSecond" />
                            ) : (
                                <images.downArrowIcon className="text-primary" />
                            )}
                        </span>
                    </div>
                    <p
                        className={`${
                            isOpenAccordion[index]
                                ? 'block opacity-100'
                                : 'hidden opacity-0'
                        } text-center text-xs font-thin text-white/75 transition-all delay-100 duration-200 ease-in-out group-hover:text-white lg:text-sm`}
                    >
                        {process.description}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default Process;
