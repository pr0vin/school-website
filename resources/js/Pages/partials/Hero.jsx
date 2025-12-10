import React, { useEffect } from "react";

function Hero() {
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
    }, []);
    return (
        <div>
            {" "}
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
        </div>
    );
}

export default Hero;
