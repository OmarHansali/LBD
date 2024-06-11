import { useNavigate } from "react-router-dom"

const NavigateBack = () => {
    const navigate = useNavigate()

    return (
        <button onClick={() => navigate(-1)} className="bg-white px-3 py-2 w-fit border rounded-md cursor-pointer hover:bg-gray-200">
            <i className="icofont-arrow-left"></i>
            <span>Retour</span>
        </button>
    )
}
export default NavigateBack