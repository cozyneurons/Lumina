import ScrollReveal from './ScrollReveal';
import CountUp from 'react-countup';
import Typewriter from 'typewriter-effect';

const Hero = () => {
    return (
        <header className="hero">
            <div className="hero-content">
                <ScrollReveal delay={0.1}>
                    <div className="hero-badge">
                        <span className="badge-icon"><i className="fa-solid fa-rocket"></i></span>
                        <span className="badge-text">New: AI-Powered Learning Paths</span>
                    </div>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                    <h1 className="hero-title">Master the Skills of <br />
                        <span className="gradient-text" style={{ display: 'inline-block' }}>
                            <Typewriter
                                options={{
                                    strings: ['Tomorrow, Today.', 'The Future.', 'Innovation.'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 75,
                                    deleteSpeed: 50,
                                }}
                            />
                        </span>
                    </h1>
                </ScrollReveal>
                <ScrollReveal delay={0.3}>
                    <p className="hero-subtitle">Experience a new era of education. Interactive courses, world-class mentors,
                        and a community that drives you forward.</p>
                </ScrollReveal>
                <ScrollReveal delay={0.4}>
                    <div className="hero-buttons">
                        <a href="#courses" onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
                        }} className="btn btn-lg btn-primary">Start Learning Now <i
                            className="fa-solid fa-arrow-right"></i></a>
                        <a href="#" className="btn btn-lg btn-secondary"><i className="fa-solid fa-play"></i> Watch Demo</a>
                    </div>
                </ScrollReveal>
                <ScrollReveal delay={0.5}>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">
                                <CountUp end={50} suffix="k+" duration={2.5} />
                            </span>
                            <span className="stat-label">Active Learners</span>
                        </div>
                        <div className="stat-separator"></div>
                        <div className="stat-item">
                            <span className="stat-number">
                                <CountUp end={120} suffix="+" duration={2.5} />
                            </span>
                            <span className="stat-label">Expert Mentors</span>
                        </div>
                        <div className="stat-separator"></div>
                        <div className="stat-item">
                            <span className="stat-number">
                                <CountUp end={4.9} decimals={1} suffix="/5" duration={2.5} />
                            </span>
                            <span className="stat-label">User Rating</span>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            <div className="hero-visual">
                <ScrollReveal delay={0.6}>
                    <div className="visual-card-wrapper">
                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" alt="Student learning on tablet"
                            className="hero-image" />
                        {/* Decor elements */}
                        <div className="floating-card card-1">
                            <i className="fa-regular fa-circle-check"></i>
                            <p>Course Completed</p>
                        </div>
                        <div className="floating-card card-2">
                            <div className="user-avatars">
                                <div className="avatar"></div>
                                <div className="avatar"></div>
                                <div className="avatar"></div>
                            </div>
                            <p>Join Community</p>
                        </div>
                    </div>
                    <div className="glow-effect"></div>
                </ScrollReveal>
            </div>
        </header>
    );
};

export default Hero;
