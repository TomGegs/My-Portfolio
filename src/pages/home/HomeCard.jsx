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
                className="border rounded-2xl lg:row-span-1 border-bgPrimary flex flex-col w-full h-[30vh] cursor-pointer lg:h-full relative"
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
                            className={`object-cover duration-500 absolute bg-no-repeat w-full flex h-full rounded-2xl top-0 left-0 z-[-1] ${
                                hover
                                    ? 'lg:group-hover:brightness-110 lg:group-hover:animate-pulse'
                                    : 'lg:brightness-[0.3]'
                            }`}
                        />
                        <img
                            src={imageFg}
                            alt=""
                            loading="lazy"
                            className={`object-contain absolute bg-no-repeat w-full flex transition-all h-full self-end object-bottom rounded-[25%] bottom-0 left-0 z-[-1] ${
                                hover
                                    ? 'lg:group-hover:brightness-100 lg:group-hover:blur-none lg:group-hover:scale-100 ease-in-out delay-75 duration-150'
                                    : 'lg:blur-[2px] lg:brightness-60 scale-95'
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
                            className={`object-cover duration-500 absolute bg-no-repeat w-full flex h-full rounded-2xl top-0 left-0 z-[-1] ${
                                hover
                                    ? 'lg:group-hover:brightness-110 lg:group-hover:animate-pulse'
                                    : 'lg:brightness-[0.3]'
                            }`}
                        />
                        <img
                            src={projectImages[projectIndex]}
                            alt=""
                            loading="lazy"
                            className={`object-contain absolute bg-no-repeat w-full flex transition-all ease-in-out duration-100 h-full object-center bottom-0 left-0 z-[-1] ${
                                hover
                                    ? 'lg:group-hover:brightness-100 lg:group-hover:blur-none lg:group-hover:scale-100 ease-in-out delay-75 duration-150'
                                    : 'lg:blur-[2px] lg:brightness-60 scale-95'
                            }`}
                        />
                    </>
                )}
                {/* Card title and description wrapper */}
                <div className="ease-in-out font-Nohemi bottom-0 left-0 absolute w-full bg-bgPrimary/60 transition-all h-[25%] justify-center flex flex-col gap-y-1 duration-500 p-2 lg:py-12 rounded-b-2xl">
                    {/* Card title */}
                    <h2
                        className={`text-xl lg:text-4xl xl:text-6xl text-center w-full transition-all ${
                            hover
                                ? 'lg:font-black font-black'
                                : 'lg:font-thin font-black lg:text-inherit'
                        }`}
                    >
                        {title}
                    </h2>

                    {/* Card divider */}
                    <div
                        className={`animate-gradient duration-200 transition-all rounded border-0 bg-gradient-to-r from-primary via-secondary h-[2px] to-[#cbb7f7] ${
                            hover
                                ? 'lg:group-hover:w-full lg:group-hover:opacity-100'
                                : 'lg:opacity-0 lg:w-[1px]'
                        }`}
                    />

                    {/* Card description */}
                    <p
                        className={`text-sm ease-in-out duration-300 transition-all w-full lg:text-base text-center font-light ${
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
