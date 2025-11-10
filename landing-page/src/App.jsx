import { useState } from 'react'
import{motion} from 'framer-motion'
import { UserLayout } from './Components/UserLayout'
import HomePage from './Components/Home'
import MainCourses from './Components/MainCourses'
import AboutUs from './Components/About'
import Blog from './Components/Blog'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { CourseProvider } from './Context/CourseContext'
import { BlogProvider } from './Context/BlogContext'
import './App.css'

// admin imports
import { Dashboard } from './Backend-front/Dashboard'
import { MangeCourse } from './Backend-front/Courses'
import { ManageBlogs } from './Backend-front/ManageBlogs'
import { AddCourse } from './Backend-front/AddCourse'
import { Layout } from './Backend-front/Layout'

function App() {

  return (
    <Router>
  <Routes>
    <Route path='/' element={
      <UserLayout/>
    }>
      <Route
        index
        element={
          <CourseProvider>
            <HomePage />
          </CourseProvider>
        }
      />
    <Route path="/home" element={
      <CourseProvider>
        <HomePage/>
        </CourseProvider>
      }/>
    <Route path="/course" element={
      <CourseProvider>
        <MainCourses />
        </CourseProvider>
      }/>
    
    <Route path="/about" element={<AboutUs />} />
    <Route path="/blog" element={
      <BlogProvider>
      <Blog/>
    </BlogProvider>}
     />
     </Route>
  
  

  {/* for admin */}
    <Route path='/admin' element={<Layout/>}>
      <Route path='home' element={<Dashboard/>}/>
      <Route path='course' element={<CourseProvider><MangeCourse/></CourseProvider>}/>
      <Route path='blogs' element={<BlogProvider><ManageBlogs/></BlogProvider>}/>
      <Route path='add-courses' element={<AddCourse/>}/>
    </Route>
  </Routes>
</Router>
  )
}

export default App
