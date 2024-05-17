import BreadcrumbSection from "../component/breadcrumb/BreadcrumbSection";
import EventMainSection from "../component/event/EventMainSection";
import Layout3 from "../component/layout/Layout3";

const EventPage1 = () => {
  return (
    <Layout3>
      <BreadcrumbSection title="Event One" style="tl-breadcrumb-3" />
      <EventMainSection />
    </Layout3>
  );
};

export default EventPage1;
