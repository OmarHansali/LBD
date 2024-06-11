import useForm from "../../hooks/useForm"
import { iMaterialType } from "../constants/Types"
import LoadingButton from "./LoadingButton"
import NavigateBack from "./NavigateBack"

interface iProps {
    data?: iMaterialType
}

const MaterialForm = ({ data }: iProps) => {

    const { material, quantity } = data || {}

    const initialState = {
        material: data ? material : "",
        quantity: data ? quantity : null,
    }


    const { inputs, handleChange, isLoading } = useForm(initialState, "", "PUT")

    console.log(inputs);
    

    return (
        <>
            <div className="flex items-center gap-10">
                <NavigateBack />
                <h2 className="font-semibold text-2xl text-black capitalize dark:text-white/80">
                    {data != undefined ? "Edit Material" : "Create New Material"}
                </h2>
            </div>

            <form className="grid grid-cols-1 gap-4 md:grid-cols-2 m-10 pt-16">

                <div className="grid grid-cols-2 col-span-2 gap-2">
                    <div className="space-y-2 w-full">
                        <label>Material Name</label>
                        <input
                            type="text"
                            className="form-input border"
                            placeholder="Material Name"
                            value={inputs['material']}
                            onChange={(e) => handleChange("material", e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-2 w-full">
                        <label>Quantity</label>
                        <input
                            type="number"
                            className="form-input border"
                            placeholder="Quantity"
                            value={inputs['quantity']}
                            onChange={(e) => handleChange("quantity", e.target.value)}
                            required
                        />
                    </div>
                </div>

                <LoadingButton isLoading={isLoading} text={data ? "Update" : "Create"} />
            </form>
        </>
    )
}
export default MaterialForm