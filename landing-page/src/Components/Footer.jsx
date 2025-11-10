import React from "react";
import '../css/footer.css';
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

function Footer() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <footer className="footer-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 80 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="footer">
          <div className="footer-grid">
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul>
                <li>About Us</li>
                <li>Courses</li>
                <li>Awards</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Services</h3>
              <ul>
                <li>Software Training</li>
                <li>Internship</li>
                <li>Software Development</li>
                <li>Job Placement</li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Features</h3>
              <ul>
                <li>Career Counselling</li>
                <li>Abroad S/W Prep.</li>
                <li>College Proj Support</li>
                <li>Non IT Grad Prep.</li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Contact Us</h3>
              <ul>
                <li>koteshwor (Balkumari), Kathmandu</li>
                <li>977-01-5100788</li>
                <li>9841306766 / 9801119050</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p><strong>Our Address:</strong><br />
              We are situated at the prime location of Kathmandu city, Koteshwor, Near Balkumari Bridge opposite to CCRC College, Uptown Building Second Floor. [KATHMANDU, NEPAL]
            </p>
            <p>
              Copyright © 2025 All rights reserved |
              Designed and Developed By: <strong>Coding Technology Pvt. Ltd.</strong>
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
