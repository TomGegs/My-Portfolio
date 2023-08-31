const TimelineEvents = ({ sectionTitle, employeer, position }) => {
    return (
        <div className="mb-3 flex w-full flex-col overflow-clip text-white/30 lg:ml-10">
            <h3 className="  animate__fadeInUp animate__repeat-1 animate-gradient bg-gradient-to-r from-primary  via-green-300 to-[#8553F4] bg-clip-text text-[2rem]  font-light text-transparent transition-all delay-75 ease-in-out group-hover:text-altSecond md:text-[2.5rem] xl:text-[3rem] ">
                {sectionTitle ? sectionTitle : null}
            </h3>
            <div className="  animate__fadeInRight w-full font-light lg:font-normal lg:text-xl text-white/75 transition-all delay-75 ease-in-out group-hover:text-white ">
                {position}
            </div>
            <div className="  animate__fadeInUp w-full text-xs lg:text-sm font-thin text-white/75 transition-all delay-75 ease-in-out [animation-delay:1s] group-hover:text-white">
                {employeer}
            </div>
        </div>
    );
};

export default TimelineEvents;
