// import Preloader from "./components/preloader/Preloader";
import { HashRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import About from './pages/2.about/About';
import Projects from './pages/3.projects/Projects';
import Contact from './pages/4.contact/Contact';
import ErrorPage from './pages/error/ErrorPage';
import Home from './pages/home/Home';

export function App() {
    return (
        <>
            {/* <Preloader /> */}
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" errorElement={<ErrorPage />} />
            </Routes>
            <Footer />
        </>
    );
}

export function WrappedApp() {
    return (
        <HashRouter>
            <App />
        </HashRouter>
    );
}
