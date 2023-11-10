import TimelineEvents from './TimelineEvents';

function Timeline() {
    const timelineStyle =
        'group h-full w-full lg:border-l lg:border-bgPrimary delay-75 lg:before:absolute lg:before:z-10 lg:before:h-[1px] lg:before:w-[15px] lg:before:translate-y-8  lg:before:bg-white/30 lg:before:transition-all lg:before:delay-75 lg:before:ease-in lg:hover:border-l lg:before:hover:bg-altSecond';
    const careerData = [
        {
            sectionTitle: 'Career',
            position: 'Front-end Developer ',
            employer: 'Freelance',
        },
        {
            position: '(Acting) Director Transformation Delivery Office',
            employer: 'Public Trustee of Queensland',
        },
        {
            position: 'Continuous Improvement (CI) Delivery Lead ',
            employer: 'Public Trustee of Queensland',
        },
        {
            position: 'Digital Analyst',
            employer: 'Public Trustee of Queensland',
        },
        {
            position: 'Business Analyst',
            employer: 'C.P.L. - Choice, Passion, Life',
            description:
                'User research, process mapping, and requirements gathering',
        },
        {
            position: 'Business Growth Manager',
            employer: 'ShareStory',
        },
    ];

    const venturesData = [
        {
            sectionTitle: 'Ventures',
            position: 'Co-Founder',
            employer: 'TOKN ',
            description:
                'Startup to connect the community with XR and Web3 opportunities',
        },
        {
            position: 'Co-Founder',
            employer: 'Right Click Gaming',
        },
        {
            position: 'Event Host',
            employer: 'RoboWars Australia',
        },
    ];

    return (
        <div className="relative flex h-full w-full flex-col">
            {/* 2023 */}
            <div className={timelineStyle}>
                {careerData.map((career) => (
                    <TimelineEvents
                        key={career.position}
                        sectionTitle={career.sectionTitle}
                        position={career.position}
                        employer={career.employer}
                        description={career.description}
                    />
                ))}
            </div>
            {/* Projects */}
            <div className={timelineStyle}>
                {venturesData.map((venture) => (
                    <TimelineEvents
                        key={venture.key}
                        sectionTitle={venture.sectionTitle}
                        position={venture.position}
                        employer={venture.employer}
                        description={venture.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default Timeline;
