import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage4 from "./client/pages/HomePage4";

import AboutPage4 from "./client/pages/AboutPage4";

import ContactPage1 from "./client/pages/ContactPage1";

import LoginPage from "./client/pages/LoginPage";

import ReservationPage from "./client/pages/Reservation";

import ResourcePage from "./client/pages/ResourcePage";

import NotFoundPage from "./client/pages/NotFoundPage";
import RootLayout from "./client/component/layout/RootLayout";

// --------------Admin Components------------------------
import AdminLayout from "./admin/layout/AdminLayout";
import AdminDashboard from "./admin/pages/Dashboard";
import AdminReservations from "./admin/pages/Reservations";
import AdminContacts from "./admin/pages/Contacts";
import ManageUsers from "./admin/pages/Users";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage4 />} />

          <Route path="/about" element={<AboutPage4 />} />

          <Route path="/contact" element={<ContactPage1 />} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/reservation" element={<ReservationPage />} />

          <Route path="/resource" element={<ResourcePage />} />

          <Route path="*" element={<NotFoundPage />} />
          //----------------------Admin section-----------------------------

          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path='dashboard' element={<AdminDashboard />} />
            <Route path='reservations' element={<AdminReservations />} />
            <Route path='users' element={<ManageUsers />} />
            <Route path='contacts' element={<AdminContacts />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
