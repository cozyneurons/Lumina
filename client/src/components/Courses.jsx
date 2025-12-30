import ScrollReveal, { RevealList, RevealItem } from './ScrollReveal';
import { Link } from 'react-router-dom';
import { coursesData } from "../data/courses";

const Courses = () => {
    // Show only the first 3 courses
    const displayCourses = coursesData.slice(0, 3);

    return (
        <section id="courses" className="section courses-section">
            <ScrollReveal width="100%">
                <div className="section-header">
                    <div className="header-row">
                        <h2 className="section-title">Popular <span className="text-highlight">Courses</span></h2>
                        <Link to="/courses" className="btn btn-text">View All <i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
            </ScrollReveal>

            <RevealList interval={0.15}>
                <div className="courses-grid">
                    {displayCourses.map((course) => (
                        <RevealItem key={course.id}>
                            <Link to={`/course/${course.id}`} className="course-card-link" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
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
                        </RevealItem>
                    ))}
                </div>
            </RevealList>
        </section>
    );
};

export default Courses;
