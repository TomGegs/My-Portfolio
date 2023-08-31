// import Preloader from "./components/preloader/Preloader";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import PageHeader from "./components/headers/PageHeader";
import Hero from "./pages/1.hero/Hero";
import About from "./pages/2.about/About";
import Projects from "./pages/3.projects/Projects";
import Contact from "./pages/4.contact/Contact";
import Home from "./pages/home/home";

function App() {
    return (
        <>
            {/* <Preloader /> */}
            <NavBar />
            <Hero />
            <Home />
            <PageHeader title="About" />
            <About />
            <PageHeader title="My Projects" />
            <Projects />
            <PageHeader title="Contact" />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
