import { Link } from "react-scroll";
import { motion } from "framer-motion";

import ButtonDownloadHandler from "../../components/buttons/ButtonDownloadHandler";
import ButtonAlt from "../../components/buttons/ButtonAlt";
import SocialButtons from "../../components/buttons/SocialLinks";

const Hero = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                ease: "easeOut",
                duration: 2,
                delay: 1,
                when: "beforeChildren",
                staggerChildren: 0.5,
            }}
            viewport={{ once: true }}
            id="hero"
            className="animate__fadeIn   mx-auto mt-12 flex h-[75vh] min-h-[660px] w-full flex-col justify-center px-10 [animation-delay:1.3s] lg:min-h-[80vh] lg:px-24">
            {/* Background blur */}
            <div className="  animate__fadeIn absolute -z-10 -mx-10 h-[75%] rounded-3xl bg-gradient-to-b from-primary/25 via-secondary/40 to-altSecond/50 blur-[140px]  w-[80dvw] lg:opacity-60 lg:blur-[180px] " />

            <div className="mx-auto flex w-full flex-col justify-center pt-12 ">
                {/* Title and sub-title */}
                <h1 className="block animate-gradient bg-gradient-to-r from-primary via-green-300 to-[#8553F4] bg-clip-text font-encode text-[2.5rem] font-semibold leading-tight text-transparent lg:text-[3.5rem] 2xl:text-[5.5rem]">
                    Frontend React Developer <br />
                </h1>
                <p className="mt-3 font-encode font-thin leading-normal text-[#FFFDFA] lg:mt-8 xl:text-[1.5rem]">
                    Hi, I&apos;m Tom
                    <span className="inline-flex animate-wave">👋</span>
                    <br /> A Frontend developer, life-long learner and start-up
                    enthusiast. <br className="hidden lg:block" /> Let grab a
                    coffee and have a chat!
                </p>
                {/* Buttons */}
                <div className="my-3 flex justify-start lg:my-10">
                    <ButtonDownloadHandler
                        label={"Download Resumé"}
                        fileName={"TomGeoghegan_Resume.pdf"}
                        filePath={"./files/TomGeoghegan_Resume.pdf"}
                        styling={
                            "my-2 flex transform cursor-pointer rounded-lg border border-primary bg-primary px-[16px] py-3 text-center font-encode text-[0.8rem] font-light text-white transition-transform hover:border-altSecond hover:bg-altSecond focus:outline-none active:scale-[98%] lg:px-8 lg:py-4 lg:text-lg"
                        }
                    />
                    <Link
                        to={"projects"}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        <ButtonAlt label={"View Projects"} noNewTab={true} />
                    </Link>
                </div>

                {/* Contact buttons*/}
                <div className="flex place-self-start">
                    <SocialButtons size={40} pulse={"hidden"} />
                </div>
            </div>
        </motion.section>
    );
};

export default Hero;
