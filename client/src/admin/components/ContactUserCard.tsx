/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import { iContactProps } from "../constants/Types";
import contactProfile from '../../../public/assets/images/profile-user.png'

interface ContactUserCardProps extends React.HTMLAttributes<HTMLDivElement> {
    contact: iContactProps;
    isActive?: boolean
}

const ContactUserCard: React.FC<ContactUserCardProps> = ({ contact, isActive, ...props }) => {

    // const time = contact.createdAt.split(" ")[1];
    return (
        <div
            {...props}
            className={`flex items-center justify-between py-3 transition-colors duration-75 px-2 w-full ${ isActive ? "bg-gray-800 hover:bg-gray-700 text-white" : "bg-gray-100 hover:bg-gray-50" }  border rounded cursor-pointer`}
        >
            <div className="flex items-center gap-2">
                <img
                    src={contactProfile}
                    alt="profile"
                    className={`size-8 rounded-full ${ isActive ? "invert" : "invert-0" }`}
                />
                <span className="">{ contact.name }</span>
            </div>

            {/* <div className={`text-sm ${isActive ? "text-white" : "text-gray-700"}`}>
                { time }
            </div> */}
        </div>
    );
};

export default ContactUserCard;
