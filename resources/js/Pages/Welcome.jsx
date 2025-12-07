import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../../../public/assets/style.css";
import GuestLayout from "@/Layouts/GuestLayout";

export default function Welcome() {
    useEffect(() => {
        /* ------------------ HERO VIDEO MUTE TOGGLE ------------------ */
        const video = document.getElementById("heroVideo");
        const btn = document.getElementById("muteToggle");

        function updateUI() {
            const muted = video.muted;
            btn.setAttribute("aria-pressed", String(muted));
            btn.textContent = muted ? "Unmute" : "Mute";
            btn.setAttribute(
                "aria-label",
                muted ? "Unmute video" : "Mute video"
            );
        }

        btn.addEventListener("click", async () => {
            video.muted = !video.muted;
            try {
                await video.play();
            } catch (_) {}
            updateUI();
        });

        updateUI();

        /* ------------------ QAA SECTION REVEAL ------------------ */
        const qaaSection = document.querySelector(".qaa-section");

        if (qaaSection) {
            const qaaObserver = new IntersectionObserver(
                (entries, obs) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            qaaSection.classList.add("in-view");
                            obs.unobserve(qaaSection);
                        }
                    });
                },
                { threshold: 0.2 }
            );
            qaaObserver.observe(qaaSection);
        }

        /* ------------------ STATS COUNTUP ------------------ */
        let counted = false;
        const statsSection = document.querySelector(".stats-section");
        const statNumbers = document.querySelectorAll(".stat-number");
        function animateCount(el, target) {
            let current = 0;
            const duration = 2000;
            const step = Math.ceil(target / (duration / 16));

            const counter = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(counter);
                }
                el.textContent = current;
            }, 16);
        }

        if (statsSection) {
            const statsObserver = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting && !counted) {
                            counted = true;
                            statNumbers.forEach((num) => {
                                animateCount(num, parseInt(num.dataset.count));
                            });
                        }
                    });
                },
                { threshold: 0.3 }
            );
            statsObserver.observe(statsSection);
        }

        /* ------------------ WHY NAST SECTION ------------------ */
        const whySection = document.querySelector(".why-section");

        if (whySection) {
            const whyObserver = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            whySection.classList.add("in-view");
                        }
                    });
                },
                { threshold: 0.4 }
            );

            whyObserver.observe(whySection);
        }

        /* ------------------ BACK TO TOP ------------------ */
        const backToTop = document.querySelector(".back-to-top");
        if (backToTop) {
            function toggleBtn() {
                if (window.scrollY > 300) backToTop.classList.add("show");
                else backToTop.classList.remove("show");
            }

            window.addEventListener("scroll", toggleBtn);

            backToTop.addEventListener("click", () => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        }

        /* ------------------ PROGRAMMES SECTION ------------------ */
        const progSection = document.querySelector(".programmes-section");

        if (progSection) {
            const progObserver = new IntersectionObserver(
                (entries) => {
                    entries.forEach((e) => {
                        if (e.isIntersecting) {
                            progSection.classList.add("in-view");
                            progObserver.unobserve(progSection);
                        }
                    });
                },
                { threshold: 0.25 }
            );

            progObserver.observe(progSection);
        }
    }, []);

    return (
        <>
            <GuestLayout>
                {/* HERO */}
                <main className="hero" role="banner">
                    <video
                        id="heroVideo"
                        className="hero-video"
                        playsInline
                        autoPlay
                        muted
                        loop
                        preload="auto"
                        poster="/img/nast.jpg"
                    >
                        <source src="/img/banner-vid.mp4" type="video/mp4" />
                        Your browser does not support HTML5 video.
                    </video>

                    <div className="overlay"></div>

                    <button id="muteToggle" className="mute-toggle">
                        Unmute
                    </button>

                    <div className="hero-inner container">
                        <div className="hero-copy">
                            <h1>A QAA Certified College</h1>
                            <p>
                                Among the affiliated educational institutions of
                                Pokhara University...
                            </p>
                            <div className="actions">
                                <a href="#about" className="btn glass">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </main>

                {/* QAA SECTION */}
                <section className="qaa-section">
                    <div className="container qaa-grid">
                        <div className="qaa-text">
                            <h2>QAA Certified and 25 Years of Excellence</h2>
                            <p className="qaa-lead">
                                National Academy of Science and Technology...
                            </p>

                            <ul className="qaa-list">
                                <li>
                                    ✔ 2000 A.D.: Bachelor of Computer
                                    Engineering
                                </li>
                                <li>
                                    ✔ 2001 A.D.: Bachelor of Computer
                                    Application
                                </li>
                                <li>
                                    ✔ 2008 A.D.: Bachelor of Business
                                    Administration
                                </li>
                                <li>
                                    ✔ 2010 A.D.: Bachelor of Civil Engineering
                                </li>
                                <li>✔ 2022 A.D.: QAA Certified</li>
                                <li>✔ 2024 A.D.: MBA Program</li>
                            </ul>
                        </div>

                        <div className="qaa-photo">
                            <img
                                src="/img/pic1.jpg"
                                alt="Graduates of NAST College"
                            />
                        </div>
                    </div>
                </section>

                {/* STATS */}
                <section className="stats-section">
                    <div className="container stats-grid">
                        {[
                            ["25", "Years of Excellence"],
                            ["5", "Programs"],
                            ["302", "Undergraduate Intake Per Year"],
                            ["70", "Graduate Intake Per Half Year"],
                            ["33", "Faculties"],
                        ].map(([count, label], i) => (
                            <div className="stat-item" key={i}>
                                <div className="stat-number" data-count={count}>
                                    0
                                </div>
                                <div className="stat-label">{label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* WHY NAST */}
                <section className="why-section">
                    <div className="container why-grid">
                        <div className="why-left reveal-why">
                            <h2>Why NAST ?</h2>
                            <p>
                                Well-equipped laboratories, library with
                                adequate number of books...
                            </p>
                            <a className="btn-learn" href="#about">
                                Learn More →
                            </a>
                        </div>

                        {/* Cards */}
                        {[
                            {
                                img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
                                title: "Exploring Potential",
                                text: "Exploring potential talents in the western region.",
                            },
                            {
                                img: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
                                title: "Affordable and Quality",
                                text: "Providing affordable and quality education.",
                            },
                            {
                                img: "https://cdn-icons-png.flaticon.com/512/9068/9068979.png",
                                title: "Institutional Collaboration",
                                text: "Establishing institutional linkage and collaboration.",
                            },
                        ].map((item, i) => (
                            <div className="why-card reveal-why" key={i}>
                                <div className="why-icon">
                                    <img src={item.img} alt={item.title} />
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* PROGRAMMES */}
                <section id="programmes" className="programmes-section">
                    <div className="container">
                        <h2 className="section-title">Offered Programmes</h2>

                        <div className="programme-grid">
                            {[
                                {
                                    tag: "BE Computer",
                                    title: "Computer Engineering",
                                    img: "/img/computer.jpg",
                                },
                                {
                                    tag: "BCA",
                                    title: "Computer Application",
                                    img: "/img/bca.jpeg",
                                },
                                {
                                    tag: "BBA",
                                    title: "Business Administration",
                                    img: "/img/bba.jpg",
                                },
                                {
                                    tag: "BE Civil",
                                    title: "Civil Engineering",
                                    img: "/img/civil.jpg",
                                },
                                {
                                    tag: "MBA",
                                    title: "Master's of Business Administration",
                                    img: "/img/mba.jpg",
                                },
                            ].map((p, i) => (
                                <a key={i} className="programme-card">
                                    <div className="prog-image">
                                        <img src={p.img} alt={p.title} />
                                        <div className="prog-overlay">
                                            <span className="prog-more">
                                                View details →
                                            </span>
                                        </div>
                                    </div>
                                    <div className="prog-body">
                                        <span className="prog-tag">
                                            {p.tag}
                                        </span>
                                        <h3 className="prog-title">
                                            {p.title}
                                        </h3>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
            </GuestLayout>
        </>
    );
}
