/* eslint-disable @typescript-eslint/no-explicit-any */
import TableContainer from "../../components/TableContainer";
import { reservationsData } from "../../data/Data";
const Reservations = () => {

    const columns = [
        {
            header: "ID",
            accessorKey: "id",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Start Date",
            accessorKey: "startDate",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "End Date",
            accessorKey: "endDate",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "User",
            accessorKey: "userId",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Salle",
            accessorKey: "salleId",
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
            header: "Duration",
            accessorKey: "duration",
            enableColumnFilter: false,
            enableSorting: true,
        },
    ];

    return (
        <>
            <h1 className="header">Manage Reservations</h1>
            <TableContainer
                columns={columns}
                data={reservationsData}
                isGlobalFilter={true}
                customPageSize={5}
                isSelect={true}
                isPagination={true}
                divclassName="overflow-auto"
                tableclassName="min-w-[640px] w-full"
                page="reservation"
            />
        </>
    );
};

export default Reservations;