/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useRef, useState } from "react";
import user from "/assets/images/user.png";
import { Link } from "react-router-dom";
import loggedUser from "../../services/LoggedUser";

const ProfileDropdown = () => {
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

  const { role, username } = loggedUser

  return (
    <>
      <div className="inline-flex items-center rounded-full text-xs justify-center px-1.5 py-0.5 bg-danger text-white capitalize">{role}</div>
      <div className="profile" ref={dropdownRef}>
        <button
          type="button"
          className="flex items-center gap-1.5 xl:gap-0 dark:text-white/80"
          onClick={(e: any) => {
            e.preventDefault();
            toggleOpen();
          }}
          onKeyDown={(e) => e.key === "Escape" && setDropdownOpen(false)}
        >
          <img
            className="rounded-full h-7 w-7 ltr:xl:mr-2 rtl:xl:ml-2"
            src={user}
            alt="Header Avatar"
          />
          <span className="hidden fw-medium xl:block font-thin dark:text-white/80">
            {username}
          </span>

          <svg
            className="w-4 h-4"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.70711 11.2929C6.51957 11.1054 6.26522 11 6 11C5.73478 11 5.48043 11.1054 5.29289 11.2929C5.10536 11.4804 5 11.7348 5 12C5 12.2652 5.10536 12.5196 5.29289 12.7071L15.2929 22.7071C15.6834 23.0976 16.3166 23.0976 16.7071 22.7071L26.7071 12.7071C26.8946 12.5196 27 12.2652 27 12C27 11.7348 26.8946 11.4804 26.7071 11.2929C26.5196 11.1054 26.2652 11 26 11C25.7348 11 25.4804 11.1054 25.2929 11.2929L16 20.5858L6.70711 11.2929Z"
              fill="currentColor"
            />
          </svg>
        </button>

        <ul
          className={`dropdown -ml-14 mt-2 ${isDropdownOpen ? "visible" : "hidden"}`}
        >
          <li>
            <Link to="/admin/profile" className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-4 h-4"
              >
                <path
                  d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                  fill="currentColor"
                ></path>
              </svg>
              Profile
            </Link>
          </li>
          <li>
            <Link to="/admin/edit-profile" className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-4 h-4"
              >
                <path
                  d="M6.17071 18C6.58254 16.8348 7.69378 16 9 16C10.3062 16 11.4175 16.8348 11.8293 18H22V20H11.8293C11.4175 21.1652 10.3062 22 9 22C7.69378 22 6.58254 21.1652 6.17071 20H2V18H6.17071ZM12.1707 11C12.5825 9.83481 13.6938 9 15 9C16.3062 9 17.4175 9.83481 17.8293 11H22V13H17.8293C17.4175 14.1652 16.3062 15 15 15C13.6938 15 12.5825 14.1652 12.1707 13H2V11H12.1707ZM6.17071 4C6.58254 2.83481 7.69378 2 9 2C10.3062 2 11.4175 2.83481 11.8293 4H22V6H11.8293C11.4175 7.16519 10.3062 8 9 8C7.69378 8 6.58254 7.16519 6.17071 6H2V4H6.17071ZM9 6C9.55228 6 10 5.55228 10 5C10 4.44772 9.55228 4 9 4C8.44772 4 8 4.44772 8 5C8 5.55228 8.44772 6 9 6ZM15 13C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11C14.4477 11 14 11.4477 14 12C14 12.5523 14.4477 13 15 13ZM9 20C9.55228 20 10 19.5523 10 19C10 18.4477 9.55228 18 9 18C8.44772 18 8 18.4477 8 19C8 19.5523 8.44772 20 9 20Z"
                  fill="currentColor"
                ></path>
              </svg>
              Settings
            </Link>
          </li>
          <li>
            <Link to="/admin/contacts" className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-4 h-4"
              >
                <path
                  d="M5.45455 15L1 18.5V3C1 2.44772 1.44772 2 2 2H17C17.5523 2 18 2.44772 18 3V15H5.45455ZM4.76282 13H16V4H3V14.3851L4.76282 13ZM8 17H18.2372L20 18.3851V8H21C21.5523 8 22 8.44772 22 9V22.5L17.5455 19H9C8.44772 19 8 18.5523 8 18V17Z"
                  fill="currentColor"
                ></path>
              </svg>
              Messages
            </Link>
          </li>
          <li className="block h-px my-1 dark:bg-darkborder"></li>
          <li>
            <Link
              to="/auth-logout"
              className="flex items-center gap-2 dark:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-4 h-4"
              >
                <path
                  d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.2713 2 18.1757 3.57078 20.0002 5.99923L17.2909 5.99931C15.8807 4.75499 14.0285 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C14.029 20 15.8816 19.2446 17.2919 17.9998L20.0009 17.9998C18.1765 20.4288 15.2717 22 12 22ZM19 16V13H11V11H19V8L24 12L19 16Z"
                  fill="currentColor"
                ></path>
              </svg>
              Sign Out
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProfileDropdown;
