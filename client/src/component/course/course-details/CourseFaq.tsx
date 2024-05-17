import { faqList } from "../../../data/Data";
import AccordionSection from "../../accordion/AccordionSection";

const CourseFaq = () => {
  return (
    <div className="tl-event-details-faq tl-event-details-area">
      <h3 className="tl-event-details-area-title">
        Things you'll get to learn from this course
      </h3>

      <AccordionSection array={faqList} />
    </div>
  );
};

export default CourseFaq;
