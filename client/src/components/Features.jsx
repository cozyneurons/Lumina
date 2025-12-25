const Features = () => {
    return (
        <section id="features" className="section features-section">
            <div className="section-header">
                <h2 className="section-title">Why Choose <span className="gradient-text">Lumina?</span></h2>
                <p className="section-subtitle">We seamlessly blend cutting-edge technology with proven pedagogical methods.
                </p>
            </div>
            <div className="features-grid">
                <div className="feature-card">
                    <div className="feature-icon icon-1"><i className="fa-solid fa-brain"></i></div>
                    <h3>AI-Driven Paths</h3>
                    <p>Adaptive curriculum that evolves with your pace and understanding.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon icon-2"><i className="fa-solid fa-users-viewfinder"></i></div>
                    <h3>Expert Mentorship</h3>
                    <p>Get 1-on-1 guidance from industry veterans who have been there.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon icon-3"><i className="fa-solid fa-globe"></i></div>
                    <h3>Global Network</h3>
                    <p>Connect with peers from 120+ countries for collaborative learning.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon icon-4"><i className="fa-solid fa-certificate"></i></div>
                    <h3>Recognized Certs</h3>
                    <p>Earn certificates respected by top tech companies worldwide.</p>
                </div>
            </div>
        </section>
    );
};

export default Features;
