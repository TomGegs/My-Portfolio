import HobbiesImage from './personal/HobbiesImage';
import images from '../../data/images';
import Story from './personal/Story';
import Career from './Career';

function About() {
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

            <div className="group relative flex h-full w-full flex-col justify-items-center gap-4 py-3 text-white/30 lg:grid lg:grid-cols-3 ">
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
