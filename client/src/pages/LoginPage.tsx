import AuthSection from "../component/authentication/AuthSection";
import BreadcrumbSection from "../component/breadcrumb/BreadcrumbSection";
import Layout5 from "../component/layout/Layout5";

const LoginPage = () => {
  return (
    <Layout5>
      <BreadcrumbSection title="Login" style="" />
      <AuthSection login={true} />
    </Layout5>
  );
};

export default LoginPage;
