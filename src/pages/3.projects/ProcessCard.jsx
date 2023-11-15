import { useState } from 'react';

import images from '../../data/images';

function ProcessCard() {
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
        <div className="grid grid-cols-1 gap-4 rounded-2xl border-bgPrimary bg-gradient-to-b from-bgPrimary to-[#d7e4e0]/10 p-3 text-white shadow-md backdrop-blur lg:grid-cols-3 lg:p-10">
            {processArray.map((process, index) => (
                <div
                    key={process.label}
                    onClick={() => toggleAccordion(index)}
                    onKeyDown={() => toggleAccordion}
                    role="button"
                    tabIndex={0}
                    className="flex w-full cursor-pointer flex-col rounded-2xl border border-bgSecondary px-2 py-5 lg:py-10"
                >
                    <div className="relative flex h-full items-center justify-center">
                        <h4 className="text-center font-thin text-white transition-all delay-75 ease-in-out lg:text-xl lg:font-normal">
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
                        } text-center text-xs font-thin text-white transition-all delay-100 duration-200 ease-in-out lg:text-sm`}
                    >
                        {process.description}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default ProcessCard;
