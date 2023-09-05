import images from '../../data/images';

function Tech() {
    const techIconIndex = [
        { image: 'html', label: 'HTML5' },
        { image: 'css', label: 'CSS3' },
        { image: 'sass', label: 'SASS' },
        { image: 'tailwindCSS', label: 'TailwindCSS' },
        { image: 'js', label: 'JavaScript' },
        { image: 'typescript', label: 'Typescript' },
        { image: 'react', label: 'React' },
        { image: 'nextjs', label: 'Next.js' },
        { image: 'vite', label: 'Vite' },
        { image: 'figma', label: 'Figma' },
        { image: 'gpt', label: 'GPT-4' },
        { image: 'midJourney', label: 'MidJourney' },
    ];

    return (
        <div className="w-full font-encode flex flex-col bg-gradient-to-b from-bgPrimary to-[#d7e4e0]/10 shadow-md backdrop-blur rounded-2xl border-bgPrimary text-white p-10">
            {techIconIndex ? (
                <ul className="grid grid-cols-3 gap-10 lg:gap-12 lg:grid-cols-4 lg:flex-wrap">
                    {techIconIndex.map((icon) => (
                        <li key={icon.label} className="flex flex-col">
                            <img
                                src={images[icon.image]}
                                alt={`${icon.label} icon`}
                                key={icon.image}
                                className="mx-auto aspect-square max-h-[30px] object-contain xl:max-h-[45px]"
                            />
                            <p className="mt-2 text-xs lg:flex lg:text-sm h-full w-full justify-center text-center align-middle font-thin">
                                {icon.label}
                            </p>
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
}

export default Tech;
