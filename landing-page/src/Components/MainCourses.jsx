import React from "react";
import axios from 'axios';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../css/maincourses.css";
import { CourseContext } from "../Context/CourseContext";
import { useContext } from "react";


// course card for animation
const CourseCard = ({ course }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <motion.div
      ref={ref}
      className="course-card-main"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        ease: [0.25, 1, 0.5, 1],
      }}
    >
      <img
        src={course.image}
        alt={course.title}
        className="course-img-main"
      />
      <div className="course-content-main">
        <h3 className="course-title-main">{course.title}</h3>
        <p className="course-description-main">{course.description}</p>
        <div className="course-info-main">
          <span>⏱️ {course.duration}</span>
          <span>🧠 {course.level}</span>
          <span>💰 {course.price}</span>
        </div>
        <button className="enroll-btn">View Details</button>
      </div>
    </motion.div>
  );
};


// course component function
function MainCourses() {
    const { courses } = useContext(CourseContext);
  return (
    <div className="courses-container-main">
      {/* Hero Section */}
      <motion.div
        className="courses-hero-main"
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1>Explore Our In-Depth Courses</h1>
        <p>Gain real-world skills through practical, instructor-led training programs.</p>
        <p>Special Classes Available</p>
        <p>
          Best software training available in more than 50 courses. Internship for all trained
          graduates. Placement available for deserving graduates. We develop software according
          to your requirement. Provide Support, Consultancy. USA/CANADA/AUSTRALIA... We train
          abroad students according to their requirement to get a job.
        </p>
        <button className="browse-btn">Enroll Now</button>
      </motion.div>

      {/* Courses Grid */}
      <section className="courses-grid-main">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </section>
    </div>
  );
}

export default MainCourses;