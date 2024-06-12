import { iUserType } from "../admin/constants/Types"

const loggedUser = JSON.parse(localStorage.getItem('user')!) as iUserType


export default loggedUser