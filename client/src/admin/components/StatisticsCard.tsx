import { ReservationIcon, SalleIcon, Spinner, UsersIcon } from "./icons/SVGIcons";

interface iProps {
    title: string,
    number: number,
    text: string
}
const StatisticsCard = ({ title, number, text }: iProps) => {

    let icon

    switch (title.toLowerCase()) {
        case "users":
            icon = <UsersIcon width={30} height={30} className="dark:text-white" />
            break;

        case "salles":
            icon = <SalleIcon width={30} height={30} className="dark:text-white" />
            break;

        case "reservations":
            icon = <ReservationIcon width={30} height={30} className="dark:text-white" />
            break;

    }


    return (
        <div className="bg-gray-50 dark:bg-gray-900 border rounded py-2 px-3 space-y-2 shadow-sm">
            <div>
                <h1 className="header-1 flex items-center justify-between">
                    <span className="dark:text-white capitalize" >{title}</span>
                    {icon}
                </h1>
                <h1 className="header-sm lowercase">{text}</h1>
            </div>
            {
                number ?
                    (<h1 className="text-3xl dark:text-white">{number}</h1>)
                    :
                    (<Spinner fontSize={30}/>)

            }
        </div>
    )
}
export default StatisticsCard