import AuthSection from "../component/authentication/AuthSection";
import BreadcrumbSection from "../component/breadcrumb/BreadcrumbSection";
import Layout5 from "../component/layout/Layout5";

const RegisterPage = () => {
  return (
    <Layout5>
      <BreadcrumbSection title="Register" style="" />
      <AuthSection login={false} />
    </Layout5>
  );
};

export default RegisterPage;
