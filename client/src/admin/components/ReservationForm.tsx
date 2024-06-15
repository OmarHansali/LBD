/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react"
import useForm from "../../hooks/useForm"
import { iReservationType, iSalleType, iUserType } from "../constants/Types"
import LoadingButton from "./LoadingButton"
import NavigateBack from "./NavigateBack"
import Axios from "../../services/axios"

interface iProps {
    data?: iReservationType
}


const ReservationForm = ({ data }: iProps) => {
    const { id, userId, salleId, dateReservation, heureReservation, duration } = data || {}


    const [users, setUsers] = useState<iUserType[]>([])
    const [salles, setSalles] = useState<iSalleType[]>([])
    const [minDate, setMinDate] = useState('');

    useEffect(() => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        setMinDate(`${year}-${month}-${day}`);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            await Axios.get("/user")
                .then((res) => {
                    setUsers((res.data).filter((data: iUserType) => data.role != "admin"))

                })
        }

        fetchData()
    }, [])


    useEffect(() => {
        const fetchData = async () => {
            await Axios.get("/salle")
                .then((res) => {
                    setSalles((res.data))
                })
        }

        fetchData()
    }, [])


    // const convertDate = (str: any) => {
    //     return new Date(str as any).toISOString().split('T')[0]
    // }
    const [durationAsString, setDurationAsString] = useState<string | null>(null)

    const handleDurationConversion = (value: string) => {
        const minutes = parseInt(value);

        if (minutes >= 15 && minutes <= 300) { // 15 minutes to 5 hours (15*60 = 900 min)
            const hours = Math.floor(minutes / 60);
            const remainingMinutes = minutes % 60;
            const formattedDuration = `${hours > 0 ? `${hours}h` : ''} ${remainingMinutes}min`;
            setDurationAsString(formattedDuration);
        } else {
            setDurationAsString(null);
        }
    };

    // api

    const initialState = {
        userId: data ? userId : null,
        salleId: data ? salleId : null,
        dateReservation: data ? dateReservation : null,
        heureReservation: data ? heureReservation : null,
        duration: data ? duration : null,
    }




    const apiKey = data ? `/reservation/${id}` : "/reservation"
    const method = data ? "PUT" : "POST"

    const successMessage = data ? "Le reservation a été modifié avec succès" : "Le reservation a créé avec succès"
    const errorMessage = data ? "Échec de la modification de le reservation" : "Échec de la création de reservation"

    const { inputs, handleChange, handleSubmit, isLoading } = useForm(initialState, apiKey, method, successMessage, errorMessage, true)

    

    return (
        <>
            <div className="flex items-center gap-10">
                <NavigateBack />
                <h2 className="font-semibold text-2xl text-black capitalize dark:text-white/80">
                    {data != undefined ? "Modifier Réservation" : "Créer une nouvelle réservation"}
                </h2>
            </div>
            <div className="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 gap-4 md:grid-cols-2">

                    <div className="grid grid-cols-2 col-span-2 gap-2">
                        <div className="space-y-2 w-full">
                            <label>Utilisateur</label>
                            <select
                                value={inputs['userId']}
                                onChange={(e) => handleChange("userId", e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-[12px] px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                            >
                                <option value="" disabled={data != undefined} >Choisir un utilisateur</option>
                                {users && users.map((user) => (
                                    <option key={user.id} value={user.id}>
                                        {user.username}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="space-y-2 w-full">
                            <label>Chambre</label>
                            <select
                                value={inputs['salleId']}
                                onChange={(e) => handleChange("salleId", e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-[12px] px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                            >
                                <option disabled={data != undefined}>Choisissez le chambre</option>
                                {
                                    salles.map((salle) => (
                                        <option
                                            key={salle.id}
                                            selected={inputs['salleId'] && inputs['salleId'] == salle.type}
                                            value={salle.id}
                                        >
                                            {salle.type}: {salle.number}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 col-span-2 gap-2">

                        <div className="space-y-2 w-full">
                            <label>Date de Reservation</label>
                            <input
                                type="date"
                                className="form-input border"
                                placeholder="Date de Reservation"
                                value={inputs['dateReservation']}
                                onChange={(e) => handleChange("dateReservation", e.target.value)}
                                min={minDate}
                                required
                            />
                        </div>

                        <div className="space-y-2 w-full">
                            <label>Heure de Reservation</label>
                            <input
                                type="time"
                                className="form-input border"
                                placeholder="Heure de Reservation"
                                value={inputs['heureReservation']}
                                onChange={(e) => handleChange("heureReservation", e.target.value)}
                                required
                            />
                        </div>


                    </div>
                    <div className="grid grid-cols-2 col-span-2 gap-2">

                        <div className="space-y-2 w-full">
                            <div className="flex items-center justify-between">
                                <label>Duration <span className="text-red-800">[ 15 min - 5h ]</span></label>
                                {
                                    durationAsString != null &&
                                    <label className="mx-16 text-gray-500 italic">( {durationAsString} )</label>
                                }
                            </div>
                            <div className="flex">
                                <input
                                    className="form-input border rounded-r-none invalid:bg-red-200"
                                    placeholder="Duration"
                                    type="number"
                                    value={inputs['duration']}
                                    onChange={(e) => {
                                        handleChange("duration", e.target.value)
                                        handleDurationConversion(e.target.value)
                                    }}
                                    min={15}
                                    max={300}
                                />
                            </div>
                        </div>

                    </div>
                    <LoadingButton isLoading={isLoading} text={data ? "Update" : "Create"} />
                </form>
            </div>
        </>
    )
}
export default ReservationForm