/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import avatar1 from "/assets/images/avatar-1.png";
import avatar4 from "/assets/images/avatar-4.png";
import avatar13 from "/assets/images/avatar-13.png";
import avatar19 from "/assets/images/avatar-19.png";
import avatar24 from "/assets/images/avatar-24.png";

const jsonData = [
  {
    avatar: avatar1,
    action: "Edited the details of Project",
    time: "5m ago",
  },
  {
    avatar: avatar4,
    action: "Released a new version",
    time: "5m ago",
  },
  {
    avatar: avatar13,
    action: "Submitted a bug",
    time: "5m ago",
  },
  {
    avatar: avatar19,
    action: "Modified A data in Page",
    time: "5m ago",
  },
  {
    avatar: avatar24,
    action: "Modified A data in Page",
    time: "5m ago",
  },
  {
    avatar: avatar1,
    action: "Edited the details of Project",
    time: "5m ago",
  },
  {
    avatar: avatar4,
    action: "Released a new version",
    time: "5m ago",
  },
  {
    avatar: avatar13,
    action: "Submitted a bug",
    time: "5m ago",
  },
];

const NotificationDropdown = () => {

  // dropdown
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleOpen = useCallback(() => {
    setDropdownOpen((previousState) => !previousState);
  }, []);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        if (isDropdownOpen && toggleOpen) {
          toggleOpen();
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };  
  }, [isDropdownOpen, toggleOpen]);

// 
  const [showElement, setShowElement] = useState(Array(jsonData.length).fill(true));
  
  const toggleVisibility = (index : any) => {
    const updatedVisibility = [...showElement];
    updatedVisibility[index] = !updatedVisibility[index];
    setShowElement(updatedVisibility);
  };

  return (
    <React.Fragment>
      <div className="relative inline-block h-5 notification" ref={dropdownRef}>
        <button
          type="button"
          className="relative dark:text-white/80"
          onClick={(e: any) => {
            e.preventDefault();
            toggleOpen();
          }}
          onKeyDown={(e) => e.key === "Escape" && setDropdownOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-5 h-5 mx-auto"
          >
            <path
              d="M5 18H19V11.0314C19 7.14806 15.866 4 12 4C8.13401 4 5 7.14806 5 11.0314V18ZM12 2C16.9706 2 21 6.04348 21 11.0314V20H3V11.0314C3 6.04348 7.02944 2 12 2ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z"
              fill="currentColor"
            ></path>
          </svg>
          <span className="absolute w-2 h-2 border border-white rounded-full -top-px ltr:right-px rtl:left-px bg-purple"></span>
        </button>
        {isDropdownOpen && (
          <>
            {/* Dropdown content */}
            <div className="noti-area -ml-36 mt-2">
              <h4 className="text-black dark:text-white/80 px-2 py-2.5 border-b border-black/10 flex items-center gap-2">
                Notification{" "}
                <span className="inline-block bg-purple/10 text-purple text-[10px] p-1 leading-none rounded">
                  32
                </span>
              </h4>
              <ul className="overflow-y-auto max-h-56 ">
                {jsonData.map((item, index) => (
                  <li key={index}>
                    <div
                      className="flex gap-2 cursor-pointer group"
                      style={{ display: showElement[index] ? "" : "none" }}
                    >
                      <div className="flex-none overflow-hidden rounded-full h-9 w-9">
                        <img
                          src={item.avatar}
                          className="object-cover"
                          alt="avatar"
                        />
                      </div>
                      <div className="relative flex-1">
                        <p className="whitespace-nowrap overflow-hidden text-ellipsis w-[185px] text-black dark:text-white ltr:pr-4 rtl:pl-4">
                          {item.action}
                        </p>
                        <p className="text-xs text-black/40 dark:text-darkmuted">
                          {item.time}
                        </p>
                        <button
                          type="button"
                          onClick={() => toggleVisibility(index)}
                          className="absolute hidden transition-all duration-300 rotate-0 ltr:right-0 rtl:left-0 top-1 dark:text-white/80 group-hover:block hover:opacity-80 hover:rotate-180"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="w-3.5 h-3.5"
                          >
                            <path
                              d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="px-2 py-2.5 border-t border-black/10 dark:border-darkborder">
                <Link
                  to="#"
                  className="text-black duration-300 dark:text-white dark:hover:text-purple hover:text-purple"
                >
                  Read More{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-3.5 h-3.5 inline-block relative -top-[1px] rtl:rotate-180"
                  >
                    <path
                      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </React.Fragment>
  );
};

export default NotificationDropdown;
