import { Link } from "@inertiajs/react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation();
    const currentPage = location.pathname.replace("/", "") || "index.php";

    const isActive = (page) => (currentPage === page ? "active" : "");

    const [open, setOpen] = useState(false);

    return (
        <>
            {/* ===== Topbar ===== */}
            <div className="topbar">
                <div className="container topbar-row">
                    <div className="left">
                        <a className="item" href="tel:9844351869">
                            <span className="ico">📞</span> 9844351869
                        </a>

                        <a
                            className="item"
                            href="mailto:subashchan31@gmail.com"
                        >
                            <span className="ico">✉️</span>{" "}
                            subashchan31@gmail.com
                        </a>
                    </div>

                    <div className="right">
                        <Link className="topbar-link" href="/contact.php">
                            📞 Contact Us
                        </Link>
                    </div>
                </div>
            </div>

            {/* ===== Navbar ===== */}
            <header className="nav" id="home">
                <div className="container nav-row">
                    <Link className="brand" href="/index.php">
                        <img
                            src="/img/nastr.png"
                            alt="NAST College"
                            className="brand-logo"
                        />
                    </Link>

                    {/* Desktop menu */}
                    <nav className="nav-links">
                        <Link href="/about" className={isActive("about.php")}>
                            About Us
                        </Link>
                        <Link
                            href="/program.php"
                            className={isActive("program.php")}
                        >
                            Programmes
                        </Link>
                        <Link
                            href="/facility.php"
                            className={isActive("facility.php")}
                        >
                            Facilities
                        </Link>
                        <Link
                            href="/gallery.php"
                            className={isActive("gallery.php")}
                        >
                            Gallery
                        </Link>

                        <Link
                            href="/apply.php"
                            className={`btn cta ${isActive("apply.php")}`}
                        >
                            Apply Online
                        </Link>
                    </nav>

                    {/* Mobile toggle */}
                    <div className="burger" onClick={() => setOpen(true)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    {/* Mobile menu sheet */}
                    {open && (
                        <div className="sheet">
                            <div
                                className="backdrop"
                                onClick={() => setOpen(false)}
                            ></div>

                            <nav className="panel">
                                <button
                                    className="close"
                                    onClick={() => setOpen(false)}
                                >
                                    ✕
                                </button>

                                <Link
                                    href="/about.php"
                                    className={isActive("about.php")}
                                >
                                    About Us
                                </Link>
                                <Link
                                    href="/program.php"
                                    className={isActive("program.php")}
                                >
                                    Programmes
                                </Link>
                                <Link
                                    href="/facility.php"
                                    className={isActive("facility.php")}
                                >
                                    Facilities
                                </Link>
                                <Link
                                    href="/gallery.php"
                                    className={isActive("gallery.php")}
                                >
                                    Gallery
                                </Link>

                                <Link
                                    href="/apply.php"
                                    className={`btn primary full ${isActive(
                                        "apply.php"
                                    )}`}
                                >
                                    Apply Online
                                </Link>
                            </nav>
                        </div>
                    )}
                </div>
            </header>
        </>
    );
}
