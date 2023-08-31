import ButtonAlt from "../../components/buttons/ButtonAlt";
import ButtonMain from "../../components/buttons/ButtonMain";
import images from "../../data/images";

const MyProjects = ({
    title,
    description,
    techUsed,
    projectImage,
    button1Url,
    button2Url,
}) => {
    

    const imgSrc = images[projectImage];

    return (
        <div className="my-4 flex w-full flex-col content-start">
            <img
                src={imgSrc}
                alt="Project mockup"
                className="mx-auto w-full lg:max-w-[600px]"
                loading="lazy"
            />
            <div className="grid h-full items-center gap-y-5 lg:grid-rows-4 lg:gap-y-2 ">
                {/* Project title */}
                <h3 className="animate-gradient bg-gradient-to-r from-primary via-green-300 to-[#8553F4] bg-clip-text pt-5  text-[2rem] font-light text-transparent md:text-[2.5rem] xl:text-[3rem]">
                    {title}
                </h3>
                {/* Project description */}
                <p className=" md:max-w-[90%] md:text-lg">{description}</p>
                {/* technology used to build project */}
                <p>
                    <span className="font-bold">Build with:</span> {techUsed}
                </p>
                {/* button 1 and button 2 url links */}
                <div className=" flex flex-row ">
                    <ButtonMain label={"View Site"} url={button1Url} />
                    <ButtonAlt
                        label={"Github Code"}
                        url={button2Url}
                        newTab={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default MyProjects;
