/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import TableContainer from "../../components/TableContainer";
import { iUserType } from "../../constants/Types";
import LoadingPage from "../../components/LoadingPage";
import Axios from "../../../services/axios";

const Users = () => {

    const columns = [
        {
            header: "ID",
            accessorKey: "id",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Nom d'utilisateur",
            accessorKey: "username",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Rôle",
            accessorKey: "role",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Email",
            accessorKey: "email",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Numéro de téléphone",
            accessorKey: "phoneNumber",
            enableColumnFilter: false,
            enableSorting: true,
        },
    ];

    const [users, setUsers] = useState<iUserType[]>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            await Axios.get("/user")
                .then((res) => {
                    setUsers((res.data).filter((data: iUserType) => data.role != "admin"))

                })
                .finally(() => {
                    setIsLoading(false)
                })
        }

        fetchData()
    }, [])


    return (
        <>
            <h1 className="header capitalize">gérer les utilisateurs</h1>
            <LoadingPage isLoading={isLoading} />
            <TableContainer
                columns={columns}
                data={users}
                isGlobalFilter={true}
                customPageSize={5}
                isSelect={true}
                isPagination={true}
                divclassName="overflow-auto"
                tableclassName="min-w-[640px] w-full"
                page="utilisateur"
            />
        </>
    );
};

export default Users;