import images from '../../data/images';
import HeroCard from './HeroCard';
import HomeCard from './HomeCard';

function Home() {
    const cardDataSmall = [
        {
            title: 'About',
            key: 'About',
            description: 'Some tidbits about Tom',
            link: 'about',
            imageBg: images.aboutMeBg,
            imageFg: images.aboutMeFg,
        },
        {
            title: 'Contact',
            key: 'Contact',
            description: 'Get in touch',
            link: 'contact',
            imageBg: images.contactBg,
            imageFg: images.contactFg,
        },
    ];
    const cardDataLarge = [
        {
            title: 'Projects',
            key: 'Projects',
            description: 'Check out my projects',
            link: 'projects',
            imageBg: images.aboutProjectsBg,
        },
    ];

    const projectImages = [
        images.CopiRite,
        images.CopiRiteV1,
        images.ProjectDALLEClone,
        images.ProjectFinanceWebsite,
    ];

    return (
        <section
            id="home"
            className="group mx-auto mb-6 mt-20 flex w-full flex-col justify-center gap-4 px-10 text-white lg:mb-12 lg:mt-28 lg:grid lg:min-h-[80dvh] lg:grid-cols-6 lg:grid-rows-2 lg:gap-6 lg:px-24 lg:pt-0 "
        >
            {/* Left side of home */}
            <HeroCard />
            {/* Tiles right side */}
            {cardDataLarge.map((item) => (
                <div
                    key={item.key}
                    className="col-span-4 row-span-1 h-full w-full"
                >
                    <HomeCard
                        title={item.title}
                        description={item.description}
                        link={item.link}
                        imageBg={item.imageBg}
                        imageFg={item.imageFg}
                        projectImages={projectImages}
                    />
                </div>
            ))}
            {cardDataSmall.map((item) => (
                <div
                    key={item.key}
                    className="col-span-2 row-span-1 h-full w-full"
                >
                    <HomeCard
                        title={item.title}
                        description={item.description}
                        link={item.link}
                        imageBg={item.imageBg}
                        imageFg={item.imageFg}
                        projectImages={projectImages}
                    />
                </div>
            ))}
        </section>
    );
}

export default Home;
