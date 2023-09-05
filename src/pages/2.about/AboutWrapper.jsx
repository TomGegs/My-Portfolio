function AboutWrapper({ aboutImageBg, aboutImageFg, children }) {
    return (
        <div className="relative flex h-full w-full flex-row lg:min-h-[650px]">
            <div className="h-fill mx-auto mr-12 hidden w-[40%] flex-col items-center justify-center object-center align-middle lg:relative lg:flex ">
                <img
                    src={aboutImageBg}
                    alt={aboutImageBg}
                    className="animate__fadeIn  absolute max-h-[500px] min-h-[500px] rounded-3xl object-cover grayscale "
                />
                <img
                    src={aboutImageFg}
                    alt={aboutImageFg}
                    className="animate__fadeInLeft absolute max-h-[500px] min-h-[500px] rounded-3xl object-cover  "
                />
            </div>
            <div className="flex h-full w-full flex-col">{children}</div>
        </div>
    );
}

export default AboutWrapper;
