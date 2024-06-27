/* eslint-disable @typescript-eslint/no-explicit-any */
import useForm from "../../hooks/useForm"
import { iMaterialType } from "../constants/Types"
import LoadingButton from "./LoadingButton"
import NavigateBack from "./NavigateBack"

interface iProps {
    data?: iMaterialType
}

const MaterialForm = ({ data }: iProps) => {

    const { id, name, quantity, availability } = data || {}

    const initialState = {
        name: data ? name : "",
        availability: data ? availability : null,
        quantity: data ? Number(quantity) : null,
    }


    const apiKey = data ? `/materiel/${id}` : "/materiel"
    const method = data ? "PUT" : "POST"

    const successMessage = data ? "L'utilisateur a été modifié avec succès" : "L'utilisateur a créé avec succès"
    const errorMessage = data ? "Échec de la modification de l'utilisateur" : "Échec de la création de l'utilisateur"

    const { inputs, handleChange, handleSubmit, isLoading } = useForm(initialState, apiKey, method, successMessage, errorMessage, true)

    console.log(inputs);




    return (
        <>
            <div className="flex items-center gap-10">
                <NavigateBack />
                <h2 className="font-semibold text-2xl text-black first-letter:capitalize dark:text-white/80">
                    {data != undefined ? "Modifier matérielle" : "Créer un nouveau matériau"}
                </h2>
            </div>

            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-4 md:grid-cols-2 m-10 pt-16">

                <div className="grid grid-cols-2 col-span-2 gap-4">
                    <div className="space-y-2 w-full">
                        <label>Nom du matériau</label>
                        <input
                            type="text"
                            className="form-input border"
                            placeholder="Nom du matériau"
                            value={inputs['name']}
                            onChange={(e) => handleChange("name", e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-2 w-full">
                        <label>Quantité</label>
                        <input
                            type="number"
                            className="form-input border"
                            placeholder="Quantité"
                            value={inputs['quantity']}
                            onChange={(e) => handleChange("quantity", Number(e.target.value))}
                            required
                        />
                    </div>
                    <div className="space-y-2 w-full">
                        <label>Disponibilité</label>
                        <select
                            value={inputs['availability']}
                            onChange={(e) => handleChange("availability", e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-[12px] px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option disabled={data != undefined}>Choisir la disponibilité</option>
                            <option selected={inputs['availability'] == true} value={'yes'}>Oui</option>
                            <option selected={inputs['availability'] == false} value={'no'}>Non</option>
                        </select>
                    </div>
                </div>

                <LoadingButton isLoading={isLoading} text={data ? "Update" : "Create"} />
            </form>
        </>
    )
}
export default MaterialForm