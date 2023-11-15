import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './footer/Footer';
import NavBar from './navbar/Navbar';

export default function Layout() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    );
}
