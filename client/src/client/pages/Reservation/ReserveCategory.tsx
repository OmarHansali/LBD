import BreadcrumbSection from "../../component/breadcrumb/BreadcrumbSection";
import ProgramSection from "../../component/campus/ProgramSection2";
import Layout7 from "../../component/layout/Layout7";
import Axios from "../../../services/axios";


  // create admin account
  const admin = {
    username: "admin",
    password: "admin",
    role: "admin",
    email: "hansaliomar18@gmail.com",
    phoneNumber: "1234567890"
  }
  try {
    const response = await Axios.post('/user', admin);
    console.log('Reservation successful:', response.data);
  } catch (error) {
    console.error('Error during creating admin:', error);
  }

const Reservation = () => {
  return (

      
    <Layout7>
      <BreadcrumbSection title="Reservation" style="" />

      <ProgramSection />
    </Layout7>
  );
};

export default Reservation;
