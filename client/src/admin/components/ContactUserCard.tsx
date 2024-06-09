/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";

interface ContactProps {
    id: any;
    username: string;
    profile: string;
    email: string;
    createdAt: string;
    title: string;
    content: string;
}

interface ContactUserCardProps extends React.HTMLAttributes<HTMLDivElement> {
    contact: ContactProps;
    isActive?: boolean
}

const ContactUserCard: React.FC<ContactUserCardProps> = ({ contact, isActive, ...props }) => {

    const time = contact.createdAt.split(" ")[1];
    return (
        <div
            {...props}
            className={`flex items-center justify-between py-3 transition-colors duration-75 px-2 w-full ${ isActive ? "bg-blue-500 hover:bg-blue-400 text-white" : "bg-gray-100 hover:bg-gray-50" }  border rounded cursor-pointer`}
        >
            <div className="flex items-center gap-2">
                <img
                    src={contact.profile}
                    alt="profile"
                    className="size-8 rounded-full"
                />
                <span>{ contact.username }</span>
            </div>

            <div className={`text-sm ${isActive ? "text-white" : "text-gray-700"}`}>
                { time }
            </div>
        </div>
    );
};

export default ContactUserCard;
