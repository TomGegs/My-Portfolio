function TimelineEvents({ sectionTitle, employer, position }) {
    return (
        <div className="mb-3 group flex w-full flex-col text-white/30  ">
            <h3 className="   animate-gradient bg-gradient-to-r from-primary  via-green-300 to-[#8553F4] bg-clip-text text-[2rem] font-light text-transparent md:text-[2.5rem] xl:text-[3rem] ">
                {sectionTitle || null}
            </h3>
            <div className="  w-full font-light lg:font-normal lg:text-xl text-white/75  group-hover:text-white ">
                {position}
            </div>
            <div className="   w-full text-xs lg:text-sm font-thin text-white/75  group-hover:text-white">
                {employer}
            </div>
        </div>
    );
}

export default TimelineEvents;
