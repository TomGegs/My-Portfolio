// import Preloader from "./components/preloader/Preloader";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/1.home/Home';
import About from './pages/2.about/About';
import Projects from './pages/3.projects/Projects';
import Contact from './pages/4.contact/Contact';
import ErrorPage from './pages/error/ErrorPage';
import Layout from './components/layout/Layout';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="projects" element={<Projects />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<ErrorPage />} />
            </Route>
        </Routes>
    );
}
