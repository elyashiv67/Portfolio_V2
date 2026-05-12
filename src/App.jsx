import './App.css'
import { useState, useEffect, useRef } from "react";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";

function useCursor() {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        const move = (e) => {
            if (dotRef.current) dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
            if (ringRef.current) ringRef.current.style.transform = `translate(${e.clientX - 18}px, ${e.clientY - 18}px)`;
        };
        const over = (e) => { if (e.target.closest("a, button")) setHovering(true); };
        const out = () => setHovering(false);
        window.addEventListener("mousemove", move);
        window.addEventListener("mouseover", over);
        window.addEventListener("mouseout", out);
        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseover", over);
            window.removeEventListener("mouseout", out);
        };
    }, []);

    return { dotRef, ringRef, hovering };
}

function useFadeIn() {
    useEffect(() => {
        const els = document.querySelectorAll(".fade-in");
        const obs = new IntersectionObserver(
            (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }); },
            { threshold: 0.12 }
        );
        els.forEach((el) => obs.observe(el));
        return () => obs.disconnect();
    }, []);
}

function useWakeServer() {
    useEffect(() => {
        // Replace with your actual Render server URL
        fetch('https://todolist-jcvt.onrender.com/ping')
            .then(res => res.json())
            .then(data => console.log('Server status:', data.message))
            .catch(err => console.error('Error waking up server:', err));
    }, []);
}

function useScrolled() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return scrolled;
}

export default function Portfolio() {
    const { dotRef, ringRef, hovering } = useCursor();
    useFadeIn();
    const scrolled = useScrolled();
    useWakeServer();

    return (
        <>

            {/* Cursor */}
            <div className={`cursor${hovering ? " hovering" : ""}`}>
                <div ref={dotRef} className="cursor-dot" style={{ position: "fixed" }} />
                <div ref={ringRef} className="cursor-ring" style={{ position: "fixed" }} />
            </div>

            {/* Nav */}
            <nav className={scrolled ? "scrolled" : ""}>
                <a href="#" className="nav-logo">Elyashiv Swisa</a>
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            {/* Hero */}
            <section className="hero">
                <div className="hero-bg" />
                <div className="hero-line">Available for work</div>
                <div className="hero-content">
                    <div className="hero-tag">Portfolio — 2025</div>
                    <h1 className="hero-name">
                        <br /><span>Elyashiv Swisa</span><br />
                    </h1>
                    <p className="hero-desc">
                        I have a deep love for coding and lifelong learning, driven by a strong belief in hard work and dedication.
                    </p>
                    <div className="hero-actions">
                        <a href="#work" className="btn-primary">View Work</a>
                        <a href="#contact" className="btn-ghost">Get in Touch</a>
                    </div>
                </div>
            </section>

            <About />
            <Work />
            <Contact />

            {/* Footer */}
            <footer>
                <span>© 2025 Elyashiv swisa</span>
                <span>Designed & built by me</span>
            </footer>
        </>
    );
}
