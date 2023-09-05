import images from '../../data/images';
import EmailIconButton from './EmailIconButton';

function SocialButtons({ pulse }) {
    return (
        // Container
        <div className="2xl-gap-16 relative mx-auto flex flex-row  gap-6 text-[#FFFDFA] lg:gap-8 xl:gap-10">
            {/* Icons */}
            <a
                href="https://www.linkedin.com/in/thomas-geoghegan/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <images.linkedinIcon className="text-[30px] duration-150 ease-in-out hover:cursor-pointer hover:text-altSecond lg:text-[40px] " />
            </a>

            <a
                href="https://github.com/TomGegs"
                target="_blank"
                rel="noopener noreferrer"
            >
                <images.gitHubIcon className="text-[30px] duration-150 ease-in-out hover:cursor-pointer hover:text-altSecond lg:text-[40px]" />
            </a>
            {/* Email icon - auto-generate and open email */}
            <EmailIconButton pulse={pulse} />
        </div>
    );
}

export default SocialButtons;
