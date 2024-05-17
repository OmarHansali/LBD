import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage1 from "./pages/HomePage1";
import HomePage2 from "./pages/HomePage2";
import HomePage3 from "./pages/HomePage3";
import HomePage4 from "./pages/HomePage4";
import HomePage5 from "./pages/HomePage5";
import HomePage6 from "./pages/HomePage6";
import HomePage7 from "./pages/HomePage7";
import HomePage8 from "./pages/HomePage8";
import HomePage9 from "./pages/HomePage9";
import HomePage10 from "./pages/HomePage10";
import HomePage11 from "./pages/HomePage11";
import HomePage12 from "./pages/HomePage12";
import HomePage13 from "./pages/HomePage13";
import HomePage14 from "./pages/HomePage14";
import AboutPage1 from "./pages/AboutPage1";
import AboutPage2 from "./pages/AboutPage2";
import AboutPage3 from "./pages/AboutPage3";
import AboutPage4 from "./pages/AboutPage4";
import AboutPage5 from "./pages/AboutPage5";
import AboutPage6 from "./pages/AboutPage6";
import AboutPage7 from "./pages/AboutPage7";
import AboutPage8 from "./pages/AboutPage8";
import BlogPage1 from "./pages/BlogPage1";
import BlogPage2 from "./pages/BlogPage2";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import BlogPage3 from "./pages/BlogPage3";
import BlogPage4 from "./pages/BlogPage4";
import BlogPage5 from "./pages/BlogPage5";
import BlogPage6 from "./pages/BlogPage6";
import BlogPage7 from "./pages/BlogPage7";
import ContactPage1 from "./pages/ContactPage1";
import ContactPage2 from "./pages/ContactPage2";
import CoursePage1 from "./pages/CoursePage1";
import CoursePage2 from "./pages/CoursePage2";
import CoursePage3 from "./pages/CoursePage3";
import CoursePage4 from "./pages/CoursePage4";
import EventPage1 from "./pages/EventPage1";
import EventPage2 from "./pages/EventPage2";
import EventPage3 from "./pages/EventPage3";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import StaffPage1 from "./pages/StaffPage1";
import StaffPage2 from "./pages/StaffPage2";
import StaffPage3 from "./pages/StaffPage3";
import StaffPage4 from "./pages/StaffPage4";
import StaffPage5 from "./pages/StaffPage5";
import StaffPage6 from "./pages/StaffPage6";
import NotFoundPage from "./pages/NotFoundPage";
import CourseDetailsPage from "./pages/CourseDetailsPage";
import EventDetailsPage from "./pages/EventDetailsPage";
import StaffDetailsPage from "./pages/StaffDetailsPage";
import RootLayout from "./component/layout/RootLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage1 />} />
          <Route path="/home-2" element={<HomePage2 />} />
          <Route path="/home-3" element={<HomePage3 />} />
          <Route path="/home-4" element={<HomePage4 />} />
          <Route path="/home-5" element={<HomePage5 />} />
          <Route path="/home-6" element={<HomePage6 />} />
          <Route path="/home-7" element={<HomePage7 />} />
          <Route path="/home-8" element={<HomePage8 />} />
          <Route path="/home-9" element={<HomePage9 />} />
          <Route path="/home-10" element={<HomePage10 />} />
          <Route path="/home-11" element={<HomePage11 />} />
          <Route path="/home-12" element={<HomePage12 />} />
          <Route path="/home-13" element={<HomePage13 />} />
          <Route path="/home-14" element={<HomePage14 />} />
          <Route path="/about" element={<AboutPage1 />} />
          <Route path="/about-2" element={<AboutPage2 />} />
          <Route path="/about-3" element={<AboutPage3 />} />
          <Route path="/about-4" element={<AboutPage4 />} />
          <Route path="/about-5" element={<AboutPage5 />} />
          <Route path="/about-6" element={<AboutPage6 />} />
          <Route path="/about-7" element={<AboutPage7 />} />
          <Route path="/about-8" element={<AboutPage8 />} />
          <Route path="/blog" element={<BlogPage1 />} />
          <Route path="/blog/:blogSlug" element={<BlogDetailsPage />} />
          <Route path="/blog-2" element={<BlogPage2 />} />
          <Route path="/blog-3" element={<BlogPage3 />} />
          <Route path="/blog-4" element={<BlogPage4 />} />
          <Route path="/blog-5" element={<BlogPage5 />} />
          <Route path="/blog-6" element={<BlogPage6 />} />
          <Route path="/blog-7" element={<BlogPage7 />} />
          <Route path="/contact" element={<ContactPage1 />} />
          <Route path="/contact-2" element={<ContactPage2 />} />
          <Route path="/course" element={<CoursePage1 />} />
          <Route path="/course/:courseSlug" element={<CourseDetailsPage />} />
          <Route path="/course-2" element={<CoursePage2 />} />
          <Route path="/course-3" element={<CoursePage3 />} />
          <Route path="/course-4" element={<CoursePage4 />} />
          <Route path="/event" element={<EventPage1 />} />
          <Route path="/event/:eventSlug" element={<EventDetailsPage />} />
          <Route path="/event-2" element={<EventPage2 />} />
          <Route path="/event-3" element={<EventPage3 />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/staff" element={<StaffPage1 />} />
          <Route path="/staff/:staffSlug" element={<StaffDetailsPage />} />
          <Route path="/staff-2" element={<StaffPage2 />} />
          <Route path="/staff-3" element={<StaffPage3 />} />
          <Route path="/staff-4" element={<StaffPage4 />} />
          <Route path="/staff-5" element={<StaffPage5 />} />
          <Route path="/staff-6" element={<StaffPage6 />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
