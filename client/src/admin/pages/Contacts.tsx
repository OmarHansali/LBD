/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"
import ContactUserCard from "../components/ContactUserCard"
import MainContact from "../components/contact/MainContact"
import { contactsData } from "../data/Data"

const Contacts = () => {
    const [selectedContact, setSelectedContact] = useState(contactsData[0])

    const handleChangeContact = (id: number) => {
        const newContact = contactsData.filter((contact) => contact.id === id)[0]
        setSelectedContact(newContact as any)
    }

    console.log(selectedContact)

    return (
        <div className="space-y-2 h-[80vh]">
            <h1 className="header mb-4">Messages</h1>
            <div className="grid grid-cols-8 gap-1 h-full">
                {/* main section */}
                <div className="border col-span-6">
                    <MainContact data={selectedContact as any} />
                </div>

                {/* right section */}
                <div className="overflow-y-scroll h-[80vh] border col-span-2 space-y-2 p-3">
                    {
                        contactsData.map((contact) => (
                            <ContactUserCard
                                key={contact.id}
                                contact={contact as any}
                                onClick={() => handleChangeContact(contact.id)}
                                className="bg-red-300"
                                isActive={ contact.id === selectedContact.id }
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Contacts