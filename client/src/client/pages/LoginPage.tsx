import AuthSection from "../component/authentication/AuthSection";
import BreadcrumbSection from "../component/breadcrumb/BreadcrumbSection";
import Layout7 from "../component/layout/Layout7";

const LoginPage = () => {
  return (
    <Layout7>
      <BreadcrumbSection title="Login" style="" />
      <AuthSection login={true} />
    </Layout7>
  );
};

export default LoginPage;
