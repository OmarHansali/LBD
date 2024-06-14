/* eslint-disable @typescript-eslint/no-explicit-any */

import { iContactProps } from "../../constants/Types"
import contactProfile from '../../../../public/assets/images/profile-user.png'
import { Spinner } from "../icons/SVGIcons"



const MainContact = ({ data }: { data: iContactProps }) => {

  return (
    <>
      {
        data ? (<div
          className={`flex-1 overflow-y-auto absolute top-0 left-0 dark:bg-darklight dark:border-darkborder md:static h-full`}
        >
          <div className="flex items-center gap-3 px-4 py-2 border-b bg-light/20 border-black/10 dark:border-darkborder dark:bg-white/5">
            <div className="flex items-center flex-1 gap-2 p-1">

              {/* Logo */}
              <img
                className="flex-none object-cover overflow-hidden rounded-full w-9 h-9 dark:invert"
                src={contactProfile}
                alt=""
              />
              {/* Logo */}
              <div className="flex-1 ltr:text-left rtl:text-right">
                <p className="dark:text-white">
                  {data.name}
                  <span className="mx-1 dark:text-white">|</span>
                  {data.email}
                </p>
                {/* <p className="text-xs text-muted dark:text-darkmuted">
                {createdAt}
              </p> */}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-between gap-3 px-4 py-2 border-b bg-light/20 border-black/10 dark:border-darkborder dark:bg-white/5">
            <p className="font-semibold text-lg dark:text-white">
              Object: 
              <span className="mx-2 text-gray-600 dark:text-gray-300 font-normal">{ data.object }</span>
            </p>
          </div>
          <div className="overflow-y-scroll p-4">
            <h1 className="font-semibold text-lg dark:text-white pb-2">Message: </h1>
            <p className="dark:text-white">{ data.body }</p>
            {/* {
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
          } */}
          </div>
        </div>)
          :
          (<div className="flex items-center h-full w-full justify-center">
            <Spinner fontSize={60} />
          </div>)
      }

    </>
  )
}

export default MainContact
