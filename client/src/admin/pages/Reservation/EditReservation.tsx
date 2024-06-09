import { useLocation, useNavigate } from "react-router-dom"
import ReservationForm from "../../components/ReservationForm"

const EditReservation = () => {
    const navigate = useNavigate()
    const location = useLocation();

    const { data } = location.state || {};

    console.log("Reservation: ", data)

    return (
        <>
            <div className="flex items-center gap-3">
                <button onClick={() => navigate(-1)} className="bg-white px-3 py-2 w-fit border rounded-md cursor-pointer hover:bg-gray-200">
                    <i className="icofont-arrow-left"></i>
                    <span>Back</span>
                </button>
                Edit Reservation
            </div>

            <div>
                <ReservationForm />
            </div>
        </>
    )
}
export default EditReservation