/* eslint-disable @typescript-eslint/no-explicit-any */
import TableContainer from "../../components/TableContainer";
import { usersData } from "../../data/Data";

const Users = () => {

    const columns = [
        {
            header: "ID",
            accessorKey: "id",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Username",
            accessorKey: "username",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Role",
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
            header: "Phone Number",
            accessorKey: "phoneNumber",
            enableColumnFilter: false,
            enableSorting: true,
        },
    ];


    return (
        <>
            <h1 className="header capitalize">gérer les utilisateurs</h1>
            <TableContainer
                columns={columns}
                data={usersData}
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