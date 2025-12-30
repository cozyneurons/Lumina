import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Courses from "./Courses";
import Mentors from "./Mentors";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.scrollTo) {
            const scrollToId = location.state.scrollTo;
            const element = document.getElementById(scrollToId);
            if (element) {
                // Use a small timeout to ensure the element is rendered and layout is settled
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
            // Clear state to prevent scrolling on subsequent re-renders (optional but good practice)
            window.history.replaceState({}, document.title);
        }
    }, [location]);

    return (
        <div className="app-container">
            <Navbar />
            <Hero />
            <Features />
            <Courses />
            {/* <Mentors /> */}
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Home;
