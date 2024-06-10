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
import AdminReservations from "./admin/pages/Reservation/Reservations";
import AdminContacts from "./admin/pages/Contacts";
import ManageUsers from "./admin/pages/User/Users";
import Profile from "./admin/pages/Profile";
import EditInfo from "./admin/pages/User/EditUser";
import AdminSalles from "./admin/pages/Salle/Salles";
import CreateReservation from "./admin/pages/Reservation/CreateReservation";
import EditReservation from "./admin/pages/Reservation/EditReservation";
import CreateSalle from "./admin/pages/Salle/CreateSalle";
import EditSalle from "./admin/pages/Salle/EditSalle";
import Settings from "./admin/components/Settings";

import AdminMaterials from "./admin/pages/Materials/Materials";
import CreateMaterial from "./admin/pages/Materials/CreateMaterial";
import EditMaterial from "./admin/pages/Materials/EditMaterial";

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
            <Route path='create-reservation' element={<CreateReservation/>} />
            <Route path='edit-reservation' element={<EditReservation/>} />

            <Route path='materials' element={<AdminMaterials />} />
            <Route path='create-material' element={<CreateMaterial/>} />
            <Route path='edit-material' element={<EditMaterial/>} />


            <Route path='salles' element={<AdminSalles />} />
            <Route path='create-salle' element={<CreateSalle/>} />
            <Route path='edit-salle' element={<EditSalle/>} />

            <Route path='users' element={<ManageUsers />} />
            <Route path='create-user' element={<EditInfo/>} />
            <Route path='edit-user' element={<EditInfo/>} />

            <Route path='profile' element={<Profile />} />
            <Route path='edit-profile' element={<Settings />} />

            <Route path='contacts' element={<AdminContacts />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
