/* eslint-disable @typescript-eslint/no-explicit-any */
import useForm from "../../hooks/useForm";
import { iUserType } from "../constants/Types";
import LoadingButton from "./LoadingButton";
import NavigateBack from "./NavigateBack";

interface iProps {
    data?: iUserType
}

const UserForm = ({ data }: iProps) => {
    const { id, username, email, phoneNumber, role } = data || {}

    const initialValue : iUserType= {
        username: data ? username : "",
        role: data ? role : "",
        email: data ? email : "",
        phoneNumber: data ? phoneNumber : ""
    }

    const apiKey = data ? `/user/${id}` : "/user" 
    const method = data ? "PUT" : "POST"
    
    const successMessage = data ? "L'utilisateur a été modifié avec succès" : "L'utilisateur a créé avec succès"
    const errorMessage = data ? "Échec de la modification de l'utilisateur" : "Échec de la création de l'utilisateur"

    const { inputs, handleChange, handleSubmit } = useForm(initialValue, apiKey, method, successMessage, errorMessage, true)

    return (
        <>
            <div className="flex items-center gap-10">
                <NavigateBack />
                <h2 className="font-semibold text-2xl text-black first-letter:capitalize dark:text-white/80">
                    {data != undefined ? "Modifier l'utilisateur" : "Créer un nouvel utilisateur"}
                </h2>
            </div>
            <form 
                onSubmit={handleSubmit}
                className="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                    <div className="grid grid-cols-2 col-span-2 gap-2">
                        <div className="space-y-2 w-full">
                            <label>Nom d'utilisateur</label>
                            <input
                                type="text"
                                className="form-input border"
                                placeholder="Nom d'utilisateur"
                                defaultValue={inputs['username']}
                                onChange={(e) => handleChange('username', e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2 w-full">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-input border"
                                placeholder="Email"
                                defaultValue={inputs['email']}
                                onChange={(e) => handleChange('email', e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 col-span-2 gap-2">
                        <div className="space-y-2 w-full">
                            <label>Rôle</label>
                            <select
                                defaultValue={data ? inputs['role'] : ""}
                                onChange={(e) => handleChange("role", e.target.value)}
                                className="form-select">
                                <option disabled={data as any}>Select Option</option>
                                <option selected={data && data?.role == "user"} value={"user"}>User</option>
                                <option selected={data &&data?.role == "admin"} value={"admin"}>Admin</option>
                            </select>
                        </div>
                        <div className="space-y-2 w-full">
                            <label>Numéro de téléphone</label>
                            <input
                                type="text"
                                className="form-input border"
                                placeholder="Numéro de téléphone"
                                defaultValue={inputs['phoneNumber']}
                                onChange={(e) => handleChange('phoneNumber', e.target.value)}
                                required
                            />
                        </div>

                    </div>
                    <LoadingButton isLoading={false} text={data ? "Update" : "Create"} />
                </div>
            </form>
        </>
    )
}
export default UserForm