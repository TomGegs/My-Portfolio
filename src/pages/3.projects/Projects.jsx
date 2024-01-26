/* spell-checker: disable */

import portfolioItems from '../../data/portfolioItems';
import ShowcaseCard from './ShowcaseCard';
import ProcessCard from './ProcessCard';
import TechCard from './TechCard';

function Projects() {
    const completedProjectArray = portfolioItems.filter(
        (project) => project.completed === true
    );

    const inProgressProjectArray = portfolioItems.filter(
        (project) => project.completed === false
    );

    return (
        <section
            id="/projects"
            className="mx-auto mb-6 mt-20 flex w-full flex-col justify-center px-10 text-white lg:mb-12 lg:mt-28 lg:px-24 lg:pt-0 "
        >
            {/* Title */}
            <h1 className="block animate-gradient overflow-visible bg-gradient-to-r from-primary via-green-300 to-[#8553F4] bg-clip-text text-[2rem] font-semibold leading-tight text-transparent md:text-[1rem] lg:text-[2rem] xl:text-[3rem] 2xl:text-[3.5rem] min-[1920px]:text-[5rem]">
                My Projects
            </h1>

            <h2 className="mb-[1.5rem] animate-gradient bg-gradient-to-r from-primary via-green-300 to-[#8553F4] bg-clip-text text-[2rem] font-light text-transparent md:text-[2.5rem] xl:text-[3rem]">
                The Tech
            </h2>
            <TechCard />
            <h2 className="mt-[1.5rem] animate-gradient bg-gradient-to-r from-primary via-green-300 to-[#8553F4] bg-clip-text text-[2rem] font-light text-transparent md:text-[2.5rem] xl:text-[3rem]">
                The Showcase
            </h2>
            {/* All Project container */}
            <div className=" my-[1.5rem] flex h-full w-full flex-col gap-6 md:grid md:grid-cols-2">
                {/* Projects */}

                {completedProjectArray.map((project) => (
                    <ShowcaseCard
                        key={project.key}
                        title={project.title}
                        completed={project.completed}
                        description={project.description}
                        techUsed={project.techUsed}
                        projectImage={project.projectImage}
                        projectVideo={project.projectVideo}
                        button1Url={project.button1Url}
                        button2Url={project.button2Url}
                    />
                ))}
            </div>
            <h2 className="mt-[1.5rem] animate-gradient bg-gradient-to-r from-primary via-green-300 to-[#8553F4] bg-clip-text text-[2rem] font-light text-transparent md:text-[2.5rem] xl:text-[3rem]">
                Under Development
            </h2>
            <div className="my-[1.5rem] flex h-full w-full flex-col gap-6 md:grid md:grid-cols-2">
                {inProgressProjectArray.map((project) => (
                    <ShowcaseCard
                        key={project.key}
                        title={project.title}
                        description={project.description}
                        techUsed={project.techUsed}
                        projectImage={project.projectImage}
                        projectOverlay={project.projectOverlay}
                        projectVideo={project.projectVideo}
                        button1Url={project.button1Url}
                        button2Url={project.button2Url}
                    />
                ))}
            </div>
            <h2 className="mb-[1.5rem] animate-gradient bg-gradient-to-r from-primary via-green-300 to-[#8553F4] bg-clip-text text-[2rem] font-light text-transparent md:text-[2.5rem] xl:text-[3rem]">
                The Process
            </h2>
            <ProcessCard />
        </section>
    );
}

export default Projects;
