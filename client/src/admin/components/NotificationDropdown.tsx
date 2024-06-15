/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { iContactProps } from "../constants/Types";
import { countData } from "../../services/utils";
import { Spinner } from "./icons/SVGIcons";
import profileContact from "../../../public/assets/images/profile-user.png"
import Axios from "../../services/axios";

interface iProps {
  contacts: iContactProps[]
  isLoading?: boolean,
}

const NotificationDropdown = ({ contacts, isLoading }: iProps) => {

  const navigate = useNavigate()

  // dropdown
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isNotSeen, setIsNotSeen] = useState(false) 
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleOpen = useCallback(() => {
    setDropdownOpen((previousState) => !previousState);
  }, []);

  useEffect(()=>{
    setIsNotSeen(contacts.length > 0)
  },[contacts])

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      setTimeout(() => {
        setIsNotSeen(false)
      }, 100)

      // Toggle all notifications as seen
      const toggleAllNotification = async () => {
        await Axios.patch(`/contact`)
      }

      toggleAllNotification()


      //----------------------------------------

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

  const handleNavigate = (contactId: number) => {
    navigate("/admin/contacts", {
      state: { contactId: contactId }
    })
  }


  return (
    <>
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
          {/* notification */}
          {
            isNotSeen &&
            <span className="absolute size-3 border animate-bounce border-white rounded-full -top-px ltr:right-px rtl:left-px bg-purple"></span>
          }
        </button>
        {isDropdownOpen && (
          <>
            {/* Dropdown content */}
            <div className="noti-area -ml-36 mt-2">
              <h4 className="text-black dark:text-white/80 px-2 py-2.5 border-b border-black/10 flex items-center gap-2">
                Notification{" "}
                <span className="inline-block bg-purple/10 text-purple text-[10px] p-1 leading-none rounded">
                  {contacts ? countData(contacts) : (<Spinner />)}
                </span>
              </h4>


              <ul className="overflow-y-auto max-h-56 ">
                {
                  !isLoading ? (
                    contacts.map((item, index) => (
                      <li 
                        onClick={()=>handleNavigate(item.id)}
                        key={index}>
                        <div
                          className="flex gap-2 cursor-pointer group"
                        // style={{ display: showElement[index] ? "" : "none" }}
                        >
                          <div className="flex-none overflow-hidden rounded-full h-9 w-9">
                            <img
                              src={profileContact}
                              className="object-cover"
                              alt="avatar"
                            />
                          </div>
                          <div className="relative flex-1">
                            <h1 className="text-gray-500 font-semibold">{item.name}</h1>
                            <p className="whitespace-nowrap overflow-hidden text-ellipsis italic w-[185px] text-gray-700 text-sm dark:text-white ltr:pr-4 rtl:pl-4">
                              {item.object}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))
                  ) : (<Spinner />)
                }
              </ul>
              <div className="px-2 py-2.5 border-t border-black/10 dark:border-darkborder">
                <Link
                  to="/admin/contacts"
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
    </>
  );
};

export default NotificationDropdown;
