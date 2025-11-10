🎓 Coding Tech Institute Website

A full-stack web application for a coding institute, built using React (Vite) for the frontend and Express.js + MongoDB for the backend.
This platform allows students to explore courses, read blogs, and learn more about the institute, while administrators can manage courses, blogs, and dashboard data.

Features
User Side

Responsive landing page

View available courses

Read institute blogs

Learn about the institute (About Us page)

Smooth page transitions using Framer Motion

Admin Side

Dashboard overview

Manage courses (Add, Edit, Delete)

Manage blogs

Secure admin layout with routes

Tech Stack
Frontend

React (Vite)

React Router DOM

Framer Motion

Context API

Axios

Backend

Node.js / Express.js

MongoDB (Mongoose)

CORS

📁 Folder Structure
landingPage/
├── backend/
│   ├── controllers/
│   │   ├── blogController.js
│   │   └── courseController.js
│   ├── models/
│   │   ├── Blog.js
│   │   └── Course.js
│   ├── routes/
│   │   ├── blogRoutes.js
│   │   └── courseRoutes.js
│   ├── .env
│   ├── package.json
│   ├── server.js
│   
│
└── landing-page/
    ├── public/
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── src/
    │   ├── App.jsx
    │   ├── App.css
    │   ├── main.jsx
    │   │
    │   ├── Components/
    │   │   ├── Home.jsx
    │   │   ├── About.jsx
    │   │   ├── Blog.jsx
    │   │   ├── MainCourses.jsx
    │   │   ├── UserLayout.jsx
    │   │   └── Navbar.jsx
    │   │
    │   ├── Backend-front/
    │   │   ├── Layout.jsx
    │   │   ├── Dashboard.jsx
    │   │   ├── Courses.jsx
    │   │   ├── ManageBlogs.jsx
    │   │   └── AddCourse.jsx
    │   │
    │   ├── Context/
    │   │   ├── BlogContext.jsx
    │   │   └── CourseContext.jsx
    │   │
    │   └── assets/
    │       ├── logo.png
    │       └── hero.jpg
    │
    └── README.md

⚙️ Setup Instructions
1. Clone the Repository
git clone https://github.com/manish-tech-hub/CodingTechPlus.git
cd landingPage

2. Install Dependencies
Frontend:
cd landing-page
npm install

Backend:
cd ../backend
npm install

3. Environment Variables

Create a .env file inside the backend folder and add:

PORT=5000


4. Run the Project
Run Backend:
cd backend
npm run dev

Run Frontend:
cd landing-page
npm run dev


The app will run on:

Frontend: http://localhost:5173

Backend: http://localhost:5000

Routing Summary
User Routes
Path	Description
/	Landing Page
/home	Home Page
/course	Courses
/about	About Us
/blog	Blog Page
Admin Routes
Path	Description
/admin/home	Admin Dashboard
/admin/course	Manage Courses
/admin/blogs	Manage Blogs
/admin/add-courses	Add New Course

Author

Manish Pasman
Aspiring Full Stack Developer
