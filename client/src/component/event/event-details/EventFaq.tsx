import { faqList } from "../../../data/Data";
import AccordionSection from "../../accordion/AccordionSection";

const EventFaq = () => {
  return (
    <div className="tl-event-details-faq tl-event-details-area">
      <h3 className="tl-event-details-area-title">FAQ about this event</h3>

      <AccordionSection array={faqList.slice(0, 3)} />
    </div>
  );
};

export default EventFaq;
