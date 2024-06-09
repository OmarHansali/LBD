import { useLocation } from "react-router-dom";
import UserForm from "../../components/UserForm";


const EditInfo = () => {
    const location = useLocation();
    const { data } = location.state || {};

    return (
        <>
            <UserForm data={data} />
        </>
    )
}
export default EditInfo