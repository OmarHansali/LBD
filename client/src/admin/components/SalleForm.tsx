import useForm from "../../hooks/useForm"
import { iSalleType } from "../constants/Types"
import { materials } from "../data/Data"
import LoadingButton from "./LoadingButton"
import NavigateBack from "./NavigateBack"

interface iProps {
    data?: iSalleType
}


const SalleForm = ({ data }: iProps) => {
    const { type, availability, capacity, material, number } = data || {}

    // api

    const initialState = {
        type: data ? type : "",
        availability: data ? availability : "",
        capacity: data ? capacity : "",
        material: data ? material : "",
        number: data ? number : "",
    }

    const { inputs, handleChange, isLoading } = useForm(initialState, "", "PUT")

    console.log(inputs);


    return (
        <>
            <NavigateBack />
            <div className="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                <h2 className="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">
                    User Details
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                    <div className="grid grid-cols-2 col-span-2 gap-2">
                        <div className="space-y-2 w-full">
                            <label>Salle Number</label>
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
                            <label>Salle Type</label>
                            <input
                                type="text"
                                className="form-input border"
                                placeholder="salle type"
                                value={inputs['type']}
                                onChange={(e) => handleChange("type", e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 col-span-2 gap-2">

                        <div className="space-y-2 w-full">
                            <label>Material</label>
                            <select
                                defaultValue={inputs['material']}
                                onChange={(e) => handleChange("material", e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option >Choose Material</option>
                                {
                                    materials.map((material) => (
                                        <option key={material.id} selected={inputs['material'] == material.material} value={material.material}>{material.material}</option>
                                    ))
                                }

                            </select>
                        </div>

                        <div className="space-y-2 w-full">
                            <label>Availability</label>
                            <select
                                onChange={(e) => handleChange("availability", e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option >Choose availability</option>
                                <option selected={inputs['availability'] == true} value="yes">Yes</option>
                                <option selected={inputs['availability'] == false} value="no">No</option>
                            </select>
                        </div>


                    </div>
                    <div className="grid grid-cols-2 col-span-2 gap-2">
                        <div className="space-y-2 w-full">
                            <label>Capacity</label>
                            <input
                                type="number"
                                className="form-input border"
                                placeholder="Capacity"
                                value={inputs['capacity']}
                                onChange={(e) => handleChange("capacity", e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <LoadingButton isLoading={isLoading} text="Update" />
                </div>
            </div>
        </>
    )
}
export default SalleForm