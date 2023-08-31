import images from "../../../data/images";

const Hobbies = () => {
    return (
        <div className="group relative flex h-full w-full flex-col overflow-clip lg:border-l lg:border-bgPrimary pb-3 text-white/30 lg:hover:border-l">
            <h3 className="  animate__fadeInUp animate__repeat-1 mb-2 animate-gradient bg-gradient-to-r from-primary via-green-300 to-[#8553F4] bg-clip-text lg:pl-10 text-left text-[2rem] font-light text-transparent transition-all delay-75 ease-in-out lg:before:absolute lg:before:left-0 lg:before:top-0 lg:before:z-10 lg:before:h-[1px] lg:before:w-[15px]  lg:before:translate-y-8 lg:before:rounded-[25%]  lg:before:bg-white/30 lg:before:transition-all lg:before:delay-75 lg:before:ease-in group-hover:text-altSecond lg:before:group-hover:bg-altSecond lg:before:group-hover:transition-all lg:before:group-hover:delay-75 lg:before:group-hover:ease-in md:text-[2.5rem] xl:text-[3rem] ">
                Hobbies
            </h3>
            <div className="grid w-full grid-cols-3 justify-items-center gap-4 lg:px-10">
                <div className=" animate__fadeInRight flex w-full flex-col justify-center rounded-2xl border border-bgPrimary bg-bgPrimary/60 px-4 pt-4 text-center align-middle group-hover:text-white">
                    <img
                        src={images.aboutHobbies1}
                        alt="Tom and his partner standing beside of a camper van"
                        className="h-full w-full rounded object-cover"
                    />
                    <p className="  animate__fadeInUp mt-6 pb-6 [animation-delay:1.5s]">
                        Sun & Surf
                    </p>
                </div>
                <div className="  animate__fadeInRight flex w-full flex-col justify-center rounded-2xl border border-bgPrimary bg-bgPrimary/60  px-4 pt-4 text-center align-middle [animation-delay:0.5s] group-hover:text-white">
                    <img
                        src={images.aboutHobbies2}
                        alt="Tom and his partner standing beside of a camper van"
                        className="h-full w-full rounded object-cover"
                    />
                    <p className="  animate__fadeInUp mt-6 pb-6 [animation-delay:1.5s]">
                        Exploring & Adventure{" "}
                    </p>
                </div>
                <div className="  animate__fadeInRight flex w-full flex-col justify-center rounded-2xl border border-bgPrimary bg-bgPrimary/60 px-4 pt-4 text-center align-middle [animation-delay:1s] group-hover:text-white">
                    <img
                        src={images.aboutHobbies3}
                        alt="Tom and his partner standing beside of a camper van"
                        className="h-full w-full rounded object-cover"
                    />
                    <p className="  animate__fadeInUp mt-6 pb-6 [animation-delay:1.5s]">
                        Building & Projects
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hobbies;
