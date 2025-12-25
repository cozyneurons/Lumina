import { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { GoogleLogin } from '@react-oauth/google';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { user, login, logout } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleSuccess = async (credentialResponse) => {
        const result = await login(credentialResponse.credential);
        if (result.success) {
            console.log("Logged in:", result);
        } else {
            console.error("Login Failed:", result.message);
        }
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        setMobileMenuOpen(false);

        if (location.pathname === '/') {
            // If already on home, just scroll
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // If on another page, navigate to home and pass targetId
            navigate('/', { state: { scrollTo: targetId } });
        }
    };

    return (
        <nav className="navbar">
            <div className="nav-content">
                <Link to="/" className="logo">
                    <div className="logo-icon"><i className="fa-solid fa-lightbulb"></i></div>
                    <span>Lumina</span>
                </Link>
                <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`} style={mobileMenuOpen ? { display: 'flex', flexDirection: 'column', position: 'absolute', top: '80px', left: '0', width: '100%', background: 'rgba(15, 17, 21, 0.9)', padding: '2rem' } : {}}>
                    <a href="#features" className="nav-link" onClick={(e) => handleNavClick(e, 'features')}>Features</a>
                    <a href="#courses" className="nav-link" onClick={(e) => handleNavClick(e, 'courses')}>Courses</a>
                    <a href="#mentors" className="nav-link" onClick={(e) => handleNavClick(e, 'mentors')}>Mentorship</a>
                    <a href="#testimonials" className="nav-link" onClick={(e) => handleNavClick(e, 'testimonials')}>Stories</a>
                </div>
                <div className="nav-actions">
                    {!user ? (
                        <>
                            <a href="#" className="btn btn-text">Log In</a>
                            <div className="google-login-wrapper">
                                <GoogleLogin
                                    onSuccess={handleGoogleSuccess}
                                    onError={() => console.log('Login Failed')}
                                    theme="filled_black"
                                    shape="pill"
                                    text="signup_with"
                                />
                            </div>
                        </>
                    ) : (
                        <div className="user-profile">
                            <img src={user.picture} alt={user.name} className="user-avatar" />
                            <span className="user-name">{user.name.split(' ')[0]}</span>
                            <button onClick={logout} className="btn btn-text logout-btn">Log Out</button>
                        </div>
                    )}
                </div>
                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" aria-label="Toggle menu" onClick={toggleMobileMenu}>
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
