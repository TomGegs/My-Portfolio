import ButtonDownloadHandler from '../../components/buttons/ButtonDownloadHandler';
import SocialButtons from '../../components/buttons/SocialLinks';

function HeroCard() {
    return (
        <div className="mx-auto flex h-full w-full flex-col justify-center rounded-2xl border-bgPrimary bg-gradient-to-b from-bgPrimary to-[#d7e4e0]/10 px-10 py-6 shadow-md backdrop-blur lg:col-span-2 lg:row-span-2 ">
            {/* Title */}
            <h1 className="block animate-gradient overflow-visible bg-gradient-to-r from-primary via-green-300 to-[#8553F4] bg-clip-text text-[2rem] font-semibold leading-tight text-transparent md:text-[1rem] lg:text-[2rem] xl:text-[3rem] 2xl:text-[3.5rem] min-[1920px]:text-[5rem]">
                Frontend React Developer <br />
            </h1>
            {/* Introduction blurb */}
            <p className="mt-3 font-Nohemi font-thin leading-normal text-[#FFFDFA] lg:mt-8 xl:text-[1.5rem]">
                Hi, I&apos;m Tom
                <span className="inline-flex animate-wave">👋</span>
                <br /> A Frontend developer, lifelong learner and startup
                enthusiast. <br className="hidden lg:block" /> Let grab a coffee
                and have a chat!
            </p>
            {/* Wrapper for background div */}
            <div className="relative my-3 flex lg:my-10">
                {/* background div */}
                <div className="absolute bottom-0 left-0 h-14 w-[100%] animate-gradient bg-gradient-to-r from-primary via-altSecond to-secondary blur-md lg:h-20" />
                {/* Download resume button */}
                <ButtonDownloadHandler
                    label="Download Resumé"
                    fileName="TomGeoghegan_Resume.pdf"
                    filePath="./files/TomGeoghegan_Resume.pdf"
                    styling="delay-50 relative my-2 flex w-[100%] transform cursor-pointer justify-center font-Nohemi rounded-lg bg-bgPrimary px-[16px] py-3 text-center text-[0.8rem]  xl:text-lg font-light text-white transition-all hover:border-altSecond hover:bg-altSecond hover:text-white focus:outline-none active:translate-y-0.5 active:scale-[98%] lg:px-8 lg:py-4 "
                />
            </div>
            {/* Social / Contact buttons */}
            <div className="flex place-self-center">
                <SocialButtons size={40} pulse="hidden" />
            </div>
        </div>
    );
}

export default HeroCard;
