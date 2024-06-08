import AuthSection from "../component/authentication/AuthSection";
import BreadcrumbSection from "../component/breadcrumb/BreadcrumbSection";
import Layout7 from "../component/layout/Layout7";

const RegisterPage = () => {
  return (
    <Layout7>
      <BreadcrumbSection title="Register" style="" />
      <AuthSection login={false} />
    </Layout7>
  );
};

export default RegisterPage;
