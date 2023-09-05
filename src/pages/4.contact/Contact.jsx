import { useEffect, useState } from 'react';
import images from '../../data/images';
import ContactForm from './contactForm/ContactForm';

function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isCoffee, setIsCoffee] = useState(false);

    const handleSubmit = () => {
        setIsSubmitted(true);
        setIsCoffee(true);
    };

    useEffect(() => {
        let timeoutId;

        if (isSubmitted) {
            timeoutId = setTimeout(() => {
                setIsSubmitted(false);
            }, 5500);
        }
        // cleanup function
        return () => clearTimeout(timeoutId);
    }, [isSubmitted]);

    return (
        // wrapper
        <section
            className="mx-auto mt-20 w-full justify-center lg:h-[85dvh] flex flex-col px-10 text-white mb-6 lg:mb-12 lg:px-24 lg:pt-0"
            id="contact"
        >
            {/* Img Wrapper */}
            <div className="relative flex h-full w-full flex-col pt-2 lg:flex-row ">
                <div className=" absolute top-4 h-[70%] w-[80%] animate-gradientFast rounded-[25%] bg-gradient-to-b from-primary/25 via-secondary/40 to-altSecond/50 blur-[120px] lg:top-20 lg:w-[30%] " />
                <img
                    src={images.myHeadshot}
                    alt="headshot of Tom Geoghegan"
                    className="z-10 h-[350px] w-fit flex-1 place-self-center rounded-[2rem] mb-6 lg:mb-10  lg:h-[500px]"
                    loading="lazy"
                />

                {/* Text box */}
                <div className="align-center flex h-full w-full flex-col rounded-[2rem] object-center lg:relative justify-center lg:mx-12 lg:py-12">
                    {!isSubmitted && (
                        <>
                            <h1 className="block animate-gradient bg-gradient-to-r overflow-visible from-primary via-green-300 to-[#8553F4] bg-clip-text text-[2rem] md:text-[1rem] lg:text-[2rem] xl:text-[3rem] font-semibold leading-tight text-transparent 2xl:text-[3.5rem] min-[1920px]:text-[4rem]">
                                {!isCoffee
                                    ? "Let's grab a coffee and chat!"
                                    : 'Want another coffee?'}
                                <span
                                    className={`text-white  ${
                                        !isCoffee ? 'hidden' : 'inline-flex'
                                    }`}
                                >
                                    ☕
                                </span>
                            </h1>
                            <p className="py-4 lg:w-[90%] text-xl">
                                {!isCoffee
                                    ? "Get in touch and let's"
                                    : "I'll be in touch soon to"}{' '}
                                find out how I can help you achieve your goals
                                in software development, product management, and
                                driving business growth.
                            </p>
                            <ContactForm handleSubmit={handleSubmit} />
                        </>
                    )}
                    {isSubmitted && (
                        <>
                            <h2 className="block animate-gradient bg-gradient-to-r overflow-visible from-primary via-green-300 to-[#8553F4] bg-clip-text text-[2rem] md:text-[1rem] lg:text-[2rem] xl:text-[3rem] font-semibold leading-tight text-transparent 2xl:text-[3.5rem] min-[1920px]:text-[4rem]">
                                Looking forward to our coffee and chat!
                            </h2>
                            <div className="py-4 lg:w-[90%] text-xl">
                                Thank you for reaching out! 🙌 Your message is
                                on its to my inbox. I&apos;ll get back to you as
                                soon as possible. <br /> I&apos;m excited to
                                build something great together! 🔥
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Contact;
