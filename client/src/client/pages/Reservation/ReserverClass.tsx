import { Navigate } from "react-router-dom";
import BreadcrumbSection from "../../component/breadcrumb/BreadcrumbSection";
import Layout7 from "../../component/layout/Layout7";
import Stepper from "../../component/Stepper/Stepper";

const ReserverCat = () => {

  const isLoggedIn = localStorage.getItem('user')

  return (
    <Layout7>
      <BreadcrumbSection title="Reserver" style="" />
      <div className=" items-center scale-125 mt-150">
        {
          isLoggedIn ? (<Stepper />) : (<Navigate to={"/login"} replace/>)
        }
        
      </div>
    </Layout7>
  );
};

export default ReserverCat;
