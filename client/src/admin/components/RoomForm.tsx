/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react"
import useForm from "../../hooks/useForm"
import { iMaterialType, iSalleType } from "../constants/Types"
import LoadingButton from "./LoadingButton"
import NavigateBack from "./NavigateBack"
import { MultiSelect } from "react-multi-select-component"
import Axios from "../../services/axios"

interface iProps {
    data?: iSalleType,
    page?: string
}


const RoomForm = ({ data, page }: iProps) => {

    const [materiels, setMateriels] = useState<iMaterialType[]>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            await Axios.get("/materiel")
                .then((res) => {
                    setMateriels((res.data))
                })
                .finally(() => {
                    setIsLoading(false)
                })
        }

        fetchData()
    }, [])


    const { id, type, availability, capacity, materiels : dataMateriels, number, startHour, endHour } = data || {}

    const [mutableMaterials, setMutableMaterials] = useState((data && dataMateriels) ? dataMateriels.map((item: iMaterialType) => ({ label: item.name, value: item.id })) : []);

        console.log(mutableMaterials);
        
    // api

    const initialState = {
        type: data ? type : page,
        availability: data ? availability : "",
        capacity: data ? capacity : "",
        materielIds: data ? mutableMaterials : [],
        number: data ? number : "",
        startHour: data ? startHour : "",
        endHour: data ? endHour : ""
    }

    const options = materiels && materiels.map(materiel => ({
        label: materiel.name,
        value: materiel.id,
    }));
    

    const handleMaterialChange = (selectedOptions: any) => {
        setMutableMaterials(selectedOptions);
        handleChange("materielIds", selectedOptions.map((option: any) => option.value));
    };

    const apiKey = data ? `/salle/${id}` : "/salle"
    const method = data ? "PUT" : "POST"

    const successMessage = data ? `${ type == "salle" ? "La salle ": type } a été modifié avec succès` : `${page == "salle" ? "La salle ": page} a créé avec succès`
    const errorMessage = data ? `Échec de la modification de ${ type == "salle" ? "La salle ": type }` : `Échec de la création de ${page == "salle" ? "La salle ": page}`

    const { inputs, handleChange, handleSubmit } = useForm(initialState, apiKey, method,successMessage, errorMessage, true)




    return (
        <>
            <div className="flex items-center gap-10">
                <NavigateBack />
                <h2 className="font-semibold text-2xl text-black first-letter:capitalize dark:text-white/80">
                    {data != undefined ? `Modifier ${type ? type : page}` : `Créer une nouvelle ${type ? type : page}`}
                </h2>
            </div>
            <div className="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 gap-4 md:grid-cols-2">

                    <div className="grid grid-cols-2 col-span-2 gap-2">
                        <div className="space-y-2 w-full">
                            <label className="first-letter:capitalize">Numéro de {type ? type : page}</label>
                            <input
                                type="text"
                                className="form-input border"
                                placeholder={`Numéro de ${type ? type : page}`}
                                value={inputs['number']}
                                onChange={(e) => handleChange("number", e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2 w-full">
                            <label>Capacité de {type ? type : page}</label>
                            <input
                                type="number"
                                className="form-input border"
                                placeholder={`Capacité de ${type ? type : page}`}
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
                            <label>Disponibilité</label>
                            <select
                                value={inputs['availability']}
                                onChange={(e) => handleChange("availability", e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-[12px] px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option disabled={data != undefined}>Choisir la disponibilité</option>
                                <option selected={inputs['availability'] == true} value="yes">Oui</option>
                                <option selected={inputs['availability'] == false} value="no">Non</option>
                            </select>
                        </div>

                        <div className="space-y-2 w-full">
                            <label>Matériaux</label>
                            <MultiSelect
                                options={options}
                                value={mutableMaterials}
                                onChange={handleMaterialChange}
                                labelledBy="select"
                                isLoading={isLoading}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />

                        </div>
                    </div>

                    <div className="grid grid-cols-2 col-span-2 gap-2">

                        <div className="space-y-2 w-full">
                            <label>Heure de départ</label>
                            <input
                                type="time"
                                className="form-input border"
                                placeholder="Heure de départ"
                                value={inputs['startHour']}
                                onChange={(e) => handleChange("startHour", e.target.value)}
                                required
                            />
                        </div>

                        <div className="space-y-2 w-full">
                            <label>Heure de fin</label>
                            <input
                                type="time"
                                className="form-input border"
                                placeholder="Heure de fin"
                                value={inputs['endHour']}
                                onChange={(e) => handleChange("endHour", e.target.value)}
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