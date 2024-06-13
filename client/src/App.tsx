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
import CreateReservation from "./admin/pages/Reservation/CreateReservation";
import EditReservation from "./admin/pages/Reservation/EditReservation";

// rooms

import AdminSalles from "./admin/pages/Rooms/Salle/Salles";
import CreateSalle from "./admin/pages/Rooms/Salle/CreateSalle";
import EditSalle from "./admin/pages/Rooms/Salle/EditSalle";


import Settings from "./admin/components/Settings";

import AdminMaterials from "./admin/pages/Materials/Materials";
import CreateMaterial from "./admin/pages/Materials/CreateMaterial";
import EditMaterial from "./admin/pages/Materials/EditMaterial";
import Boxes from "./admin/pages/Rooms/Box/Boxes";
import CreateBox from "./admin/pages/Rooms/Box/CreateBox";
import EditBox from "./admin/pages/Rooms/Box/EditBox";
import Fablabs from "./admin/pages/Rooms/Fablab/Fablabs";
import CreateFablab from "./admin/pages/Rooms/Fablab/CreateFablab";
import EditFablab from "./admin/pages/Rooms/Fablab/EditFablab";

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
          <Route path="admin"  element={<AdminLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path='dashboard' element={<AdminDashboard />} />

            <Route path='reservations' element={<AdminReservations />} />
            <Route path='creer-reservation' element={<CreateReservation />} />
            <Route path='modifier-reservation' element={<EditReservation />} />

            <Route path='materiaux' element={<AdminMaterials />} />
            <Route path='creer-materielle' element={<CreateMaterial />} />
            <Route path='modifier-materielle' element={<EditMaterial />} />

            {/* --------------rooms------------------------- */}
            <Route path='salles' element={<AdminSalles />} />
            <Route path='creer-salle' element={<CreateSalle />} />
            <Route path='modifier-salle' element={<EditSalle />} />


            <Route path='boxes' element={<Boxes />} />
            <Route path='creer-box' element={<CreateBox />} />
            <Route path='modifier-box' element={<EditBox />} />


            <Route path='fablabs' element={<Fablabs />} />
            <Route path='creer-fablab' element={<CreateFablab />} />
            <Route path='modifier-fablab' element={<EditFablab />} />

            {/* ------------------------------------------------ */}

            <Route path='utilisateurs' element={<ManageUsers />} />
            <Route path='creer-utilisateur' element={<EditInfo />} />
            <Route path='modifier-utilisateur' element={<EditInfo />} />

            <Route path='profile' element={<Profile />} />
            <Route path='modifier-profile' element={<Settings />} />

            <Route path='contacts' element={<AdminContacts />} />
          </Route>

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
