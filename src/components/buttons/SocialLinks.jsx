import images from "../../data/images";
import EmailIconButton from "./EmailIconButton";

const SocialButtons = ({ pulse }) => {
    return (
        // Container
        <div className="relative mx-auto flex flex-row gap-6 lg:gap-16 text-[#FFFDFA]">
            {/* Icons */}
            <a
                href="https://www.linkedin.com/in/thomas-geoghegan/"
                target="_blank"
                rel="noopener noreferrer">
                <images.linkedinIcon className="duration-150 ease-in-out text-[30px] lg:text-[40px] hover:cursor-pointer hover:text-altSecond " />
            </a>

            <a
                href="https://github.com/TomGegs"
                target="_blank"
                rel="noopener noreferrer">
                <images.gitHubIcon className="duration-150 text-[30px] lg:text-[40px] ease-in-out hover:cursor-pointer hover:text-altSecond" />
            </a>
            {/* Email icon - auto-generate and open email */}
            <EmailIconButton pulse={pulse} />
        </div>
    );
};

export default SocialButtons;
