import { useLocation } from "react-router-dom"
import ReservationForm from "../../components/ReservationForm"

const EditReservation = () => {
    const location = useLocation();

    const { data } = location.state || {};

    return (
        <>
            <ReservationForm data={data} />
        </>
    )
}
export default EditReservation