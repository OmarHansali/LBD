/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"
import useForm from "../../hooks/useForm"
import { iSalleType } from "../constants/Types"
import { materials } from "../data/Data"
import LoadingButton from "./LoadingButton"
import NavigateBack from "./NavigateBack"
import { MultiSelect } from "react-multi-select-component"

interface iProps {
    data?: iSalleType,
    page?: string
}


const RoomForm = ({ data, page }: iProps) => {
    const { type, availability, capacity, material, number } = data || {}

    const [mutableMaterials, setMutableMaterials] = useState((data && material) ? material.map((item) => ({ label: item, value: item })) : []);

    // api

    const initialState = {
        type: data ? type : page,
        availability: data ? availability : "",
        capacity: data ? capacity : "",
        material: data ? mutableMaterials : [],
        number: data ? number : "",
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

    console.log(inputs)


    return (
        <>
            <div className="flex items-center gap-10">
                <NavigateBack />
                <h2 className="font-semibold text-2xl text-black capitalize dark:text-white/80">
                    {data != undefined ? `Modifier ${type ? type : page}` : `Créer une nouvelle ${type ? type : page}`}
                </h2>
            </div>
            <div className="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                <form className="grid grid-cols-1 gap-4 md:grid-cols-2">

                    <div className="grid grid-cols-2 col-span-2 gap-2">
                        <div className="space-y-2 w-full">
                            <label className="capitalize">{type ? type : page} Number</label>
                            <input
                                type="text"
                                className="form-input border"
                                placeholder="Salle Number"
                                value={inputs['number']}
                                onChange={(e) => handleChange("number", e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2 w-full">
                            <label>Capacity</label>
                            <input
                                type="number"
                                className="form-input border"
                                placeholder="Capacity"
                                value={inputs['capacity']}
                                min={6}
                                max={30}
                                onChange={(e) => handleChange("capacity", e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 col-span-2 gap-2 place-items-center">



                        <div className="space-y-2 w-full">
                            <label>Availability</label>
                            <select
                                value={inputs['availability']}
                                onChange={(e) => handleChange("availability", e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-[12px] px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option disabled={data != undefined}>Choose availability</option>
                                <option selected={inputs['availability'] == true} value="yes">Yes</option>
                                <option selected={inputs['availability'] == false} value="no">No</option>
                            </select>
                        </div>

                        <div className="space-y-2 w-full">
                            <label>Material</label>
                            <MultiSelect
                                options={options}
                                value={mutableMaterials}
                                onChange={handleMaterialChange}
                                labelledBy="select"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />

                        </div>
                    </div>

                    <div className="grid grid-cols-2 col-span-2 gap-2">

                        <div className="space-y-2 w-full">
                            <label>Starting Hour</label>
                            <input
                                type="time"
                                className="form-input border"
                                placeholder="Start Date"
                                value={inputs['startDate']}
                                onChange={(e) => handleChange("startDate", e.target.value)}
                                required
                            />
                        </div>

                        <div className="space-y-2 w-full">
                            <label>Ending Hour</label>
                            <input
                                type="time"
                                className="form-input border"
                                placeholder="End Date"
                                value={inputs['endDate']}
                                onChange={(e) => handleChange("endDate", e.target.value)}
                                required
                            />
                        </div>


                    </div>
                    <LoadingButton isLoading={isLoading} text={data ? "Update" : "Create"} />
                </form>
            </div>
        </>
    )
}
export default RoomForm