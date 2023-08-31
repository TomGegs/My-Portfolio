/* spell-checker: disable */

import portfolioItems from "../../data/portfolioItems";
import MyProjects from "./MyProjects";

const Projects = () => {
    return (
        <section
            id="projects"
            className="mx-auto flex h-full w-full flex-col rounded-[2rem] px-10 pb-6 pt-4 text-[#FFFDFA] lg:mb-24 lg:px-24 lg:pt-0 ">
            {/* All Project container */}
            <div className=" mt-4 flex h-full w-full flex-col gap-6 md:grid md:grid-cols-2">
                {/* Project 1 */}
                {portfolioItems.map((project) => (
                    <MyProjects
                        key={project.key}
                        title={project.title}
                        description={project.description}
                        techUsed={project.techUsed}
                        projectImage={project.projectImage}
                        button1Url={project.button1Url}
                        button2Url={project.button2Url}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;
