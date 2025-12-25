const Mentors = () => {
    return (
        <section id="mentors" className="section mentors-section">
            <div className="section-header">
                <h2 className="section-title">Meet Our <span className="gradient-text">Mentors</span></h2>
                <p className="section-subtitle">Learn from the best. Our mentors are industry leaders from top tech companies.</p>
            </div>
            <div className="mentors-grid">
                {/* Mentor 1 */}
                <div className="mentor-card">
                    <div className="mentor-image">
                        <img src="https://placehold.co/400x400/2a2e38/FFF?text=Sarah" alt="Sarah Johnson" />
                        <div className="mentor-overlay">
                            <div className="social-links">
                                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="mentor-info">
                        <h3>Sarah Johnson</h3>
                        <p className="mentor-role">Senior Engineer @ Google</p>
                        <p className="mentor-bio">Specializing in distributed systems and scalable architecture.</p>
                    </div>
                </div>

                {/* Mentor 2 */}
                <div className="mentor-card">
                    <div className="mentor-image">
                        <img src="https://placehold.co/400x400/2a2e38/FFF?text=David" alt="David Chen" />
                        <div className="mentor-overlay">
                            <div className="social-links">
                                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                                <a href="#"><i className="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="mentor-info">
                        <h3>David Chen</h3>
                        <p className="mentor-role">Product Designer @ Airbnb</p>
                        <p className="mentor-bio">Passionate about user-centric design and design systems.</p>
                    </div>
                </div>

                {/* Mentor 3 */}
                <div className="mentor-card">
                    <div className="mentor-image">
                        <img src="https://placehold.co/400x400/2a2e38/FFF?text=Maria" alt="Maria Garcia" />
                        <div className="mentor-overlay">
                            <div className="social-links">
                                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="mentor-info">
                        <h3>Maria Garcia</h3>
                        <p className="mentor-role">Data Scientist @ Netflix</p>
                        <p className="mentor-bio">Expert in machine learning, AI ethics, and data visualization.</p>
                    </div>
                </div>

                {/* Mentor 4 */}
                <div className="mentor-card">
                    <div className="mentor-image">
                        <img src="https://placehold.co/400x400/2a2e38/FFF?text=James" alt="James Wilson" />
                        <div className="mentor-overlay">
                            <div className="social-links">
                                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="mentor-info">
                        <h3>James Wilson</h3>
                        <p className="mentor-role">CTO @ StartupX</p>
                        <p className="mentor-bio">Building the next generation of fintech solutions.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Mentors;
