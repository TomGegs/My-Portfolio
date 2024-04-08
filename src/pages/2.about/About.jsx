import AboutImages from './personal/AboutImages';
import images from '../../data/images';
import Story from './personal/Story';
import Experience from './work/Experience';

function About() {
    const aboutImageCardData = [
        {
            id: 'sunSurf',
            description: 'Sun & Surf',
            image: images.aboutHobbies1,
        },

        {
            id: 'buildingProjects',
            description: 'Building & Projects',
            image: images.aboutHobbies3,
        },
        {
            id: 'exploringAdventure',
            description: 'Exploring & Adventure',
            image: images.aboutHobbies2,
        },
    ];
    return (
        // Section Container
        <section
            className="mx-auto mb-6 mt-20 flex w-full flex-col justify-center px-10 font-Nohemi text-white lg:mb-12 lg:mt-28 lg:px-24 lg:pt-0 "
            id="about"
        >
            {/* Title */}
            <h1 className="block animate-gradient overflow-visible bg-gradient-to-r from-primary via-green-300 to-[#8553F4] bg-clip-text text-[2rem] font-semibold leading-tight text-transparent md:text-[1rem] lg:text-[2rem] xl:text-[3rem] 2xl:text-[3.5rem] min-[1920px]:text-[5rem]">
                About Me
            </h1>

            {/* About Section Information - images at top on desktop and bottom on mobile */}
            <div className="relative flex h-full flex-col-reverse lg:flex-col">
                <div className="group relative flex h-full w-full flex-col justify-items-center gap-4 text-white/30 lg:grid lg:grid-cols-3 ">
                    {aboutImageCardData.map((image) => (
                        <AboutImages
                            key={image.id}
                            description={image.description}
                            image={image.image}
                        />
                    ))}
                </div>

                <Story />
                <Experience />
            </div>
        </section>
    );
}

export default About;
