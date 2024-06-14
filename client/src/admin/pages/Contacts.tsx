/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"
import ContactUserCard from "../components/ContactUserCard"
import MainContact from "../components/contact/MainContact"
import { iContactProps } from "../constants/Types"
import Axios from "../../services/axios"
import { Spinner } from "../components/icons/SVGIcons"
import { useLocation } from "react-router-dom"

const Contacts = () => {
    const [selectedContact, setSelectedContact] = useState<iContactProps | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(false)
    const [contacts, setContacts] = useState<iContactProps[]>([]);

    const location = useLocation();
    const { contactId } = location.state || {};

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            await Axios.get("/contact")
                .then((res) => {
                    setContacts(res.data);
                })
                .finally(() => {
                    setIsLoading(false)
                });
        };

        fetchData();
    }, []);

    useEffect(() => {
        setSelectedContact(contacts[0])
    }, [contacts])

    const handleChangeContact = (id: number) => {
        const newContact = contacts.filter((contact) => contact.id === id)[0]
        setSelectedContact(newContact as any)
    }

    useEffect(() => {
        if (contactId) {
            const newContact = contacts.filter((contact) => contact.id === contactId)[0]
            setSelectedContact(newContact as any)
        }
    }, [contactId, contacts])


    return (
        <div className="space-y-2 h-[80vh]">
            <h1 className="header mb-2 dark:text-white">Les Messages</h1>
            <div className="grid grid-cols-8 gap-1 h-full">
                {/* main section */}
                <div className="border col-span-6">
                    {
                        !isLoading ? (<MainContact data={selectedContact as any} />) : (<Spinner />)
                    }
                </div>

                {/* right section */}
                <div className="overflow-y-scroll h-[80vh] border col-span-2 space-y-2 p-3">
                    {
                        !isLoading && selectedContact ?
                            contacts.map((contact, index) => (
                                <ContactUserCard
                                    key={index}
                                    contact={contact as any}
                                    onClick={() => handleChangeContact(contact.id)}
                                    className="bg-red-300"
                                    isActive={contact.id === selectedContact!.id}
                                />
                            ))

                            :

                            (<Spinner />)
                    }
                </div>
            </div>
        </div>
    )
}
export default Contacts