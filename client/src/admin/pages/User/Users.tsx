/* eslint-disable @typescript-eslint/no-explicit-any */
import TableContainer from "../../components/TableContainer";
import { datatabledata } from "../../data/Data";

const Users = () => {

    const columns = [
        {
            header: "#",
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
            <h1 className="header">Manage Users</h1>
            <TableContainer
                columns={columns}
                data={datatabledata}
                isGlobalFilter={true}
                customPageSize={5}
                isSelect={true}
                isPagination={true}
                divclassName="overflow-auto"
                tableclassName="min-w-[640px] w-full"
                page="user"
            />
        </>
    );
};

export default Users;