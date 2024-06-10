import { useLocation } from "react-router-dom";
import MaterialForm from "../../components/MaterialForm";

const EditMaterial = () => {
    const location = useLocation();
    const { data } = location.state || {};
    return (
        <>
            <MaterialForm data={data} />
        </>
    )
}
export default EditMaterial