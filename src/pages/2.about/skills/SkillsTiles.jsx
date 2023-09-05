import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import images from '../../../data/images';

function SkillsTiles({ title, iconIndex, processIndex }) {
    const [isOpenAccordion, setIsOpenAccordion] = useState(
        Array.isArray(processIndex)
            ? Array(processIndex.length).fill(window.innerWidth >= 1024)
            : []
    );

    const toggleAccordion = (index) => {
        if (window.innerWidth < 1024) {
            const updatedIsOpenAccordion = [...isOpenAccordion];
            updatedIsOpenAccordion[index] = !updatedIsOpenAccordion[index];
            setIsOpenAccordion(updatedIsOpenAccordion);
        }
    };

    const ref = useRef(null);
    const refIcons = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    const fadeInUpAnimation = {
        hidden: { opacity: 0, y: 100 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1 * i,
                when: 'afterChildren',
            },
        }),
    };

    useEffect(() => {
        if (isInView) {
            // trigger animation
            mainControls.start('visible');
            // trigger animation after main animation
            slideControls.start('visible');
        }
    }, [isInView, mainControls, slideControls]);

    return (
        <div className="group relative flex h-full w-full flex-col overflow-clip pb-3 text-white/30 lg:border-l lg:border-bgPrimary lg:hover:border-l">
            {/* Section Title */}
            <span className="lg:before:absolute lg:before:left-0 lg:before:top-0 lg:before:z-10 lg:before:h-[1px] lg:before:w-[15px]  lg:before:translate-y-8 lg:before:rounded-[25%] lg:before:bg-white/30 lg:before:transition-all lg:before:delay-75 lg:before:ease-in lg:before:group-hover:bg-altSecond lg:before:group-hover:transition-all lg:before:group-hover:delay-75 lg:before:group-hover:ease-in " />
            <motion.div
                ref={ref}
                variants={{
                    hidden: { opacity: 0, x: 100 },
                    visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5 }}
                className="mb-2 animate-gradient bg-gradient-to-r from-primary via-green-300 to-[#8553F4] bg-clip-text text-left text-[2rem] font-light text-transparent group-hover:text-altSecond md:text-[2.5rem] lg:pl-10 xl:text-[3rem]"
            >
                {title}
            </motion.div>

            {/* Design & Stack Icons */}
            <div className="w-full text-white/75 transition-all delay-75 ease-in-out group-hover:text-white ">
                {iconIndex ? (
                    <ul className="grid grid-cols-4 flex-wrap justify-items-center">
                        {iconIndex.map((icon, i) => (
                            <li
                                key={icon.label}
                                ref={refIcons}
                                className="mx-4 my-2 flex flex-col"
                            >
                                <motion.img
                                    src={images[icon.image]}
                                    alt={`${icon.label} icon`}
                                    key={icon.image}
                                    variants={fadeInUpAnimation}
                                    initial="hidden"
                                    animate={slideControls}
                                    viewport={{ once: true }}
                                    custom={i}
                                    className="mx-auto aspect-square max-h-[15px] object-contain lg:max-h-[20px] xl:max-h-[30px]"
                                />
                                <p className="animate__fadeInUp mt-2 flex h-full w-full justify-center text-center align-middle text-xs font-thin  text-white/75 transition-all delay-75 ease-in-out [animation-delay:1s] group-hover:text-white lg:text-sm">
                                    {icon.label}
                                </p>
                                {processIndex}
                            </li>
                        ))}
                    </ul>
                ) : null}

                {processIndex ? (
                    <div className="grid w-full grid-cols-1 justify-items-center gap-3 lg:grid-cols-3 lg:gap-4 lg:px-10">
                        {processIndex.map((process, index) => (
                            <motion.div
                                transition={{
                                    duration: 0.5,
                                }}
                                layout
                                onClick={() => toggleAccordion(index)}
                                key={process.label}
                                className="flex w-full flex-col rounded-2xl border border-bgPrimary px-2 py-5 align-middle group-hover:text-white lg:py-10"
                            >
                                <div className="relative flex h-full w-full  flex-row items-center text-center align-middle">
                                    <h4 className="animate__fadeInUp  flex h-fit w-full justify-center text-center align-middle font-thin text-white/75 transition-all  delay-75 ease-in-out [animation-delay:1s] group-hover:text-white lg:text-xl lg:font-normal ">
                                        {process.label}{' '}
                                    </h4>
                                    <span className="absolute right-2 top-[25%] flex lg:hidden ">
                                        {isOpenAccordion[index] ? (
                                            <images.upArrowIcon className="text-altSecond" />
                                        ) : (
                                            <images.downArrowIcon className="text-primary" />
                                        )}
                                    </span>
                                </div>
                                {isOpenAccordion[index] && (
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5 }}
                                        layout="position"
                                        className={`${
                                            // Show description on screens larger than 'lg'
                                            isOpenAccordion[index] ||
                                            !process.description
                                                ? 'block'
                                                : 'hidden'
                                        } animate__fadeInUp flex h-fit w-full justify-center pt-2 text-center align-middle text-xs font-thin  text-white/75 transition-all delay-75 ease-in-out [animation-delay:1s] group-hover:text-white lg:text-sm`}
                                    >
                                        {process.description}
                                    </motion.p>
                                )}
                            </motion.div>
                        ))}
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default SkillsTiles;
