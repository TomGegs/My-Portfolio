import { motion } from 'framer-motion';

import ButtonDownloadHandler from '../../components/buttons/ButtonDownloadHandler';
import SocialButtons from '../../components/buttons/SocialLinks';

function Hero() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                ease: 'easeOut',
                duration: 1,
                delay: 0,
                when: 'beforeChildren',
                staggerChildren: 0.5,
            }}
            viewport={{ once: true }}
            id="hero"
            className="animate__fadeIn mx-auto mt-12 flex h-[75vh] min-h-[660px] w-full flex-col justify-center px-10 [animation-delay:1.3s] lg:min-h-[80vh] lg:px-24"
        >
            {/* Background blur */}
            <div className="  animate__fadeIn absolute -z-10 -mx-10 h-[75%] w-[80dvw] rounded-3xl bg-gradient-to-b from-primary/25 via-secondary/40 to-altSecond/50  blur-[140px] lg:opacity-60 lg:blur-[180px] " />

            <div className="mx-auto flex w-full flex-col justify-center pt-12 text-center ">
                {/* Title and sub-title */}
                <h1 className="block animate-gradient bg-gradient-to-r from-primary via-green-300 to-[#8553F4] bg-clip-text font-encode text-[2.5rem] font-semibold leading-tight text-transparent lg:text-[3.5rem] 2xl:text-[5.5rem]">
                    Front end React Developer <br />
                </h1>
                <p className="mt-3 font-encode font-thin leading-normal text-[#FFFDFA] lg:mt-8 xl:text-[1.5rem]">
                    Hi, I&apos;m Tom
                    <span className="inline-flex animate-wave">👋</span>
                    <br /> A Front end developer, life-long learner and start-up
                    enthusiast. <br className="hidden lg:block" /> Let grab a
                    coffee and have a chat!
                </p>
                <div className="relative mx-auto my-3 flex justify-center lg:my-10">
                    <div className="absolute bottom-0 left-0 h-14 w-[100%] animate-gradient bg-gradient-to-r from-primary via-altSecond to-secondary blur-md lg:h-20" />
                    <ButtonDownloadHandler
                        label="Download Resumé"
                        fileName="TomGeoghegan_Resume.pdf"
                        filePath="./files/TomGeoghegan_Resume.pdf"
                        styling="delay-50 relative my-2 flex w-[100%] transform cursor-pointer justify-center rounded-lg bg-bgPrimary px-[16px] py-3 text-center font-encode text-[0.8rem] font-light text-white transition-all hover:border-altSecond hover:bg-altSecond hover:text-white focus:outline-none active:translate-y-0.5 active:scale-[98%] lg:px-8 lg:py-4 lg:text-lg"
                    />

                    {/* <Link to="projects">
                        <ButtonAlt label="View Projects" noNewTab />
                    </Link> */}
                </div>

                <div className="flex place-self-center">
                    <SocialButtons size={40} pulse="hidden" />
                </div>
            </div>
        </motion.section>
    );
}

export default Hero;
