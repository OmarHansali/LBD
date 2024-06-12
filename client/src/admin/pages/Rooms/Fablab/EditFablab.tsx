import { useLocation } from "react-router-dom"
import RoomForm from "../../../components/RoomForm"; 

const EditFablab = () => {
    const location = useLocation();
    const { data } = location.state || {};

    return (
        <>
            <RoomForm data={data} />
        </>
    )
}
export default EditFablab