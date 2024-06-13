/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import TableContainer from "../../../components/TableContainer";
import { iSalleType } from "../../../constants/Types";
import Axios from "../../../../services/axios";
import LoadingPage from "../../../components/LoadingPage";


const Salles = () => {

    const columns = [
        {
            header: "ID",
            accessorKey: "id",
            enableColumnFilter: false,
            enableSorting: true,
        },
        // {
        //     header: "Type",
        //     accessorKey: "type",
        //     enableColumnFilter: false,
        //     enableSorting: true,
        // },
        {
            header: "Number",
            accessorKey: "number",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Starting Hour",
            accessorKey: "startHour",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Ending Hour",
            accessorKey: "endHour",
            enableColumnFilter: false,
            enableSorting: true,
        },
        
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

    const [salles, setSalles] = useState<iSalleType[]>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            await Axios.get("/salle")
                .then((res) => {
                    setSalles((res.data).filter((salle: iSalleType) => salle.type == "salle"))
                })
                .finally(() => {
                    setIsLoading(false)
                })
        }

        fetchData()
    }, [])

    return (
        <>
            <h1 className="header capitalize">Gérer les salles</h1>
            <LoadingPage isLoading={isLoading} />
            <TableContainer
                columns={columns}
                data={salles}
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