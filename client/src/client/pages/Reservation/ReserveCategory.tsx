import BreadcrumbSection from "../../component/breadcrumb/BreadcrumbSection";
import ProgramSection from "../../component/campus/ProgramSection2";
import Layout7 from "../../component/layout/Layout7";


  // create admin account
  const admin = {
    username: "admin",
    password: "admin",
    role: "admin",
    email: "??@gmail.com",
    phoneNumber: "1234567890"
  }
  try {
    const response = await fetch('http://localhost:8080/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(admin),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
  } catch (error) {
    console.error('Error during creating account:', error);
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
