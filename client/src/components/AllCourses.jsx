import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from 'react-router-dom';
import { coursesData } from "../data/courses";

const AllCourses = () => {
    return (
        <div className="app-container">
            <Navbar />

            <section className="section courses-section">
                <div className="section-header">
                    <h1 className="section-title">Explore All <span className="text-highlight">Courses</span></h1>
                    <p className="section-subtitle">Find the perfect course to upgrade your skills.</p>
                </div>

                <div className="page-header-container">
                    <Link to="/" className="btn btn-text"><i className="fa-solid fa-arrow-left"></i> Back to Home</Link>
                </div>

                <div className="courses-grid-extended">
                    {coursesData.map((course) => (
                        <Link to={`/course/${course.id}`} className="course-card-link" key={course.id}>
                            <article className="course-card" style={{ height: '100%' }}>
                                <div className="course-image">
                                    <img src={course.image} alt={course.title} />
                                    {course.badge && <span className={`course-badge ${course.badge === 'New' ? 'new' : ''}`}>{course.badge}</span>}
                                </div>
                                <div className="course-content">
                                    <div className="course-meta">
                                        <span><i className="fa-regular fa-clock"></i> {course.duration}</span>
                                        <span><i className="fa-solid fa-signal"></i> {course.level}</span>
                                    </div>
                                    <h3>{course.title}</h3>
                                    <p className="instructor">with {course.instructor}</p>
                                    <div className="course-footer">
                                        <div className="rating"><i className="fa-solid fa-star"></i> {course.rating}</div>
                                        <div className="price">{course.price}</div>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AllCourses;
