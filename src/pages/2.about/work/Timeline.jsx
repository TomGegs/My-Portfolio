import TimelineEvents from './TimelineEvents';

function Timeline() {
    const timelineStyle =
        'group h-full w-full lg:border-l lg:border-bgPrimary delay-75 lg:before:absolute lg:before:z-10 lg:before:h-[1px] lg:before:w-[15px] lg:before:translate-y-8  lg:before:bg-white/30 lg:before:transition-all lg:before:delay-75 lg:before:ease-in lg:hover:border-l lg:before:hover:bg-altSecond';
    const careerData = [
        {
            sectionTitle: 'Career',
            position: 'React Developer ',
            employeer: 'Freelance',
        },
        {
            position: '(Acting) Director Transformation Delivery Office',
            employeer: 'Public Trustee of Queensland',
        },
        {
            position: 'Continuous Improvement (CI) Delivery Lead ',
            employeer: 'Public Trustee of Queensland',
        },
        {
            position: 'Digital Analyst',
            employeer: 'Public Trustee of Queensland',
        },
        {
            position: 'Business Analyst',
            employeer: 'C.P.L. - Choice, Passion, Life',
            description:
                'User research, process mapping, and requirements gathering',
        },
        {
            position: 'Business Growth Manager',
            employeer: 'ShareStory',
        },
    ];

    const venturesData = [
        {
            sectionTitle: 'Ventures',
            position: 'Co-Founder',
            employeer: 'TOKN ',
            description:
                'Startup to connect the community with XR and Web3 opportunities',
        },
        {
            position: 'Co-Founder',
            employeer: 'Right Click Gaming',
        },
        {
            position: 'Event Host',
            employeer: 'RoboWars Australia',
        },
    ];

    return (
        <div className="relative flex h-full w-full flex-col">
            {/* 2023 */}
            <div className={timelineStyle}>
                {careerData.map((career, i) => (
                    <TimelineEvents
                        key={career.position}
                        sectionTitle={career.sectionTitle}
                        position={career.position}
                        employeer={career.employeer}
                        description={career.description}
                    />
                ))}
            </div>
            {/* Projects */}
            <div className={timelineStyle}>
                {venturesData.map((venture, i) => (
                    <TimelineEvents
                        key={venture.key}
                        sectionTitle={venture.sectionTitle}
                        position={venture.position}
                        employeer={venture.employeer}
                        description={venture.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default Timeline;
