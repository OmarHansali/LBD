/* eslint-disable @typescript-eslint/no-explicit-any */
import TableContainer from "../../../components/TableContainer";
import { sallesData } from "../../../data/Data";


const Salles = () => {

    const onlySalles = sallesData.filter((salle) => salle.type == "salle")
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

    // const [isLoading, setIsLoading] = useState(false)

    // useEffect(() => {
    //     // setIsLoading(true)
    //     fetch('https://fakestoreapi.com/products/1')
    //         .then(res => res.json())
    //         .then(json => {
    //             console.log(json)
    //             // setIsLoading(false)
    //             toast.success('Here is your toast.')
    //         }).catch((err: any) => {
    //             toast.error(err)
    //         })
    // }, [])

    return (
        <>
            <h1 className="header capitalize">Gérer les salles</h1>
                {/* <LoadingPage isLoading={isLoading} /> */}
                <TableContainer
                    columns={columns}
                    data={onlySalles}
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