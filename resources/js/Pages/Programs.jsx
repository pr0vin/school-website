import GuestLayout from "@/Layouts/GuestLayout";
import React, { useEffect } from "react";

const Programs = () => {
    // --- Scroll Reveal Animation ---
    useEffect(() => {
        const revealEls = document.querySelectorAll(".reveal");

        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        revealEls.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <GuestLayout>
            {/* =========================== HERO =========================== */}
            <section className="p-hero">
                <img
                    src="/img/nast.jpg"
                    className="p-hero-bg"
                    alt="NAST College"
                />
                <div className="p-hero-overlay"></div>

                <div className="p-hero-content">
                    <p className="p-hero-top">Academic Programmes</p>
                    <h1 className="p-hero-title">
                        Programmes at NAST College, Dhangadhi
                    </h1>
                    <p className="p-hero-text">
                        NAST offers undergraduate and postgraduate programmes in
                        management, computer applications and engineering
                        designed to build confident, industry-ready graduates.
                    </p>
                </div>
            </section>

            {/* ======================== PROGRAMMES WRAPPER ======================== */}
            <section className="p-wrapper">
                <header className="p-section-head reveal">
                    <h2>Our Offered Programmes</h2>
                    <p>
                        Explore the programmes that match your interest and
                        career goals.
                    </p>
                </header>

                {/* ======================= BCA ======================= */}
                <article className="p-card reveal">
                    <div className="p-card-info">
                        <h3>Bachelor of Computer Application (BCA)</h3>

                        <div className="p-tags">
                            <span>4 Years</span>
                            <span>Pokrara University</span>
                            <span>Intake: Yearly</span>
                        </div>

                        <h4>Programme Overview</h4>
                        <p>
                            BCA is designed to produce skilled IT professionals
                            with knowledge in programming, databases,
                            networking, and web technologies.
                        </p>

                        <ul>
                            <li>Strong programming foundation</li>
                            <li>Practical labs every semester</li>
                            <li>Workshops & technology training</li>
                            <li>Internship support</li>
                        </ul>

                        <h4>Eligibility & Career</h4>
                        <p className="sub">Eligibility</p>
                        <ul>
                            <li>+2 / A-Level any stream</li>
                            <li>Basic mathematics preferred</li>
                            <li>Entrance + Interview</li>
                        </ul>

                        <p className="sub">Career Prospects</p>
                        <ul>
                            <li>Software Developer</li>
                            <li>Web/Mobile App Developer</li>
                            <li>IT Officer</li>
                            <li>Database Administrator</li>
                        </ul>
                    </div>

                    <div className="p-card-img">
                        <img src="/img/bca.jpeg" alt="BCA Students" />
                    </div>
                </article>

                {/* ======================= BBA ======================= */}
                <article className="p-card reveal">
                    <div className="p-card-info">
                        <h3>Bachelor of Business Administration (BBA)</h3>

                        <div className="p-tags">
                            <span>4 Years</span>
                            <span>Pokrara University</span>
                            <span>Semester System</span>
                        </div>

                        <h4>Programme Overview</h4>
                        <p>
                            BBA builds strong management, leadership,
                            communication and business skills.
                        </p>

                        <ul>
                            <li>Case study based learning</li>
                            <li>Industry visits</li>
                            <li>Leadership development</li>
                            <li>Final research project</li>
                        </ul>

                        <h4>Eligibility & Career</h4>
                        <p className="sub">Eligibility</p>
                        <ul>
                            <li>+2 / A-Level any discipline</li>
                            <li>Entrance Examination</li>
                        </ul>

                        <p className="sub">Career Prospects</p>
                        <ul>
                            <li>Manager / Executive</li>
                            <li>Banking & Finance</li>
                            <li>Marketing Officer</li>
                            <li>Entrepreneurship</li>
                        </ul>
                    </div>

                    <div className="p-card-img">
                        <img src="/img/bba.jpg" alt="BBA Students" />
                    </div>
                </article>

                {/* ======================= BE COMPUTER ======================= */}
                <article className="p-card reveal">
                    <div className="p-card-info">
                        <h3>
                            Bachelor of Engineering in Computer (BE Computer)
                        </h3>

                        <div className="p-tags">
                            <span>4 Years</span>
                            <span>Engineering</span>
                            <span>Full-time</span>
                        </div>

                        <h4>Programme Overview</h4>
                        <p>
                            Focus on software engineering, algorithms, AI,
                            networking and hardware systems.
                        </p>

                        <ul>
                            <li>Advanced labs</li>
                            <li>Major projects</li>
                            <li>Research exposure</li>
                        </ul>

                        <h4>Eligibility & Career</h4>
                        <p className="sub">Eligibility</p>
                        <ul>
                            <li>+2 Science (PCM)</li>
                            <li>Engineering Entrance</li>
                        </ul>

                        <p className="sub">Career Prospects</p>
                        <ul>
                            <li>Software Engineer</li>
                            <li>AI/Data Engineer</li>
                            <li>Network Engineer</li>
                        </ul>
                    </div>

                    <div className="p-card-img">
                        <img
                            src="/img/computer.jpg"
                            alt="Computer Engineering Students"
                        />
                    </div>
                </article>

                {/* ======================= BE CIVIL ======================= */}
                <article className="p-card reveal">
                    <div className="p-card-info">
                        <h3>Bachelor of Engineering in Civil (BE CIVIL)</h3>

                        <div className="p-tags">
                            <span>4 Years</span>
                            <span>Civil Engineering</span>
                            <span>Labs + Field Work</span>
                        </div>

                        <h4>Programme Overview</h4>
                        <p>
                            BE Civil focuses on planning, designing and
                            constructing physical structures.
                        </p>

                        <ul>
                            <li>Survey & structural design</li>
                            <li>Hydropower & geotechnical</li>
                            <li>Site visits</li>
                        </ul>

                        <h4>Eligibility & Career</h4>
                        <p className="sub">Eligibility</p>
                        <ul>
                            <li>+2 Science PCM</li>
                            <li>Entrance Clearance</li>
                        </ul>

                        <p className="sub">Career Prospects</p>
                        <ul>
                            <li>Civil Engineer</li>
                            <li>Project Supervisor</li>
                            <li>Consulting Engineer</li>
                        </ul>
                    </div>

                    <div className="p-card-img">
                        <img
                            src="/img/civil.jpg"
                            alt="Civil Engineering Students"
                        />
                    </div>
                </article>

                {/* ======================= MBA ======================= */}
                <article className="p-card reveal">
                    <div className="p-card-info">
                        <h3>Master of Business Administration (MBA)</h3>

                        <div className="p-tags">
                            <span>2 Years</span>
                            <span>Postgraduate</span>
                            <span>Evening/Regular</span>
                        </div>

                        <h4>Programme Overview</h4>
                        <p>
                            Designed for graduates aiming for leadership and
                            managerial excellence.
                        </p>

                        <ul>
                            <li>Research & project work</li>
                            <li>Industry sessions</li>
                            <li>Leadership training</li>
                        </ul>

                        <h4>Eligibility & Career</h4>
                        <p className="sub">Eligibility</p>
                        <ul>
                            <li>Bachelor's degree</li>
                            <li>Entrance + Interview</li>
                        </ul>

                        <p className="sub">Career Prospects</p>
                        <ul>
                            <li>Manager / Consultant</li>
                            <li>Corporate Strategist</li>
                            <li>Business Analyst</li>
                        </ul>
                    </div>

                    <div className="p-card-img">
                        <img src="/img/mba.jpg" alt="MBA Students" />
                    </div>
                </article>
            </section>
        </GuestLayout>
    );
};

export default Programs;
