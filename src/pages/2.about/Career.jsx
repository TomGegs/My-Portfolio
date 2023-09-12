import TimelineEvents from './work/TimelineEvents';

function Career() {
    const careerData = [
        {
            sectionTitle: 'Career (so far!)',
            position: 'React Developer ',
            employer: 'Freelance',
            id: 'react-developer',
        },
        {
            position: '(Acting) Director Transformation Delivery Office',
            employer: 'Public Trustee of Queensland',
            id: 'director-transformation-delivery-office',
        },
        {
            position: 'Continuous Improvement (CI) Delivery Lead ',
            employer: 'Public Trustee of Queensland',
            id: 'ci-delivery-lead',
        },
        {
            position: 'Digital Analyst',
            employer: 'Public Trustee of Queensland',
            id: 'digital-analyst',
        },
        {
            position: 'Business Analyst',
            employer: 'C.P.L. - Choice, Passion, Life',
            description:
                'User research, process mapping,and requirements gathering',
            id: 'business-analyst',
        },
        {
            position: 'Business Growth Manager',
            employer: 'ShareStory',
            id: 'business-growth-manager',
        },
    ];

    const businessVenturesData = [
        {
            sectionTitle: 'Ventures',
            position: 'Co-Founder',
            employer: 'TOKN ',
            description:
                'Start-up to connect the community with XR and Web3 opportunities',
            id: 'co-founder-tokn',
        },
        {
            position: 'Co-Founder',
            employer: 'Right Click Gaming',
            id: 'co-founder-right-click-gaming',
        },
        {
            position: 'Event Host',
            employer: 'RoboWars Australia',
            id: 'event-host-robowars-australia',
        },
        {
            position: 'Workshop Facilitator',
            employer: 'Cirrus Robotics',
            id: 'workshop-facilitator-cirrus-robotics',
        },
    ];
    const otherVenturesData = [
        {
            sectionTitle: 'Other',
            position: 'English Teacher - Volunteer',
            employer: 'Hanoi, Vietnam - Language Link ',
            description:
                'Start-up to connect the community with XR and Web3 opportunities',
            id: 'english-teacher-volunteer',
        },
        {
            position: 'Dog Adoption - Volunteer',
            employer: 'RSPCA',
            id: 'dog-adoption-volunteer',
        },
        {
            position: 'Product Model ',
            employer: 'Gest Health',
            id: 'product-model-gest-health',
        },
    ];

    return (
        <div className="relative flex h-full w-full flex-col justify-between gap-y-4 py-4 lg:flex-row lg:gap-y-0 lg:rounded-2xl lg:border-bgPrimary lg:bg-gradient-to-b lg:from-bgPrimary lg:to-[#d7e4e0]/10 lg:p-10 lg:shadow-md lg:backdrop-blur">
            {/* Career */}
            <div className="flex flex-col ">
                {careerData.map((career) => (
                    <TimelineEvents
                        key={career.id}
                        sectionTitle={career.sectionTitle}
                        position={career.position}
                        employer={career.employer}
                        description={career.description}
                    />
                ))}
            </div>

            <div className="flex h-fit flex-col rounded-2xl border-bgPrimary from-bgPrimary to-[#d7e4e0]/0 shadow-md backdrop-blur lg:bg-gradient-to-b lg:px-10 lg:pb-2">
                {/* Ventures */}

                {businessVenturesData.map((venture) => (
                    <TimelineEvents
                        key={venture.id}
                        sectionTitle={venture.sectionTitle}
                        position={venture.position}
                        employer={venture.employer}
                        description={venture.description}
                    />
                ))}
            </div>
            <div className="flex h-fit flex-col rounded-2xl border-bgPrimary from-bgPrimary to-[#d7e4e0]/10 shadow-md backdrop-blur lg:bg-gradient-to-b lg:px-10 lg:pb-2">
                {/* Other Ventures */}

                {otherVenturesData.map((otherVenture) => (
                    <TimelineEvents
                        key={otherVenture.id}
                        sectionTitle={otherVenture.sectionTitle}
                        position={otherVenture.position}
                        employer={otherVenture.employer}
                        description={otherVenture.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default Career;
