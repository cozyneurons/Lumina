const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <a href="#" className="logo">
                        <div className="logo-icon"><i className="fa-solid fa-lightbulb"></i></div>
                        <span>Lumina</span>
                    </a>
                    <p>Empowering the next generation of creators and leaders.</p>
                    <div className="social-links">
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="#"><i className="fa-brands fa-github"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
                <div className="footer-links-group">
                    <h4>Platform</h4>
                    <a href="#">Browse Courses</a>
                    <a href="#">Mentorship</a>
                    <a href="#">Pricing</a>
                    <a href="#">For Business</a>
                </div>
                <div className="footer-links-group">
                    <h4>Company</h4>
                    <a href="#">About Us</a>
                    <a href="#">Careers</a>
                    <a href="#">Blog</a>
                    <a href="#">Contact</a>
                </div>
                <div className="footer-links-group">
                    <h4>Resources</h4>
                    <a href="#">Support</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Sitemap</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Lumina Education. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
