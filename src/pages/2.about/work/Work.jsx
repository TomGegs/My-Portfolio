import AboutWrapper from '../AboutWrapper';
import images from '../../../data/images';
import Timeline from './Timeline';

const Work = () => {
    return (
        <AboutWrapper
            aboutImageBg={images.aboutWorkBg}
            aboutImageFg={images.aboutWorkFg}
        >
            <Timeline />
        </AboutWrapper>
    );
};

export default Work;
