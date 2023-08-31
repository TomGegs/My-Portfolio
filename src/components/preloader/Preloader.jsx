import { useEffect, useState } from "react";
import images from "../../data/images";
// import "animate.css";

const Preloader = () => {
    const preloaderStyle = {
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        height: "100dvh",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#090909",
    };

    const [showPreloader, setShowPreloader] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowPreloader(false);
        }, 1200);
        //clean up function
        return () => clearTimeout(timeout);
    }, []);

    if (showPreloader) {
        document.body.classList.add("preloader");
    } else {
        document.body.classList.remove("preloader");
    }

    return (
        showPreloader && (
            <div
                style={preloaderStyle}
                className="animate__fadeOut   [animation-delay:0.9s]">
                <div className="relative flex flex-col items-center rounded-3xl bg-bgSecondary text-center align-middle font-encode text-[1.5rem] font-thin text-white lg:flex-row lg:text-[2rem] ">
                    <span className="  animate__fadeInUp ">Tom Geoghegan</span>
                    <img
                        src={images.logoIcon}
                        alt="Tom G Logo"
                        className="m-12 h-12 w-12 animate-spin lg:my-0 "
                    />
                    <span className="  animate__fadeInUp bg-gradient-to-r  from-altSecond via-secondary to-primary bg-clip-text font-encode font-medium text-transparent [animation-delay:0.15s]">
                        Loading...
                    </span>
                </div>
            </div>
        )
    );
};

export default Preloader;
