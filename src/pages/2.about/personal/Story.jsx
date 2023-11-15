function Story() {
    return (
        <div className="group group relative flex h-full w-full flex-col py-4 font-Nohemi text-white/30 lg:py-12">
            {/* Section Title */}
            <h2 className="animate-gradient bg-gradient-to-r from-primary via-green-300 to-[#8553F4] bg-clip-text py-2 text-[2rem] font-light text-transparent md:text-[2.5rem] xl:text-[3rem]">
                Hello there{' '}
                <span className="inline-flex animate-wave text-white ">👋</span>{' '}
                I&apos;m Tom
            </h2>
            {/* About me content */}{' '}
            <div className="w-full text-white/75 transition-all duration-300 ease-in-out group-hover:text-white  lg:text-3xl ">
                Developer, designer, avid technophile, and business start-up
                enthusiast.
                <br />
                With an origin story in product management, I create seamless
                user experiences, hitting the sweet spot between design and
                function to deliver results that matter. I&apos;ve taken these
                skills into the tech world to help you not just build projects,
                but to craft experiences.
                <br />
                <br />
                I&apos;m a lifetime learner, always looking to level up by
                tackling challenges, turning failures into fuel, and bouncing
                ideas off the talented team around me. (Speaking of fuel,
                I&apos;m a coffee enthusiast on a java journey, from perfecting
                the pour-over to uncovering the best bang-for-buck bean. No
                snobbery, just keenness for the{' '}
                <span className="inline-block animate-bounce">
                    &apos;caff&apos;
                </span>
                .)
                <br />
                <br />
                TL;DR - Let&apos;s talk code, creativity, and creating
                compelling digital experiences!
            </div>
        </div>
    );
}

export default Story;
