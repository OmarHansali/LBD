import BreadcrumbSection from "../../component/breadcrumb/BreadcrumbSection";
import Layout7 from "../../component/layout/Layout7";
import Stepper from "../../component/Stepper/Stepper";

const ReserverCat = () => {

  return (
    <Layout7>
      <BreadcrumbSection title="Reserver" style="" />
      <div className=" items-center scale-125 mt-150">
        <Stepper />
      </div>
    </Layout7>
  );
};

export default ReserverCat;
