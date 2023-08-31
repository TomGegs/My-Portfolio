// import useMultistep from "../../hooks/useMultistep";

// import AboutButtonMenu from "../../components/ui/AboutButtonMenu";
import Work from "./work/Work";
import Skills from "./skills/Skills";
import Personal from "./personal/Personal";

const About = () => {
    // const stepLabels = ["Approach", "Journey", "About Me"];

    // const { steps, currentAboutIndex, step, back, next, goToStep } =
    //     useMultistep([
    //         <Skills key="skills" />,
    //         <Work key="work" />,
    //         <Play key="play" />,
    //     ]);

    return (
        // Section Container
        <section
            className="mx-auto flex h-full w-full flex-col rounded-[2rem] px-10 pb-2 pt-4 text-[#FFFDFA] lg:min-h-[85dvh] lg:px-24 lg:py-0"
            id="about">
            {/* About Section Steps */}
            <Skills key="skills" />
            <Work key="work" />
            <Personal key="play" />

            {/* <AboutButtonMenu
                    stepLabels={stepLabels}
                    currentAboutIndex={currentAboutIndex}
                    goToStep={goToStep}
                    next={next}
                    back={back}
                /> */}
        </section>
    );
};

export default About;
