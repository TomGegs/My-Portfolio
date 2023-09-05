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
        <div className="group flex w-full flex-col content-start rounded-2xl border-bgPrimary bg-gradient-to-b from-bgPrimary to-[#d7e4e0]/10 p-2  shadow-md  backdrop-blur transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-primary/20 hover:via-primary/20 hover:to-altSecond/20">
            <div className="relative">
                {projectVideo ? (
                    <video
                        src={videoSrc}
                        loop
                        muted
                        autoPlay
                        playsInline
                        type="video/mp4"
                        className="mx-auto w-full scale-95 rounded-2xl shadow-md transition-all duration-300 ease-in-out group-hover:scale-100 lg:max-w-[600px]"
                        loading="lazy"
                        poster={imgSrc}
                    />
                ) : (
                    <img
                        src={imgSrc}
                        alt="Project mockup"
                        className="mx-auto w-full transition-all duration-300 ease-in-out group-hover:scale-100 lg:max-w-[600px] lg:scale-95"
                        loading="lazy"
                    />
                )}
                {!button1Url ? (
                    <span
                        alt="icon indicating the project is under construction"
                        className="absolute right-[40%] top-[20%] flex w-[50px] -skew-x-12 justify-center lg:right-[47%] lg:top-[40%]"
                    >
                        <images.buildIcon className="animate-wave text-[100px] text-primary" />
                    </span>
                ) : null}
            </div>
            <div className="grid h-full items-center gap-y-5 px-2 lg:grid-rows-4  lg:gap-y-2 lg:px-6 ">
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
