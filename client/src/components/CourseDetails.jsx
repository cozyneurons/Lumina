import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { coursesData } from "../data/courses";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useAuth } from "../context/AuthContext";


const CourseDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [course, setCourse] = useState(null);
    const [activeTab, setActiveTab] = useState("syllabus");
    const { user, enroll } = useAuth(); // Added useAuth hook

    // Derive enrolled state from user profile
    const isEnrolled = user?.enrolledCourses?.includes(course?.id); // Changed from enrolled state to derived state

    useEffect(() => {
        const foundCourse = coursesData.find(c => c.id === parseInt(id));
        if (foundCourse) {
            setCourse(foundCourse);
        } else {
            // navigate("/courses"); // Optional: Redirect if not found
        }
    }, [id, navigate]);

    const handleEnroll = async () => { // Made async
        // ID 1 is the "Full Stack Web Development" course (Free)
        const isFreeCourse = course.id === 1;

        if (!isFreeCourse) {
            // Show payment required message
            const toast = document.createElement("div");
            toast.className = "toast-message";
            toast.style.border = "1px solid #fbbf24"; // Yellow border for warning
            toast.textContent = `Payment required for ${course.title}. Portal coming soon!`;

            document.body.appendChild(toast);

            // Trigger reflow
            void toast.offsetWidth;
            toast.classList.add("show");

            setTimeout(() => {
                toast.classList.remove("show");
                setTimeout(() => {
                    document.body.removeChild(toast);
                }, 300);
            }, 3000);
            return;
        }

        // Check if user is logged in
        if (!user) {
            const toast = document.createElement("div");
            toast.className = "toast-message";
            toast.textContent = "Please log in to enroll.";
            document.body.appendChild(toast);
            void toast.offsetWidth;
            toast.classList.add("show");
            setTimeout(() => {
                toast.classList.remove("show");
                setTimeout(() => document.body.removeChild(toast), 300);
            }, 3000);
            return;
        }

        const result = await enroll(course.id); // Call enroll from auth context

        if (result.success) {
            // Show success message
            const toast = document.createElement("div");
            toast.className = "toast-message";
            toast.textContent = `Successfully enrolled in ${course.title}! Welcome aboard.`;
            document.body.appendChild(toast);

            // Trigger reflow
            void toast.offsetWidth;
            toast.classList.add("show");

            setTimeout(() => {
                toast.classList.remove("show");
                setTimeout(() => {
                    document.body.removeChild(toast);
                }, 300);
            }, 3000);
        } else {
            // Show error message
            const toast = document.createElement("div");
            toast.className = "toast-message";
            toast.style.border = "1px solid #ef4444"; // Red border for error
            toast.textContent = result.message || "Enrollment failed.";
            document.body.appendChild(toast);
            void toast.offsetWidth;
            toast.classList.add("show");
            setTimeout(() => {
                toast.classList.remove("show");
                setTimeout(() => document.body.removeChild(toast), 300);
            }, 3000);
        }
    };

    if (!course) return (
        <div className="app-container">
            <Navbar />
            <div className="section" style={{ textAlign: 'center', marginTop: '100px' }}>Loading...</div>
        </div>
    );

    return (
        <div className="app-container">
            <Navbar />

            <section className="section course-hero">
                <div className="course-hero-content">
                    <div className="course-info">
                        <Link to="/courses" className="btn btn-text" style={{ marginBottom: '1rem', display: 'inline-block' }}>
                            <i className="fa-solid fa-arrow-left"></i> Back to Courses
                        </Link>
                        <h1 className="hero-title-large">{course.title}</h1>
                        <p className="hero-description-large">{course.description}</p>

                        <div className="course-meta-large">
                            <div className="meta-item">
                                <i className="fa-solid fa-user-tie" style={{ color: 'var(--primary)' }}></i>
                                <span>{course.instructor}</span>
                            </div>
                            <div className="meta-item">
                                <i className="fa-regular fa-clock" style={{ color: 'var(--primary)' }}></i>
                                <span>{course.duration}</span>
                            </div>
                            <div className="meta-item">
                                <i className="fa-solid fa-star" style={{ color: '#fbbf24' }}></i>
                                <span>{course.rating} ({course.reviewCount} reviews)</span>
                            </div>
                        </div>

                        <div className="price-enroll">
                            <span className="price-tag">{course.id === 1 ? "Free" : course.price}</span>
                            <button
                                onClick={handleEnroll}
                                className={`btn btn-lg ${isEnrolled ? 'btn-outline' : 'btn-primary'}`}
                                disabled={isEnrolled && course.id === 1}
                            >
                                {isEnrolled && course.id === 1 ? "Enrolled" : (course.id === 1 ? "Enroll Now" : "Buy Course")}
                            </button>
                        </div>
                    </div>

                    <div className="course-image-large">
                        <img src={course.image} alt={course.title} />
                    </div>
                </div>
            </section>

            <section className="section course-content-tabs">
                <div className="tabs-header">
                    {['syllabus', 'instructor', 'reviews'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="tab-content">
                    {activeTab === 'syllabus' && (
                        <div className="syllabus-list">
                            <h3 style={{ marginBottom: '1.5rem' }}>Course Curriculum</h3>
                            {course.syllabus.map((item, idx) => (
                                <div
                                    key={idx}
                                    className={`syllabus-item ${isEnrolled && course.id === 1 ? 'unlocked' : ''}`}
                                    onClick={() => {
                                        if (isEnrolled && course.id === 1) {
                                            const toast = document.createElement("div");
                                            toast.className = "toast-message";
                                            toast.textContent = "Lesson content coming soon!";
                                            document.body.appendChild(toast);
                                            void toast.offsetWidth;
                                            toast.classList.add("show");
                                            setTimeout(() => {
                                                toast.classList.remove("show");
                                                setTimeout(() => document.body.removeChild(toast), 300);
                                            }, 2000);
                                        }
                                    }}
                                    style={{ cursor: isEnrolled && course.id === 1 ? 'pointer' : 'default' }}
                                >
                                    <span>
                                        <span className="module-label">Module {idx + 1}:</span>
                                        {item}
                                    </span>
                                    {isEnrolled && course.id === 1 ? (
                                        <i className="fa-solid fa-circle-play" style={{ color: 'var(--primary)', fontSize: '1.2rem' }}></i>
                                    ) : (
                                        <i className="fa-solid fa-lock" style={{ color: 'var(--text-muted)' }}></i>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'instructor' && (
                        <div className="instructor-profile">
                            <h3 style={{ marginBottom: '1rem' }}>About the Instructor</h3>
                            <p style={{ lineHeight: '1.6', fontSize: '1.1rem', color: 'var(--text-muted)' }}>{course.instructorBio}</p>
                        </div>
                    )}

                    {activeTab === 'reviews' && (
                        <div className="reviews-list">
                            <h3 style={{ marginBottom: '1.5rem' }}>Student Reviews</h3>
                            <div style={{ display: 'grid', gap: '1.5rem' }}>
                                {course.reviews.map((review, idx) => (
                                    <div key={idx} className="review-card">
                                        <div className="review-header">
                                            <strong>{review.user}</strong>
                                            <div className="review-stars">
                                                {[...Array(review.rating)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
                                            </div>
                                        </div>
                                        <p style={{ color: 'var(--text-muted)' }}>{review.comment}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CourseDetails;
