/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import TableContainer from "../../components/TableContainer";
import { iMaterialType } from "../../constants/Types";
import Axios from "../../../services/axios";
import LoadingPage from "../../components/LoadingPage";

const Materials = () => {

    const columns = [
        {
            header: "ID",
            accessorKey: "id",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Matériel",
            accessorKey: "name",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Quantité",
            accessorKey: "quantity",
            enableColumnFilter: false,
            enableSorting: true,
        },
    ];

    const [materials, setMaterials] = useState<iMaterialType[]>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            await Axios.get("/materiel")
                .then((res) => {
                    setMaterials((res.data))
                })
                .finally(() => {
                    setIsLoading(false)
                })
        }

        fetchData()
    }, [])


    return (
        <>
            <h1 className="header first-letter:capitalize dark:text-white">Gérer le matériel</h1>
            <LoadingPage isLoading={isLoading} />
            <TableContainer
                columns={columns}
                data={materials}
                isGlobalFilter={true}
                customPageSize={5}
                isSelect={true}
                isPagination={true}
                divclassName="overflow-auto"
                tableclassName="min-w-[640px] w-full"
                page="matérielle"
            />
        </>
    );
};

export default Materials;