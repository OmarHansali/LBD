import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import TableContainer from "../../admin/components/TableContainer";

const Users = () => {
    const columns = React.useMemo(
        () => [
            {
                header: "Name",
                accessorKey: "name",
                enableColumnFilter: false,
                enableSorting: true,
            },
            {
                header: "Job",
                accessorKey: "job",
                enableColumnFilter: false,
                enableSorting: true,
            },
            {
                header: "Year",
                accessorKey: "year",
                enableColumnFilter: false,
                enableSorting: true,
            },
            {
                header: "Country",
                accessorKey: "country",
                enableColumnFilter: false,
                enableSorting: true,
            },
        ],
        []
    );

    const datatabledata = [
        {
            name: "Brielle Kuphal",
            job: "Global Metrics Developer",
            country: "Tunisia",
            year: 1969,
        },
        {
            name: "Barney Murray",
            job: "Product Solutions Executive",
            country: "Haiti",
            year: 1970,
        },
        {
            name: "Ressie Ruecker",
            job: "Forward Factors Orchestrator",
            country: "Georgia",
            year: 1967,
        },
        {
            name: "Teresa Mertz",
            job: "Dynamic Division Director",
            country: "Bahrain",
            year: 1953,
        },
        {
            name: "Chelsey Hackett",
            job: "Senior Accountability Architect",
            country: "Malta",
            year: 1962,
        },
        {
            name: "Tatyana Metz",
            job: "Regional Metrics Coordinator",
            country: "Sierra Leone",
            year: 1983,
        },
        {
            name: "Oleta Harvey",
            job: "District Usability Producer",
            country: "Swaziland",
            year: 1963,
        },
        {
            name: "Bette Haag",
            job: "Dynamic Program Orchestrator",
            country: "Guyana",
            year: 1974,
        },
        {
            name: "Meda Ebert",
            job: "Product Division Orchestrator",
            country: "Saint Kitts and Nevis",
            year: 1954,
        },
        {
            name: "Elissa Stroman",
            job: "Dynamic Applications Developer",
            country: "Andorra",
            year: 1978,
        },
        {
            name: "Sid Swaniawski",
            job: "Forward Interactions Designer",
            country: "Gibraltar",
            year: 1979,
        },
        {
            name: "Madonna Hahn",
            job: "Customer Configuration Specialist",
            country: "Pakistan",
            year: 1948,
        },
        {
            name: "Waylon Kihn",
            job: "National Security Facilitator",
            country: "China",
            year: 1958,
        },
        {
            name: "Jaunita Lindgren",
            job: "Senior Identity Consultant",
            country: "Sweden",
            year: 1958,
        },
        {
            name: "Lenora MacGyver",
            job: "Corporate Factors Manager",
            country: "Vietnam",
            year: 1951,
        },
        {
            name: "Ole Collier",
            job: "Corporate Factors Assistant",
            country: "Cape Verde",
            year: 1967,
        },
        {
            name: "Taurean Koelpin",
            job: "District Intranet Officer",
            country: "Northern Mariana Islands",
            year: 1980,
        },
        {
            name: "Thalia Yost",
            job: "Dynamic Usability Director",
            country: "French Southern Territories",
            year: 1948,
        },
        {
            name: "Okey Kling",
            job: "District Metrics Manager",
            country: "Poland",
            year: 1953,
        },
        {
            name: "Darrick Ortiz",
            job: "Chief Metrics Agent",
            country: "Tajikistan",
            year: 1990,
        },
        {
            name: "Eulalia Vandervort",
            job: "Future Creative Manager",
            country: "Spain",
            year: 1990,
        },
        {
            name: "Genevieve Pouros",
            job: "Investor Identity Facilitator",
            country: "British Indian Ocean Territory (Chagos Archipelago)",
            year: 1983,
        },
        {
            name: "Horacio Purdy",
            job: "Direct Accountability Producer",
            country: "Slovakia (Slovak Republic)",
            year: 1968,
        },
        {
            name: "Eleazar Konopelski",
            job: "National Usability Engineer",
            country: "Cayman Islands",
            year: 1954,
        },
        {
            name: "Herminia Effertz",
            job: "Central Usability Manager",
            country: "Saudi Arabia",
            year: 1954,
        },
        {
            name: "Brian Hermann",
            job: "Central Optimization Coordinator",
            country: "Papua New Guinea",
            year: 1952,
        },
        {
            name: "Wellington Barrows",
            job: "Customer Identity Engineer",
            country: "Zimbabwe",
            year: 1957,
        },
        {
            name: "David Rosenbaum",
            job: "Global Research Administrator",
            country: "Mayotte",
            year: 1958,
        },
        {
            name: "Pinkie Reilly",
            job: "Internal Data Director",
            country: "Isle of Man",
            year: 1973,
        },
        {
            name: "Asha Bartell",
            job: "Global Security Associate",
            country: "Tonga",
            year: 1991,
        },
        {
            name: "Alexane Bode",
            job: "Product Integration Planner",
            country: "Honduras",
            year: 1959,
        },
        {
            name: "Estelle Bode",
            job: "Lead Marketing Producer",
            country: "Dominica",
            year: 1962,
        },
        {
            name: "Jeromy Mayer",
            job: "Direct Accountability Director",
            country: "Maldives",
            year: 1973,
        },
        {
            name: "Ephraim Wiegand",
            job: "Direct Identity Administrator",
            country: "Australia",
            year: 1946,
        },
        {
            name: "Jarrett Grimes",
            job: "International Web Strategist",
            country: "Tunisia",
            year: 1986,
        },
        {
            name: "Jeffry Macejkovic",
            job: "National Paradigm Specialist",
            country: "Taiwan",
            year: 1959,
        },
        {
            name: "Janelle Stroman",
            job: "National Accounts Engineer",
            country: "Denmark",
            year: 1974,
        },
        {
            name: "Camille Considine",
            job: "Central Solutions Planner",
            country: "Chile",
            year: 1975,
        },
        {
            name: "Amani Schinner",
            job: "Corporate Metrics Manager",
            country: "Sri Lanka",
            year: 1981,
        },
        {
            name: "Dustin Bahringer",
            job: "Regional Research Designer",
            country: "Russian Federation",
            year: 1988,
        },
        {
            name: "Mary Sanford",
            job: "Chief Applications Consultant",
            country: "Isle of Man",
            year: 1959,
        },
        {
            name: "Itzel Skiles",
            job: "Dynamic Factors Strategist",
            country: "Western Sahara",
            year: 1981,
        },
        {
            name: "Melyssa Denesik",
            job: "Customer Security Consultant",
            country: "Libyan Arab Jamahiriya",
            year: 1960,
        },
        {
            name: "Elenora McLaughlin",
            job: "Legacy Paradigm Engineer",
            country: "Swaziland",
            year: 1954,
        },
        {
            name: "Chet Lueilwitz",
            job: "Chief Implementation Producer",
            country: "Togo",
            year: 1947,
        },
        {
            name: "Adrian Ondricka",
            job: "National Optimization Orchestrator",
            country: "Monaco",
            year: 1991,
        },
        {
            name: "Quincy West",
            job: "Regional Paradigm Developer",
            country: "Qatar",
            year: 1979,
        },
        {
            name: "Bernardo Krajcik",
            job: "Lead Intranet Architect",
            country: "Japan",
            year: 1959,
        },
        {
            name: "Aiyana Kshlerin",
            job: "Forward Optimization Orchestrator",
            country: "Netherlands",
            year: 1971,
        },
        {
            name: "Ambrose Anderson",
            job: "Central Solutions Executive",
            country: "Moldova",
            year: 1986,
        },
        {
            name: "Cassandre Volkman",
            job: "Lead Quality Director",
            country: "Israel",
            year: 1975,
        },
        {
            name: "Vivien Hettinger",
            job: "Investor Assurance Producer",
            country: "Suriname",
            year: 1992,
        },
        {
            name: "Katelynn Reichert",
            job: "Customer Brand Designer",
            country: "Chad",
            year: 1972,
        },
        {
            name: "Ibrahim Stroman",
            job: "Direct Marketing Planner",
            country: "Qatar",
            year: 1984,
        },
        {
            name: "Edyth McCullough",
            job: "Human Integration Manager",
            country: "Turks and Caicos Islands",
            year: 1992,
        },
    ];

    return (
        <React.Fragment>
            <BreadCrumb title="Datatables" pageType="table" />

            {/* <div className="flex flex-col gap-4 min-h-[calc(100vh-212px)]">
                <div className="grid grid-cols-1 gap-4">
                    <div className="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                        <h2 className="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">
                            Data Table
                        </h2>
                        <div className="space-y-4 overflow-auto">
                            <TableContainer
                                columns={columns}
                                data={datatabledata}
                                isGlobalFilter={true}
                                customPageSize={5}
                                isSelect={true}
                                isPagination={true}
                                divclassName="overflow-auto"
                                tableclassName="min-w-[640px] w-full"
                            />
                        </div>
                    </div>
                </div>
            </div> */}
        </React.Fragment>
    );
};

export default Users;