import React from "react";
import Slider from "react-slick";
import "../css/students.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const students = [
  {
    name: "Aayush Sharma",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    story: "I landed my first job as a Python developer within 3 months. This platform changed my life!",
  },
  {
    name: "Riya Thapa",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    story: "Learning MERN stack here helped me build a live project and get hired remotely.",
  },
  {
    name: "Suman Karki",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    story: "I went from zero knowledge to becoming a confident React developer. The mentors are amazing!",
  },
  {
    name: "Bimala Gurung",
    image: "https://randomuser.me/api/portraits/women/34.jpg",
    story: "The real-world projects and resume support helped me land an internship at a top tech firm.",
  },
  // Add more as needed
];

function Students() {
  const settings = {
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

  return (
    <div className="students-container">
      <h2 className="students-title">Success Stories</h2>
      <Slider {...settings}>
        {students.map((student, index) => (
          <div className="student-card" key={index}>
            <img src={student.image} alt={student.name} className="student-image" />
            <h3 className="student-name">{student.name}</h3>
            <p className="student-story">“{student.story}”</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Students;
