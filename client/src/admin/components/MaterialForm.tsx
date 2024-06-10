import { iMaterialType } from "../constants/Types"
import NavigateBack from "./NavigateBack"

interface iProps {
    data?: iMaterialType
}


const MaterialForm = ({ data }: iProps) => {
    const { material, createdAt } = data || {}
    return (
        <>
            <div className="flex items-center gap-10">
                <NavigateBack />
                <h2 className="font-semibold text-2xl text-black capitalize dark:text-white/80">
                    {data != undefined ? "Edit Material" : "Create New Material"}
                </h2>
            </div>
        </>
    )
}
export default MaterialForm