export default function Footer() {
    return (
        <>
            {/* ===== Footer ===== */}
            <footer className="site-footer">
                {/* Top section */}
                <div className="footer-main">
                    <div className="container footer-grid">
                        {/* Column 1 */}
                        <div className="footer-col footer-brand">
                            <h3 className="footer-logo">NAST</h3>
                            <p>
                                Dhangadhi-4 <br />
                                Utterbehedhi, Kailali <br />
                                Nepal
                            </p>

                            <p className="footer-contact">
                                <span className="icon">📞</span>
                                <a
                                    href="tel:9844351869"
                                    className="footer-link"
                                >
                                    9844351869
                                </a>
                                ,{" "}
                                <a
                                    href="tel:+9806463417"
                                    className="footer-link"
                                >
                                    9806463417
                                </a>
                            </p>

                            <p className="footer-contact">
                                <span className="icon">✉️</span>
                                <a
                                    href="mailto:subashchan31@gmail.com"
                                    className="footer-link"
                                >
                                    subashchan31@gmail.com
                                </a>
                                , <br />
                                <a
                                    href="mailto:nastinfo@gmail.com"
                                    className="footer-link"
                                >
                                    nastinfo@gmail.com
                                </a>
                            </p>
                        </div>

                        {/* Column 2 */}
                        <div className="footer-col">
                            <h4 className="footer-heading">About Us</h4>
                            <ul className="footer-list">
                                <li>
                                    <a href="#pu" className="footer-nav-link">
                                        Pokhara University
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#md-message"
                                        className="footer-nav-link"
                                    >
                                        Managing Director Message
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#principal-message"
                                        className="footer-nav-link"
                                    >
                                        Principal's Message
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#virtual-tour"
                                        className="footer-nav-link"
                                    >
                                        NAST Virtual Tour
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div className="footer-col">
                            <h4 className="footer-heading">Resource</h4>
                            <ul className="footer-list">
                                <li>
                                    <a
                                        href="#courses"
                                        className="footer-nav-link"
                                    >
                                        Courses
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#events"
                                        className="footer-nav-link"
                                    >
                                        Events
                                    </a>
                                </li>
                                <li>
                                    <a href="#news" className="footer-nav-link">
                                        News &amp; Notice
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#careers"
                                        className="footer-nav-link"
                                    >
                                        Careers
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Column 4 */}
                        <div className="footer-col">
                            <h4 className="footer-heading">Quick Links</h4>
                            <ul className="footer-list">
                                <li>
                                    <a href="/" className="footer-nav-link">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/about"
                                        className="footer-nav-link"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/contact"
                                        className="footer-nav-link"
                                    >
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <a href="#qaa" className="footer-nav-link">
                                        QAA Committee
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="footer-bottom">
                    <div className="container footer-bottom-inner">
                        <p>
                            © Copyright <strong>Subash</strong>. All Rights
                            Reserved
                        </p>

                        <div className="footer-social">
                            <a
                                href="https://www.linkedin.com/in/subash-chand-4a6635301/"
                                className="social-btn"
                            >
                                <i className="bx bxl-linkedin"></i>
                            </a>
                            <a
                                href="https://www.facebook.com/subash.chand.202853"
                                className="social-btn"
                            >
                                <i className="bx bxl-facebook"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Back to top button */}
            <button
                type="button"
                className="back-to-top"
                aria-label="Back to top"
            >
                ↑
            </button>
        </>
    );
}
