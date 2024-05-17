import { useParams } from "react-router-dom";
import BreadcrumbSection from "../component/breadcrumb/BreadcrumbSection";
import ErrorSection from "../component/error/ErrorSection";
import EventDetailSection from "../component/event/EventDetailSection";
import Layout5 from "../component/layout/Layout5";
import { eventList } from "../data/Data";

const EventDetailsPage = () => {
  const { eventSlug } = useParams();
  const eventData = eventList.find((item) => item.slug === eventSlug);

  return (
    <Layout5>
      <BreadcrumbSection title="Event Details" style="" />
      {eventData ? (
        <EventDetailSection eventData={eventData} />
      ) : (
        <ErrorSection type="event" />
      )}
    </Layout5>
  );
};

export default EventDetailsPage;
