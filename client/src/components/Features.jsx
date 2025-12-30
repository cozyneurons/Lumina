import ScrollReveal, { RevealList, RevealItem } from './ScrollReveal';

const Features = () => {
    return (
        <section id="features" className="section features-section">
            <ScrollReveal width="100%">
                <div className="section-header">
                    <h2 className="section-title">Why Choose <span className="gradient-text">Lumina?</span></h2>
                    <p className="section-subtitle">We seamlessly blend cutting-edge technology with proven pedagogical methods.
                    </p>
                </div>
            </ScrollReveal>

            <RevealList interval={0.2}>
                <div className="features-grid">
                    <RevealItem>
                        <div className="feature-card">
                            <div className="feature-icon icon-1"><i className="fa-solid fa-brain"></i></div>
                            <h3>AI-Driven Paths</h3>
                            <p>Adaptive curriculum that evolves with your pace and understanding.</p>
                        </div>
                    </RevealItem>
                    <RevealItem>
                        <div className="feature-card">
                            <div className="feature-icon icon-2"><i className="fa-solid fa-users-viewfinder"></i></div>
                            <h3>Expert Mentorship</h3>
                            <p>Get 1-on-1 guidance from industry veterans who have been there.</p>
                        </div>
                    </RevealItem>
                    <RevealItem>
                        <div className="feature-card">
                            <div className="feature-icon icon-3"><i className="fa-solid fa-globe"></i></div>
                            <h3>Global Network</h3>
                            <p>Connect with peers from 120+ countries for collaborative learning.</p>
                        </div>
                    </RevealItem>
                    <RevealItem>
                        <div className="feature-card">
                            <div className="feature-icon icon-4"><i className="fa-solid fa-certificate"></i></div>
                            <h3>Recognized Certs</h3>
                            <p>Earn certificates respected by top tech companies worldwide.</p>
                        </div>
                    </RevealItem>
                </div>
            </RevealList>
        </section>
    );
};

export default Features;
