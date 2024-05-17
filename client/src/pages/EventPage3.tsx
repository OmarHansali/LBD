import BreadcrumbSection from "../component/breadcrumb/BreadcrumbSection";
import EventMainSection3 from "../component/event/EventMainSection3";
import Layout4 from "../component/layout/Layout4";

const EventPage3 = () => {
  return (
    <Layout4>
      <BreadcrumbSection title="Event Three" style="tl-breadcrumb-4" />
      <EventMainSection3 />
    </Layout4>
  );
};

export default EventPage3;
