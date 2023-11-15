function ExperienceCard({ sectionTitle, employer, position, id }) {
    return (
        <div
            key={id}
            className="group mb-3 flex w-full flex-col text-white/30  "
        >
            <h3 className="   animate-gradient bg-gradient-to-r from-primary  via-green-300 to-[#8553F4] bg-clip-text text-[2rem] font-light text-transparent md:text-[2.5rem] xl:text-[3rem] ">
                {sectionTitle || null}
            </h3>
            <div className="  w-full font-light text-white/75 group-hover:text-white lg:text-xl  lg:font-normal ">
                {position}
            </div>
            <div className="   w-full text-xs font-thin text-white/75 group-hover:text-white  lg:text-sm">
                {employer}
            </div>
        </div>
    );
}

export default ExperienceCard;
