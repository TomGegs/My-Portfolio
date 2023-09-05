import ButtonAlt from '../../components/buttons/ButtonAlt';
import ButtonMain from '../../components/buttons/ButtonMain';
import images from '../../data/images';
import videos from '../../data/videos';

function MyProjects({
    title,
    description,
    techUsed,
    projectImage,
    projectVideo,
    button1Url,
    button2Url,
}) {
    const imgSrc = images[projectImage];
    const videoSrc = videos[projectVideo];
    return (
        <div className="flex w-full flex-col group transition-all duration-300 ease-in-out bg-gradient-to-b hover:bg-gradient-to-r hover:from-primary/20 hover:via-primary/20  hover:to-altSecond/20  from-bgPrimary to-[#d7e4e0]/10 shadow-md backdrop-blur rounded-2xl border-bgPrimary p-2 content-start">
            <div className="relative">
                {projectVideo ? (
                    <video
                        src={videoSrc}
                        loop
                        muted
                        autoPlay
                        playsInline
                        type="video/mp4"
                        className="mx-auto w-full lg:max-w-[600px] shadow-md rounded-2xl group-hover:scale-100 transition-all duration-300 ease-in-out scale-95"
                        loading="lazy"
                        poster={imgSrc}
                    />
                ) : (
                    <img
                        src={imgSrc}
                        alt="Project mockup"
                        className="mx-auto w-full lg:max-w-[600px] lg:scale-95 group-hover:scale-100 transition-all duration-300 ease-in-out"
                        loading="lazy"
                    />
                )}
                {!button1Url ? (
                    <span
                        alt="icon indicating the project is under construction"
                        className="absolute right-[40%] lg:right-[47%] -skew-x-12 flex justify-center top-[20%] lg:top-[40%] w-[50px]"
                    >
                        <images.buildIcon className="text-[100px] animate-wave text-primary" />
                    </span>
                ) : null}
            </div>
            <div className="grid h-full px-2 lg:px-6 items-center gap-y-5  lg:grid-rows-4 lg:gap-y-2 ">
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
                    <ButtonMain
                        label={`${button1Url ? 'View Site' : 'Coming Soon'}`}
                        url={button1Url}
                    />

                    {button2Url ? (
                        <ButtonAlt
                            label="Github Code"
                            url={button2Url}
                            newTab
                        />
                    ) : (
                        <ButtonAlt
                            label="My Github"
                            url="https://github.com/TomGegs"
                            newTab
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default MyProjects;
