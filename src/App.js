import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Mainscreen';
import Student from './components/Student';
import Corse from './components/Course';
import Instructor from './components/Instructor';
import Sections from './components/Sections';
import {BrowserRouter as Router,Route,Routes,Link, BrowserRouter } from 'react-router-dom';
import StudentForm from './components/StudentForm';
import SectionForm from './components/SectionForm';
import CourseForm from './components/CourseForm';
import InstructorForm from './components/InstructorForm';
import AllSections from './components/AllSections';
import AllCourses from './components/AllCourses';
import AllInstructor from './components/AllInstructor';
import AllStudents from './components/AllStudents';

function App() {
  return (<Router>
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<><Main></Main></>}></Route>
      <Route path='/student' element={<><Student></Student></>}></Route>
      <Route path='/instructor' element={<><Instructor></Instructor></>}></Route>
      <Route path='/course' element={<><Corse></Corse></>}></Route>
      <Route path='/section' element={<><Sections></Sections></>}></Route>
      <Route path='/student_form' element={<><StudentForm></StudentForm></>}></Route>
      <Route path='/instructor_form' element={<><InstructorForm></InstructorForm></>}></Route>
      <Route path='/course_form' element={<><CourseForm></CourseForm></>}></Route>
      <Route path='/section_form' element={<><SectionForm></SectionForm></>}></Route>
      <Route path='/all_sections' element={<AllSections/>}></Route>
      <Route path='/all_courses' element={<AllCourses/>}></Route>
      <Route path='/all_instructor' element={<AllInstructor/>}></Route>
      <Route path='/all_students' element={<AllStudents/>}></Route>


    </Routes>
    </>
    </Router>
  );
}

export default App;
