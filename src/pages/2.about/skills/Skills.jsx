import SkillsTiles from "./SkillsTiles";
import images from "../../../data/images";
import AboutWrapper from "../AboutWrapper";

const Skills = () => {
    const techIconIndex = [
        { image: "html", label: "HTML5" },
        { image: "css", label: "CSS3" },
        { image: "sass", label: "SASS" },
        { image: "tailwindCSS", label: "TailwindCSS" },
        { image: "js", label: "JavaScript" },
        { image: "typescript", label: "Typescript" },
        { image: "react", label: "React" },
        { image: "nextjs", label: "Next.js" },
        { image: "vite", label: "Vite" },
        { image: "figma", label: "Figma" },
        { image: "gpt", label: "GPT-4" },
        { image: "midJourney", label: "MidJourney" },
    ];

    const techniquesIconIndex = [
        {
            label: "User-Centric Research",
            description: "Identify user needs, behaviours, and pain points",
        },
        {
            label: "Design Thinking Application",
            description: "Create innovative and user-friendly solutions",
        },
        {
            label: "Rapid Prototyping",
            description: "Bring ideas to life quickly and iteratively",
        },
        {
            label: "Usability Testing",
            description: "Refine designs for optimal user experience",
        },
        {
            label: "User Engagement Strategies",
            description: "Enhance user engagement and retention",
        },
        {
            label: "Continuous Improvement",
            description: "Iteratively improving products for enhanced outcomes",
        },
    ];

    return (
        <AboutWrapper
            aboutImageBg={images.aboutSkillsBg}
            aboutImageFg={images.aboutSkillsFg}>
            <SkillsTiles title={"Technologies"} iconIndex={techIconIndex} />
            <SkillsTiles title={"Process"} processIndex={techniquesIconIndex} />
        </AboutWrapper>
    );
};

export default Skills;
