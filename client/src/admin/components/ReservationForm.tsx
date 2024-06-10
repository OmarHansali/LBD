/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react"
import useForm from "../../hooks/useForm"
import { iReservationType } from "../constants/Types"
import { materials, sallesType, usersData } from "../data/Data"
import LoadingButton from "./LoadingButton"
import NavigateBack from "./NavigateBack"
import { MultiSelect } from "react-multi-select-component"

interface iProps {
    data?: iReservationType
}


const ReservationForm = ({ data }: iProps) => {
    const { userId, salleId, startDate, endDate, material, duration } = data || {}

    const convertDate = (str: any) => {
        return new Date(str as any).toISOString().split('T')[0]
    }
    const [mutableMaterials, setMutableMaterials] = useState((data && material) ? material.map((item) => ({ label: item, value: item })) : []);

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
        startDate: data ? convertDate(startDate) : null,
        endDate: data ? convertDate(endDate) : null,
        duration: data ? duration : null,
        material: data ? mutableMaterials : [],
    }

    const options = materials.map(material => ({
        label: material.material,
        value: material.material,
    }));


    const handleMaterialChange = (selectedOptions: any) => {
        setMutableMaterials(selectedOptions);
        handleChange("material", selectedOptions.map((option: any) => option.value));
    };

    const { inputs, handleChange, isLoading } = useForm(initialState, "", "PUT")

    console.log(inputs);


    return (
        <>
            <div className="flex items-center gap-10">
                <NavigateBack />
                <h2 className="font-semibold text-2xl text-black capitalize dark:text-white/80">
                    {data != undefined ? "Edit Reservation" : "Create New Reservation"}
                </h2>
            </div>
            <div className="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                <form className="grid grid-cols-1 gap-4 md:grid-cols-2">

                    <div className="grid grid-cols-2 col-span-2 gap-2">
                        <div className="space-y-2 w-full">
                            <label>User</label>
                            <select
                                value={inputs['userId']}
                                onChange={(e) => handleChange("userId", e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-[12px] px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                            >
                                <option value="" disabled={data != undefined} >Choose User</option>
                                {usersData.map((user) => (
                                    <option key={user.id} value={user.id}>
                                        {user.username}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="space-y-2 w-full">
                            <label>Salle</label>
                            <select
                                value={inputs['salleId']}
                                onChange={(e) => handleChange("salleId", e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-[12px] px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                required
                            >
                                <option disabled={data != undefined}>Choose Salle Type</option>
                                {
                                    sallesType.map((salle) => (
                                        <option
                                            key={salle.id}
                                            selected={inputs['salleId'] && inputs['salleId'] == salle.type}
                                            value={salle.id}
                                        >
                                            {salle.type}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 col-span-2 gap-2">

                        <div className="space-y-2 w-full">
                            <label>Start Date</label>
                            <input
                                type="date"
                                className="form-input border"
                                placeholder="Start Date"
                                value={inputs['startDate']}
                                onChange={(e) => handleChange("startDate", e.target.value)}
                                required
                            />
                        </div>

                        <div className="space-y-2 w-full">
                            <label>End Date</label>
                            <input
                                type="date"
                                className="form-input border"
                                placeholder="End Date"
                                value={inputs['endDate']}
                                onChange={(e) => handleChange("endDate", e.target.value)}
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

                        <div className="space-y-2 w-full">
                            <label>Material</label>
                            <MultiSelect
                                options={options}
                                value={mutableMaterials}
                                onChange={handleMaterialChange}
                                labelledBy="Select"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />

                        </div>
                    </div>
                    <LoadingButton isLoading={isLoading} text={data ? "Update" : "Create"} />
                </form>
            </div>
        </>
    )
}
export default ReservationForm