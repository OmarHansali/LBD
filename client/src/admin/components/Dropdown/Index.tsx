import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

interface DropdownProps {
  classname: string;
  btnName?: any;
  isIcon?: boolean;
  isSvg?: boolean;
  svgName?: string;
  dropdownItems: any;
  linkClass?: any;
  linkSvg?: any;
  linksvgpath?: any
}

const Dropdown = ({
  classname,
  btnName,
  isIcon,
  isSvg,
  svgName,
  dropdownItems,
  linkClass,
  linkSvg,
  linksvgpath
}: DropdownProps) => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleOpen = useCallback(() => {
    setDropdown((previousState) => !previousState);
  }, []);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        if (dropdown && toggleOpen) {
          toggleOpen();
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [dropdown, toggleOpen]);


  return (
    <React.Fragment>
      <div className="dropdown" x-data="{ dropdown }" ref={dropdownRef}>
        <button
          type="button"
          className={classname}
          onClick={(e: any) => {
            e.preventDefault();
            toggleOpen();
          }}
          onKeyDown={(e) => e.key === "Escape" && setDropdown(false)}
        >
          {isIcon === true ? (
            isSvg ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-4 h-4 mx-auto"
              >
                <path d={svgName} fill="currentColor"></path>
              </svg>
            ) : (
              <>
                {btnName}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 ltr:ml-1 rtl:mr-1"
                >
                  <path
                    d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"
                    fill="currentColor"
                  />
                </svg>
              </>
            )
          ) : (
            <>
              <span className="px-2.5 leading-[2.8]">{btnName}</span>
              <p
                className="w-10 h-10 py-3 align-middle bg-white rounded-r bg-opacity-20"
                onClick={(e: any) => {
                  e.preventDefault();
                  toggleOpen();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 mx-auto"
                >
                  <path
                    d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </p>
            </>
          )}
        </button>

        {dropdown && (
          <ul
            className="ltr:right-0 rtl:left-0 whitespace-nowrap"
            onClick={() => setDropdown(false)}
            // style={{zIndex: "1"}}
          >
            {(dropdownItems || []).map((item : any, index : any) => (
              <li key={index}>
                <Link to="#">
                  {linkSvg ? <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                  >
                    <path
                      d={linksvgpath[index]}
                      fill="currentColor"
                    ></path>
                  </svg> : ""}
                  {item}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </React.Fragment>
  );
};

export default Dropdown;
