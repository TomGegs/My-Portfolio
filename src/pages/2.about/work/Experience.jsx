import Divider from '../../../components/divider/Divider';
import ExperienceCard from './ExperienceCard';

function Career() {
    const careerData = [
        {
            sectionTitle: 'Dev Career',
            position: 'Front-End Developer ',
            employer: 'Recovere.Org',
            id: 'react-developer',
        },
        {
            position: 'Front-End Developer ',
            employer: 'Queensland XR Hub',
            id: 'react-developer',
        },
        {
            position: 'Web Develoepr',
            employer: 'Gest Health Australia',
            id: 'react-developer',
        },
    ];
    const previousExperienceData = [
        {
            sectionTitle: 'Previous Exp',
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
            <div className="flex flex-col lg:px-2">
                {careerData.map((career) => (
                    <ExperienceCard
                        key={career.id}
                        sectionTitle={career.sectionTitle}
                        position={career.position}
                        employer={career.employer}
                        description={career.description}
                    />
                ))}
            </div>
            <Divider />
            {/* Previous Experience */}
            <div className="flex flex-col lg:px-2 ">
                {previousExperienceData.map((career) => (
                    <ExperienceCard
                        key={career.id}
                        sectionTitle={career.sectionTitle}
                        position={career.position}
                        employer={career.employer}
                        description={career.description}
                    />
                ))}
            </div>
            <Divider />
            <div className="flex h-fit flex-col rounded-2xl border-bgPrimary lg:px-2 lg:pb-2">
                {/* Ventures */}

                {businessVenturesData.map((venture) => (
                    <ExperienceCard
                        key={venture.id}
                        sectionTitle={venture.sectionTitle}
                        position={venture.position}
                        employer={venture.employer}
                        description={venture.description}
                    />
                ))}
            </div>
            <Divider />
            <div className="flex h-fit flex-col rounded-2xl border-bgPrimary lg:px-2 lg:pb-2">
                {/* Other Ventures */}

                {otherVenturesData.map((otherVenture) => (
                    <ExperienceCard
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
