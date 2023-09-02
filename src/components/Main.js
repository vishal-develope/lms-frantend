import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
// import About from "./About";
import CourseDetail from "./CourseDetail";
import Login from "./user/Login";
import Register from "./user/Register";
import Dashboard from "./user/Dashboard";
import Mycourses from "./user/Mycourses";

import { Routes, Route } from "react-router-dom";
import FavoriteCourse from "./user/FavoriteCourse";
import RecommendedCourse from "./user/RecommendedCourse";
import ProfileSettings from "./user/ProfileSettings";
import ChangePassword from "./user/ChangePassword";

import TeacherProfileSettings from "./teacher/TeacherProfileSettings";
import TeacherLogin from "./teacher/TeacherLogin";
import TeacherRegister from "./teacher/TeacherRegister";
import TeacherDashboard from "./teacher/TeacherDashboard";
import AddCourses from "./teacher/AddCourses";
import TeacherMycourses from "./teacher/TeacherMycourses";
import TeacherChangepassword from "./teacher/TeacherChangePassword";
import MyUser from "./teacher/MyUser";
import TeacherDetail from "./TeacherDetail";

function Main(){
    return(
        <div className="container-fluid">
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                {/* <Route path="/about" element={<About/>}/> */}
                <Route path="/detail/:course_id" element={<CourseDetail/>} />
                <Route path="/user-login" element={<Login/>} />
                <Route path="/user-register" element={<Register/>} />
                <Route path="/user-dashboard" element={<Dashboard/>} />
                <Route path="/user-mycourses" element={<Mycourses/>} />
                <Route path="/favorite-course" element={<FavoriteCourse/>} />
                <Route path="/recommended-course" element={<RecommendedCourse/>} />
                <Route path="/profile-settings" element={<ProfileSettings/>} />
                <Route path="/change-password" element={<ChangePassword/>} />
                <Route path="/teacher-login" element={<TeacherLogin/>} />
                <Route path="/teacher-register" element={<TeacherRegister/>} />
                <Route path="/teacher-dashboard" element={<TeacherDashboard/>} />
                <Route path="/teacher-profile-settings" element={<TeacherProfileSettings/>} />
                <Route path="/teacher-mycourses" element={<TeacherMycourses/>} />
                <Route path="/teacher-change-password" element={<TeacherChangepassword/>}/>
                <Route path="/add-courses" element={<AddCourses/>}/>
                <Route path="/my-user" element={<MyUser/>}/>
                <Route path="/teacher-detail" element={<TeacherDetail/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default Main