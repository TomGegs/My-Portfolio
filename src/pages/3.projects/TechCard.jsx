import images from '../../data/images';

function TechCard() {
    const techIconIndex = [
        { image: 'html', label: 'HTML5' },
        { image: 'css', label: 'CSS3' },
        { image: 'sass', label: 'SASS' },
        { image: 'tailwindCSS', label: 'TailwindCSS' },
        { image: 'js', label: 'JavaScript' },
        { image: 'typescript', label: 'TypeScript' },
        { image: 'react', label: 'React' },
        { image: 'nextjs', label: 'Next.js' },
        { image: 'vite', label: 'Vite' },
        { image: 'figma', label: 'Figma' },
        { image: 'gpt', label: 'OpenAI API' },
        { image: 'midJourney', label: 'MidJourney' },
    ];

    return (
        <div className="flex w-full flex-col rounded-2xl border-bgPrimary bg-gradient-to-b from-bgPrimary to-[#d7e4e0]/10 p-6 font-encode text-white shadow-md backdrop-blur lg:p-10">
            {techIconIndex ? (
                <div className="grid grid-cols-3 gap-10 lg:grid-cols-6 lg:flex-wrap lg:gap-12">
                    {techIconIndex.map((icon) => (
                        <div
                            key={icon.label}
                            className="flex h-full w-full flex-col items-center justify-center gap-y-1 text-center"
                        >
                            <img
                                src={images[icon.image]}
                                alt={`${icon.label} icon`}
                                key={icon.image}
                                className="mx-auto aspect-square max-h-[30px] object-contain transition-all hover:scale-105 xl:max-h-[45px]"
                            />
                            <p className="mt-2 flex h-full w-fit text-xs font-thin lg:flex lg:text-sm">
                                {icon.label}
                            </p>
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    );
}

export default TechCard;
