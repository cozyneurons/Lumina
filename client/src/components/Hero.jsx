const Hero = () => {
    return (
        <header className="hero">
            <div className="hero-content">
                <div className="hero-badge">
                    <span className="badge-icon"><i className="fa-solid fa-rocket"></i></span>
                    <span className="badge-text">New: AI-Powered Learning Paths</span>
                </div>
                <h1 className="hero-title">Master the Skills of <br /><span className="gradient-text">Tomorrow, Today.</span></h1>
                <p className="hero-subtitle">Experience a new era of education. Interactive courses, world-class mentors,
                    and a community that drives you forward.</p>
                <div className="hero-buttons">
                    <a href="#courses" onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
                    }} className="btn btn-lg btn-primary">Start Learning Now <i
                        className="fa-solid fa-arrow-right"></i></a>
                    <a href="#" className="btn btn-lg btn-secondary"><i className="fa-solid fa-play"></i> Watch Demo</a>
                </div>
                <div className="hero-stats">
                    <div className="stat-item">
                        <span className="stat-number">50k+</span>
                        <span className="stat-label">Active Learners</span>
                    </div>
                    <div className="stat-separator"></div>
                    <div className="stat-item">
                        <span className="stat-number">120+</span>
                        <span className="stat-label">Expert Mentors</span>
                    </div>
                    <div className="stat-separator"></div>
                    <div className="stat-item">
                        <span className="stat-number">4.9/5</span>
                        <span className="stat-label">User Rating</span>
                    </div>
                </div>
            </div>
            <div className="hero-visual">
                <div className="visual-card-wrapper">
                    <img src="https://placehold.co/600x400/181b21/FFF?text=Hero+Visual" alt="Student learning on tablet"
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
            </div>
        </header>
    );
};

export default Hero;
