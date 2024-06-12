import { useLocation } from "react-router-dom";
import SalleForm from "../../components/SalleForm"

const CreateSalle = () => {
    const location = useLocation();
    const { state } = location
    
    return (
        <>
            <SalleForm page={ state }/>
        </>
    )
}
export default CreateSalle