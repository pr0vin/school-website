import { useEffect } from "react";
import nastImage from "../../../public/img/nast.jpg"; // adjust path
import GuestLayout from "@/Layouts/GuestLayout";

export default function About() {
    useEffect(() => {
        // Back-to-top logic
        const backToTop = document.querySelector(".back-to-top");

        const toggleBackToTop = () => {
            if (window.scrollY > 300) {
                backToTop?.classList.add("show");
            } else {
                backToTop?.classList.remove("show");
            }
        };

        window.addEventListener("scroll", toggleBackToTop);

        if (backToTop) {
            backToTop.addEventListener("click", () => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        }

        // Scroll reveal logic
        const revealEls = document.querySelectorAll(".reveal-on-scroll");

        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view");
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        revealEls.forEach((el) => observer.observe(el));

        return () => {
            window.removeEventListener("scroll", toggleBackToTop);
        };
    }, []);

    return (
        <GuestLayout>
            {/* ===== Hero Section ===== */}
            <main className="hero hero-campus" role="banner">
                <img
                    src={nastImage}
                    alt="NAST College campus"
                    className="hero-bg"
                />
                <div className="overlay"></div>

                <div className="hero-inner container">
                    <div className="hero-copy hero-copy-campus">
                        <h1>
                            Exploring potential talents in the western region of
                            Nepal.
                        </h1>
                        <p>
                            NAST College, Dhangadhi is committed to nurturing
                            capable graduates in science, technology and
                            management through quality education, research and
                            collaboration with industry and academic partners.
                        </p>
                    </div>
                </div>
            </main>

            {/* ===== About Section ===== */}
            <section className="about-section">
                <div className="container reveal-on-scroll">
                    <h2 className="section-title">
                        About NAST College, Dhangadhi
                    </h2>
                    <p className="lead">
                        NAST (Nepal Advanced School of Science and Technology)
                        College, Dhangadhi is a prominent institution affiliated
                        to Pokhara University. It focuses on practical learning,
                        research and student development.
                    </p>

                    <div className="about-grid">
                        <article className="card">
                            <h3>Our Mission</h3>
                            <p>
                                To provide quality higher education in science,
                                technology and management that prepares students
                                for real-world challenges and national
                                development.
                            </p>
                        </article>

                        <article className="card">
                            <h3>Our Vision</h3>
                            <p>
                                To be recognized as a center of excellence in
                                western Nepal, offering innovative programs and
                                promoting research and industry linkages.
                            </p>
                        </article>

                        <article className="card">
                            <h3>Academic Focus</h3>
                            <ul>
                                <li>
                                    Strong theoretical and practical foundation
                                </li>
                                <li>Project-based learning</li>
                                <li>Mentoring and guidance</li>
                                <li>
                                    Encouragement for research and innovation
                                </li>
                            </ul>
                        </article>
                    </div>
                </div>
            </section>

            {/* ===== Highlight Section ===== */}
            <section className="highlight-section">
                <div className="container reveal-on-scroll">
                    <div className="highlight-layout">
                        <div className="highlight-text">
                            <h2 className="section-title">
                                Campus & Learning Environment
                            </h2>
                            <p>
                                The Dhangadhi campus provides a peaceful and
                                learner-friendly environment. Classrooms include
                                modern teaching aids, and laboratories support
                                science and computing.
                            </p>
                            <p>
                                Workshops, guest lectures and expert
                                interactions help students stay updated and
                                build confidence.
                            </p>
                        </div>

                        <div className="highlight-list">
                            <h3>Why Choose NAST Dhangadhi?</h3>
                            <ul>
                                <li>Experienced faculty</li>
                                <li>Student-centered teaching</li>
                                <li>
                                    Focus on discipline and personality
                                    development
                                </li>
                                <li>
                                    Support for further studies & career growth
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}
