/* eslint-disable @typescript-eslint/no-explicit-any */
import TableContainer from "../../components/TableContainer";
import { materials } from "../../data/Data";

const Materials = () => {

    const columns = [
        {
            header: "ID",
            accessorKey: "id",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Material",
            accessorKey: "material",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Quantity",
            accessorKey: "quantity",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Created At",
            accessorKey: "createdAt",
            enableColumnFilter: false,
            enableSorting: true,
        },
    ];


    return (
        <>
            <h1 className="header">Manage Materials</h1>
            <TableContainer
                columns={columns}
                data={materials}
                isGlobalFilter={true}
                customPageSize={5}
                isSelect={true}
                isPagination={true}
                divclassName="overflow-auto"
                tableclassName="min-w-[640px] w-full"
                page="material"
            />
        </>
    );
};

export default Materials;