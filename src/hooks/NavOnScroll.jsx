import { useState, useEffect } from 'react';

const NavBgOnScroll = () => {
    const [navBarBackground, setNavBarBackground] = useState(false);

    const handleBgScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 0 && window.innerWidth >= 1024) {
            setNavBarBackground(true);
        } else {
            setNavBarBackground(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleBgScroll);
        return () => {
            window.removeEventListener('scroll', handleBgScroll);
        };
    }, []);

    return [navBarBackground, handleBgScroll];
};

export default NavBgOnScroll;
