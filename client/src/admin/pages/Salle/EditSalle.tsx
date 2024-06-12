import { useLocation } from "react-router-dom"
import SalleForm from "../../components/SalleForm";


const EditSalle = () => {
    const location = useLocation();
    const { data } = location.state || {};

    return (
        <>
            <SalleForm data={data} />
        </>
    )
}
export default EditSalle