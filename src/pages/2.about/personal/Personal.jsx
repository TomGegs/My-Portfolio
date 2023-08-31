import AboutWrapper from "../AboutWrapper";
import Story from "./Story";
import Hobbies from "./Hobbies";
import images from "../../../data/images";

const Personal = () => {
    return (
        <AboutWrapper
            aboutImageBg={images.aboutMeBg}
            aboutImageFg={images.aboutMeFg}>
            <Hobbies />
            <Story />
        </AboutWrapper>
    );
};

export default Personal;
