import React from "react";
import { motion } from "framer-motion";
import teacher from "../assets/image/teacher.png";
import "../css/about.css";

const team = [
  { name: "Ravi Sharma",edu:'B.E.(Trivubhan University)',title: "Lead Instructor", image: teacher },
  { name: "Anita Basnet",edu:'BCA(Pokhara University)', title: "Data Science Mentor", image: teacher },
  { name: "Suresh Karki",edu:'BSC CSIT(Trivubhan University)',title: "Full Stack Developer", image: teacher },
  { name: "Ravi Sharma",edu:'MIT(Delhi University)',title: "Lead Instructor", image: teacher },
  { name: "Anita Basnet",edu:'M.E.(Trivubhan University)',title: "Data Science Mentor", image: teacher },
  
];

const testimonials = [
  { name: "Aayush", quote: "This institute changed my life!" },
  { name: "Ritika", quote: "Best hands-on training I've ever had." },
  { name: "Bibek", quote: "Learned more in 3 months here than 2 years in college." },
  { name: "Ritika", quote: "Best hands-on training I've ever had." },
  { name: "Bibek", quote: "Learned more in 3 months here than 2 years in college." },
];

function AboutUs() {
  return (
    <div className="about-container">

      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Us</h1>
        <p>Empowering future coders with real-world tech skills</p>
      </section>

      {/* Who We Are */}
      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          We are a modern coding institute based in Nepal, committed to delivering
          quality education and practical experience in software development,
          networking, and digital technologies. Founded in 2022, our mission is to
          bridge the gap between academia and industry.
          We are situated at the prime location of Kathmandu city, Near Balkumari Bridge opposite to CCRC College, 
          Uptown Building Second Floor. We are here to solve the real student problem mainly those are raise in IT career. 
          It provides quality in way that Software Company uses the knowledge while developing the software. We provide Best 
          IT courses in Nepal like  Software training, Internship & Development to the student so, that they can have the 
          knowledge of full SDLC. After completion of training student will fell like a 2-3 years experienced developer. 
          We are providing Leadership skill, lifetime support to student. updated
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="about-section choose-us">
        <h2>Why Choose Us</h2>
        <ul>
          <li>👨‍🏫 Industry Experienced Mentors</li>
          <li>🛠️ Project-Based Learning</li>
          <li>🎯 Job-Oriented Courses</li>
          <li>📚 Lifetime Access to Materials</li>
          <li>👨‍🏫 Industry Experienced Mentors</li>
          <li>🛠️ Project-Based Learning</li>
          <li>🎯 Job-Oriented Courses</li>
          <li>📚 Lifetime Access to Materials</li>
        </ul>
      </section>

      {/* Our Team */}
      <section className="about-section team">
        <h2>Our Instructors</h2>
        <div className="team-grid">
          {team.map((member, index) => (
            <motion.div
              className="team-member"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img src={member.image} alt={member.name} />
              <h4>{member.name}</h4>
              <p>{member.title}</p>
              <strong>{member.edu}</strong>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="about-section stats">
        <h2>Our Achievements</h2>
        <div className="stats-grid">
          <motion.div whileInView={{ scale: 1.1 }} className="stat">
            <h3>+2000</h3>
            <p>Students Trained</p>
          </motion.div>
          <motion.div whileInView={{ scale: 1.1 }} className="stat">
            <h3>+50</h3>
            <p>Courses Offered</p>
          </motion.div>
          <motion.div whileInView={{ scale: 1.1 }} className="stat">
            <h3>+20</h3>
            <p>Industry Partnerships</p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="about-section testimonials">
        <h2>What Our Students Say</h2>
        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <p>"{t.quote}"</p>
              <h4>- {t.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-section cta">
        <h2>Join Our Coding Community Today</h2>
        <button className="cta-btn">Get Started</button>
      </section>

    </div>
  );
}

export default AboutUs;