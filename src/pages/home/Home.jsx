import images from "../../data/images";

const Home = () => {
    const homeData = [
        {
            title: "Projects",
            key: "Projects",
            description: "Check out my projects",
            link: "projects",
            imageBg: images.aboutSkillsBg,
            imageFg: images.aboutSkillsFg,
        },
        {
            title: "About",
            key: "About",
            description: "Some tidbits about Tom",
            link: "about",
            imageBg: images.aboutSkillsBg,
            imageFg: images.aboutSkillsFg,
        },
        {
            title: "Experience",
            key: "Experience",
            description: "My career and journey (so far!)",
            link: "work",
            imageBg: images.aboutSkillsBg,
            imageFg: images.aboutSkillsFg,
        },
        {
            title: "Contact",
            key: "Contact",
            description: "Get in touch with me",
            link: "contact",
            imageBg: images.aboutSkillsBg,
            imageFg: images.aboutSkillsFg,
        },
    ];

    return (
        <section
            id="home"
            className="mx-auto group grid-rows-[repeat(minmax(46vh, 46vh))] grid-cols-[repeat(minmax(200px, 100%))] content-stretch rounded-[2rem] grid grid-cols-1 gap-4 lg:gap-6 lg:grid-cols-2 lg:grid-rows-2 px-10 pb-6 pt-4 text-[#FFFDFA] lg:mb-24 lg:px-24 lg:pt-0 ">
            {homeData.map((item) => (
                <div
                    className="border rounded-2xl border-bgPrimary flex flex-col w-full h-[50vh] relative p-4 lg:p-6"
                    key={item.key}>
                    <img
                        src={item.imageBg}
                        alt=""
                        className="object-cover absolute bg-no-repeat w-full flex  h-full rounded-2xl top-0 left-0 z-[-1]"
                    />
                    <img
                        src={item.imageFg}
                        alt=""
                        className="object-cover absolute bg-no-repeat w-full flex  h-full rounded-2xl top-0 left-0 z-[-1]"
                    />
                    <div className="bg-black/80 ease-in-out delay-75 transition-all w-full justify-center flex flex-col absolute h-[25%] group-hover:h-full duration-500  bottom-0 left-0 p-2 lg:p-4 rounded-2xl">
                        <p className="text-xl lg:text-4xl">{item.title}</p>
                        <hr className="animate-gradient rounded border-0  bg-gradient-to-r from-primary via-secondary h-[1px] my-2 to-[#cbb7f7]" />
                        <p className="text-sm opacity-0 group-hover:opacity-100 delay-200 ease-in-out duration-300 transition-all lg:text-xl">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Home;
