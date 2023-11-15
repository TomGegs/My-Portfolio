import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function HomeCard({
    title,
    key,
    description,
    link,
    imageBg,
    imageFg,
    projectImages,
}) {
    const [hover, setHover] = useState(null);
    const [projectIndex, setProjectIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setProjectIndex((prevIndex) =>
                prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);
        return () => clearInterval(intervalId);
    }, [projectImages]);

    return (
        <Link key={key} to={link}>
            {/* Wrapper */}
            <div
                className="relative flex h-[30vh] w-full cursor-pointer flex-col rounded-2xl border border-bgPrimary lg:row-span-1 lg:h-full"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(null)}
            >
                {/* About & Contact Images */}
                {imageFg ? (
                    <>
                        <img
                            src={imageBg}
                            alt=""
                            loading="lazy"
                            className={`absolute left-0 top-0 z-[-1] flex h-full w-full rounded-2xl bg-no-repeat object-cover duration-500 ${
                                hover
                                    ? 'lg:group-hover:animate-pulse lg:group-hover:brightness-110'
                                    : 'lg:brightness-[0.3]'
                            }`}
                        />
                        <img
                            src={imageFg}
                            alt=""
                            loading="lazy"
                            className={`absolute bottom-0 left-0 z-[-1] flex h-full w-full self-end rounded-[25%] bg-no-repeat object-contain object-bottom transition-all ${
                                hover
                                    ? 'delay-75 duration-150 ease-in-out lg:group-hover:scale-100 lg:group-hover:blur-none lg:group-hover:brightness-100'
                                    : 'lg:brightness-60 scale-95 lg:blur-[2px]'
                            }`}
                        />
                    </>
                ) : (
                    // Project Images
                    <>
                        <img
                            src={imageBg}
                            alt=""
                            loading="lazy"
                            className={`absolute left-0 top-0 z-[-1] flex h-full w-full rounded-2xl bg-no-repeat object-cover duration-500 ${
                                hover
                                    ? 'lg:group-hover:animate-pulse lg:group-hover:brightness-110'
                                    : 'lg:brightness-[0.3]'
                            }`}
                        />
                        <img
                            src={projectImages[projectIndex]}
                            alt=""
                            loading="lazy"
                            className={`absolute bottom-0 left-0 z-[-1] flex h-full w-full bg-no-repeat object-contain object-center transition-all duration-100 ease-in-out ${
                                hover
                                    ? 'delay-75 duration-150 ease-in-out lg:group-hover:scale-100 lg:group-hover:blur-none lg:group-hover:brightness-100'
                                    : 'lg:brightness-60 scale-95 lg:blur-[2px]'
                            }`}
                        />
                    </>
                )}
                {/* Card title and description wrapper */}
                <div className="absolute bottom-0 left-0 flex h-[25%] w-full flex-col justify-center gap-y-1 rounded-b-2xl bg-bgPrimary/60 p-2 font-Nohemi transition-all duration-500 ease-in-out lg:py-12">
                    {/* Card title */}
                    <h2
                        className={`w-full text-center text-xl transition-all lg:text-4xl xl:text-6xl ${
                            hover
                                ? 'font-black lg:font-black'
                                : 'font-black lg:font-thin lg:text-inherit'
                        }`}
                    >
                        {title}
                    </h2>

                    {/* Card divider */}
                    <div
                        className={`h-[2px] animate-gradient rounded border-0 bg-gradient-to-r from-primary via-secondary to-[#cbb7f7] transition-all duration-200 ${
                            hover
                                ? 'lg:group-hover:w-full lg:group-hover:opacity-100'
                                : 'lg:w-[1px] lg:opacity-0'
                        }`}
                    />

                    {/* Card description */}
                    <p
                        className={`w-full text-center text-sm font-light transition-all duration-300 ease-in-out lg:text-base ${
                            hover
                                ? 'lg:group-hover:opacity-100'
                                : 'lg:opacity-0'
                        }`}
                    >
                        {description}
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default HomeCard;
