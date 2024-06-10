/* eslint-disable @typescript-eslint/no-explicit-any */

import { iContactProps } from "../../constants/Types"



const MainContact = ({ data }: { data: iContactProps }) => {

  const { username, profile, email, messages } = data
  return (
    <>
      <div
        className={`flex-1 overflow-y-auto absolute top-0 left-0 bg-white dark:bg-darklight dark:border-darkborder md:static h-full`}
      >
        <div className="flex items-center gap-3 px-4 py-2 border-b bg-light/20 border-black/10 dark:border-darkborder dark:bg-white/5">
          <p className="font-semibold dark:text-white/80">
            Email Message
          </p>
        </div>
        <div className="flex flex-wrap items-start justify-between gap-3 px-4 py-2 border-b bg-light/20 border-black/10 dark:border-darkborder dark:bg-white/5">
          <div className="flex items-start flex-1 gap-2 p-1">

            {/* Logo */}
            <img
              className="flex-none object-cover overflow-hidden rounded-full w-9 h-9"
              src={profile}
              alt=""
            />
            {/* Logo */}
            <div className="flex-1 ltr:text-left rtl:text-right">
              <p className="dark:text-white">
                {username} <span className="text-muted">|</span>{" "}
                {email}
              </p>
              {/* <p className="text-xs text-muted dark:text-darkmuted">
                {createdAt}
              </p> */}
            </div>
          </div>
        </div>
        <div className="overflow-y-scroll">
          {
            messages.map((message, index) => (
              <div
                key={index}
                className=" p-4 overflow-y-auto px-4 space-y-2 border m-2"
              >
                <h1 className="text-gray-700 text-sm">{message.createdAt}</h1>
                <span className="text-lg ">{message.title}</span>
                <h1 className="text-gray-700 italic text-base">{message.content}</h1>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default MainContact
