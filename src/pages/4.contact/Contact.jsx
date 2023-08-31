import { useEffect, useState } from "react";
import images from "../../data/images";
import ContactForm from "./contactForm/ContactForm";

const Contact = () => {
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
        //cleanup function
        return () => clearTimeout(timeoutId);
    }, [isSubmitted]);

    return (
        //wrapper
        <section
            className="mx-auto flex h-full w-full flex-col rounded-[2rem] px-10 pb-2 lg:pb-6 pt-4 text-[#FFFDFA] lg:min-h-[50vh] lg:px-24 lg:py-0"
            id="contact">
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
                <div className="align-center flex h-full w-full flex-col rounded-[2rem] object-center lg:relative lg:mx-12 lg:py-12">
                    {!isSubmitted && (
                        <div className="  animate__fadeIn animate__delay-0.5s">
                            <h3 className="font-encode text-[1rem] font-medium text-primary lg:text-[1.5rem] 2xl:text-[2rem]">
                                {!isCoffee
                                    ? "Let's grab a coffee and chat!"
                                    : "Want to grab another coffee? ☕"}
                            </h3>
                            <p className="pt-4 font-thin">
                                {!isCoffee
                                    ? "Get in touch and let's"
                                    : "I'll be in touch soon to"}{" "}
                                find out how I can help you achieve your goals
                                in software development, product management, and
                                driving business growth.
                            </p>
                            <ContactForm handleSubmit={handleSubmit} />
                        </div>
                    )}
                    {isSubmitted && (
                        <div className="  animate__fadeIn animate__delay-0.5s">
                            <h3 className="pt-2.5 font-encode text-[1rem] font-medium text-primary xl:text-[1.5rem]">
                                Looking forward to our coffee and chat!
                            </h3>
                            <div className="pt-4 font-thin text-white">
                                Thank you for reaching out! 🙌 Your message is
                                on its to my inbox. I&apos;ll get back to you as
                                soon as possible. <br /> I&apos;m excited to
                                build something great together! 🔥
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
