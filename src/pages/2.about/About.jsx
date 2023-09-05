import HobbiesImage from './personal/HobbiesImage';
import images from '../../data/images';
import Story from './personal/Story';
import Career from './Career';

function About() {
    return (
        // Section Container
        <section
            className="mx-auto mt-20 lg:mt-28 w-full justify-center font-Nohemi flex flex-col px-10 text-white mb-6 lg:mb-12 lg:px-24 lg:pt-0 "
            id="about"
        >
            {/* Title */}
            <h1 className="block animate-gradient bg-gradient-to-r overflow-visible from-primary via-green-300 to-[#8553F4] bg-clip-text text-[2rem] md:text-[1rem] lg:text-[2rem] xl:text-[3rem] font-semibold leading-tight text-transparent 2xl:text-[3.5rem] min-[1920px]:text-[5rem]">
                About Me
            </h1>

            <div className="group relative h-full py-3 text-white/30 flex flex-col lg:grid w-full lg:grid-cols-3 justify-items-center gap-4 ">
                <HobbiesImage
                    image={images.aboutHobbies1}
                    description="Sun & Surf"
                />
                <HobbiesImage
                    image={images.aboutHobbies3}
                    description="Building & Projects"
                />
                <HobbiesImage
                    image={images.aboutHobbies2}
                    description="Exploring & Adventure"
                />
            </div>

            {/* About Section Information */}
            <Story />
            <Career />
        </section>
    );
}

export default About;
