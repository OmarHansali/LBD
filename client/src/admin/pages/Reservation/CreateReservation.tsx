import { useNavigate } from "react-router-dom"
import ReservationForm from "../../components/ReservationForm"

const CreateReservation = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="flex items-center gap-3">
                <button onClick={() => navigate(-1)} className="bg-white px-3 py-2 w-fit border rounded-md cursor-pointer hover:bg-gray-200">
                    <i className="icofont-arrow-left"></i>
                    <span>Back</span>
                </button>
                Create Reservation
            </div>

            <div>
                <ReservationForm />
            </div>
        </>
    )
}
export default CreateReservation