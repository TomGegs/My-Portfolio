/* spell-checker: disable */

import portfolioItems from '../../data/portfolioItems';
import MyProjects from './MyProjects';
import Process from './Process';
import Tech from './Tech';

function Projects() {
    return (
        <section
            id="projects"
            className="mx-auto mt-20 lg:mt-28 w-full justify-center flex flex-col px-10 text-white mb-6 lg:mb-12 lg:px-24 lg:pt-0 "
        >
            {/* Title */}
            <h1 className="block animate-gradient bg-gradient-to-r overflow-visible from-primary via-green-300 to-[#8553F4] bg-clip-text text-[2rem] md:text-[1rem] lg:text-[2rem] xl:text-[3rem] font-semibold leading-tight text-transparent 2xl:text-[3.5rem] min-[1920px]:text-[5rem]">
                My Projects
            </h1>

            <h2 className="animate-gradient bg-gradient-to-r mb-[1.5rem] from-primary via-green-300 to-[#8553F4] bg-clip-text text-[2rem] font-light text-transparent md:text-[2.5rem] xl:text-[3rem]">
                Tech I use
            </h2>
            <Tech />

            {/* All Project container */}
            <div className=" my-[1.5rem] flex h-full w-full flex-col gap-6 md:grid md:grid-cols-2">
                {/* Project 1 */}
                {portfolioItems.map((project) => (
                    <MyProjects
                        key={project.key}
                        title={project.title}
                        description={project.description}
                        techUsed={project.techUsed}
                        projectImage={project.projectImage}
                        projectVideo={project.projectVideo}
                        button1Url={project.button1Url}
                        button2Url={project.button2Url}
                    />
                ))}
            </div>
            <h2 className="animate-gradient bg-gradient-to-r mb-[1.5rem] from-primary via-green-300 to-[#8553F4] bg-clip-text text-[2rem] font-light text-transparent md:text-[2.5rem] xl:text-[3rem]">
                My Process
            </h2>
            <Process />
        </section>
    );
}

export default Projects;
