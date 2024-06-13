/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import LoadingPage from "../../../components/LoadingPage";
import TableContainer from "../../../components/TableContainer";
import { iSalleType } from "../../../constants/Types";
import Axios from "../../../../services/axios";


const Fablabs = () => {

    const columns = [
        {
            header: "ID",
            accessorKey: "id",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Materiels",
            accessorKey: "materielNames",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "№ chambre",
            accessorKey: "number",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Heure de départ",
            accessorKey: "startHour",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Heure de fin",
            accessorKey: "endHour",
            enableColumnFilter: false,
            enableSorting: true,
        },

        {
            header: "Capacité",
            accessorKey: "capacity",
            enableColumnFilter: false,
            enableSorting: true,
        },
        {
            header: "Disponibilité",
            accessorKey: "dispo",
            enableColumnFilter: false,
            enableSorting: true,
        },
    ];
    const [fablabs, setFablabs] = useState<iSalleType[]>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            const response = await Axios.get("/salle")
            const mappedData = response.data.map((salle: any) => {
                const materielNames = salle.materiels.map((materiel: any) => materiel.name).join(", ");
                return {
                    ...salle,
                    materielNames,
                    dispo: salle.availability == true ? "Oui" : "Non"
                };
            });
            setFablabs(mappedData.filter((salle: iSalleType) => salle.type == "fablab"))
        }

        fetchData()
        setIsLoading(false)
    }, [])

    return (
        <>
            <h1 className="header capitalize">Gérer les fablabs</h1>
            <LoadingPage isLoading={isLoading} />
            <TableContainer
                columns={columns}
                data={fablabs}
                isGlobalFilter={true}
                customPageSize={5}
                isSelect={true}
                isPagination={true}
                divclassName="overflow-auto"
                tableclassName="min-w-[640px] w-full"
                page="fablab"
            />
        </>
    );
};

export default Fablabs;