const Testimonials = () => {
    return (
        <section id="testimonials" className="section testimonials-section">
            <div className="section-header">
                <h2 className="section-title">Success <span className="gradient-text">Stories</span></h2>
                <p className="section-subtitle">Join thousands of learners who have transformed their careers.</p>
            </div>
            <div className="testimonials-grid">
                <div className="testimonial-card">
                    <div className="quote-icon"><i className="fa-solid fa-quote-right"></i></div>
                    <p className="quote-text">"The AI-driven curriculum helped me focus exactly on what I needed to learn. I
                        landed a senior dev role in 3 months."</p>
                    <div className="user-profile">
                        <img src="https://placehold.co/100x100/2a2e38/FFF?text=Alex" alt="Alex M." className="user-img" />
                        <div className="user-info">
                            <h4>Alex Morgan</h4>
                            <p>Software Engineer at TechCorp</p>
                        </div>
                    </div>
                </div>

                <div className="testimonial-card">
                    <div className="quote-icon"><i className="fa-solid fa-quote-right"></i></div>
                    <p className="quote-text">"Lumina's mentorship program is a game-changer. My mentor guided me through
                        complex system design problems effortlessly."</p>
                    <div className="user-profile">
                        <img src="https://placehold.co/100x100/2a2e38/FFF?text=Priya" alt="Priya K." className="user-img" />
                        <div className="user-info">
                            <h4>Priya Kapoor</h4>
                            <p>Data Scientist at DataFlow</p>
                        </div>
                    </div>
                </div>

                <div className="testimonial-card">
                    <div className="quote-icon"><i className="fa-solid fa-quote-right"></i></div>
                    <p className="quote-text">"The community support is incredible. I never felt stuck because there was
                        always someone ready to help out."</p>
                    <div className="user-profile">
                        <img src="https://placehold.co/100x100/2a2e38/FFF?text=James" alt="James L." className="user-img" />
                        <div className="user-info">
                            <h4>James Lee</h4>
                            <p>Product Designer at CreativeX</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
