const ButtonAbout = ({ label, icon }) => {
    return (
        <button
            type="button"
            className="m-2 flex cursor-pointer items-center rounded-lg border px-8 py-4 text-center font-encode text-sm font-semibold uppercase text-white hover:text-secondary focus:bg-primary focus:text-white">
            {label}
            {icon ? <span className=" ml-2  text-xl">{icon}</span> : null}
        </button>
    );
};

export default ButtonAbout;
