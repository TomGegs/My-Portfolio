function AboutImages({ image, description, id }) {
    return (
        <div
            key={id}
            className="flex w-full flex-col justify-center rounded-2xl border border-bgPrimary bg-bgPrimary/60 px-4 pt-4 text-center align-middle group-hover:text-white"
        >
            <img
                src={image}
                alt={`My hobbies include ${description}`}
                className="h-full w-full rounded object-cover"
            />
            <p className=" mt-6 pb-6 [animation-delay:1.5s]">{description}</p>
        </div>
    );
}

export default AboutImages;
