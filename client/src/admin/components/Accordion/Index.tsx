import React, { useEffect, useState } from "react";

interface AccordionProps {
  items? : any,
  heading? : string,
  initialOpenIndex?: number,
  borderClass? : string,
  buttonClass? : string,
  activeClass? : string,
  isSpace?: boolean,
}

const Accordion = ({
  items,
  heading,
  initialOpenIndex,
  borderClass,
  buttonClass,
  activeClass,
  isSpace,
}: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    // Set the initial open accordion item when the component mounts
    if (initialOpenIndex !== undefined && initialOpenIndex !== null) {
      setOpenIndex(initialOpenIndex);
    }
  }, [initialOpenIndex]);

  return (
    <React.Fragment>
      <div className="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
        <h2 className="mb-4 text-base font-semibold text-black first-letter:capitalize dark:text-white/80">
          {heading}
        </h2>
        <div className={ isSpace === false ? "" : "space-y-2"}>
          {items.map((item: any, index: number) => (
            <div key={index} className={borderClass}>
              <button
                type="button"
                className={`${buttonClass} ${
                  openIndex === index ? activeClass : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                {item.icon && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="size-5 ltr:mr-2 rtl:ml-2 shrink-0"
                  >
                    {item.icon}
                  </svg>
                )}
                {item.title}
                <div
                  className={`ltr:ml-auto rtl:mr-auto ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  style={{ marginLeft: "auto" }}
                >
                  {item.arrow && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="size-5"
                    >
                      {item.arrow}
                    </svg>
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="p-4 space-y-2 border-t text-muted border-black/10 dark:border-darkborder dark:text-darkmuted">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Accordion;
