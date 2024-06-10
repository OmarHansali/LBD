/* eslint-disable @typescript-eslint/no-explicit-any */
import TableContainer from "../../components/TableContainer";
import { sallesData } from "../../data/Data";

const Salles = () => {


    const columns = [
        {
            header: "ID",
            accessorKey: "id",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Type",
            accessorKey: "type",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Number",
            accessorKey: "number",
            enableColumnFilter: false,
            enableSorting: true,
        },
        // {
        //     header: "Material",
        //     accessorKey: "material",
        //     enableColumnFilter: false,
        //     enableSorting: true,
        // },
        {
            header: "Capacity",
            accessorKey: "capacity",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Availability",
            accessorKey: "availability",
            enableColumnFilter: false,
            enableSorting: true,
        },
    ];

    return (
        <>
            <h1 className="header">Manage Salles</h1>
            <TableContainer
                columns={columns}
                data={sallesData}
                isGlobalFilter={true}
                customPageSize={5}
                isSelect={true}
                isPagination={true}
                divclassName="overflow-auto"
                tableclassName="min-w-[640px] w-full"
                page="salle"
            />
        </>
    );
};

export default Salles;