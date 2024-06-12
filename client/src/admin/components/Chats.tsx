/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export const DonutChart = ({ seriesValue, labels, title }: any) => {
    const options: ApexOptions = {
        chart: {
            height: 320,
            type: "radialBar", // Ensure the type is one of the defined types
        },
        colors: ["#6a69f5", "#50cd89", "#323a46"],
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: "22px",
                    },
                    value: {
                        fontSize: "16px",
                    },
                    total: {
                        show: true,
                        label: "Total",
                        color: "#000000",
                        formatter: function (): any {
                            return 709;
                        },
                    },
                },
            },
        },
        labels: labels
    };
    const series = seriesValue
    return (
        <div className="border rounded">
            <h1 className="header p-3">{title}</h1>
            <ReactApexChart
                dir="ltr"
                options={options}
                series={series}
                type="donut"
                height={320}
            />
        </div>
    );
};


// export const DoghnutChart = ({ seriesValue, labels }: any) => {
//     const options: ApexOptions = {
//         chart: {
//             height: 320,
//             type: "radialBar", // Ensure the type is one of the defined types
//         },
//         colors: ["#6a69f5", "#50cd89", "#323a46"],
//         plotOptions: {
//             radialBar: {
//                 dataLabels: {
//                     name: {
//                         fontSize: "22px",
//                     },
//                     value: {
//                         fontSize: "16px",
//                     },
//                     total: {
//                         show: true,
//                         label: "Total",
//                         color: "#000000",
//                         formatter: function (): any {
//                             return 709;
//                         },
//                     },
//                 },
//             },
//         },
//         labels: labels
//     };
//     const series = seriesValue
//     return (
//         <div className="border">
//             <ReactApexChart
//                 dir="ltr"
//                 options={options}
//                 series={series}
//                 type="donut"
//                 height={320}
//             />
//         </div>
//     );
// };


export const LineChart = ({title}: any) => {
    const series = [
        {
            name: "Current Week",
            data: [50, 100, 200, 170, 250, 275, 280],
        },
    ];
    const options: ApexOptions = {
        chart: {
            height: 300,
            type: "area",
            fontFamily: "Inter, sans-serif",
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            curve: "smooth",
            width: 3,
            lineCap: "square",
        },
        // dropShadow: {
        //     enabled: true,
        //     opacity: 0.8,
        //     blur: 10,
        //     left: -7,
        //     top: 22,
        // },
        colors: ["#6a69f5"],
        markers: {
            discrete: [
                {
                    seriesIndex: 0,
                    dataPointIndex: 4,
                    fillColor: "#323a46",
                    strokeColor: "#fff",
                    size: 6,
                },
                {
                    seriesIndex: 1,
                    dataPointIndex: 5,
                    fillColor: "#A8C5DA",
                    strokeColor: "#fff",
                    size: 6,
                },
            ],
        },
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        xaxis: {
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            crosshairs: {
                show: true,
            },
            labels: {
                offsetX: 0,
                offsetY: 5,
                style: {
                    fontSize: "12px",
                    cssClass: "apexcharts-xaxis-title",
                },
            },
        },
        yaxis: {
            tickAmount: 5,
            labels: {
                offsetX: -10,
                offsetY: 0,
                style: {
                    fontSize: "12px",
                    cssClass: "apexcharts-yaxis-title",
                },
            },
            opposite: false,
        },
        grid: {
            borderColor: "#e8e8e8",
            strokeDashArray: 7,
            xaxis: {
                lines: {
                    show: false,
                },
            },
            yaxis: {
                lines: {
                    show: true,
                },
            },
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            },
        },
        legend: {
            show: false,
        },
        tooltip: {
            marker: {
                show: true,
            },
            x: {
                show: false,
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                inverseColors: !1,
                opacityFrom: 0,
                opacityTo: 0,
                stops: [100, 100],
            },
        },
    };
    return (
        <div className="border rounded">
            <h1 className="header p-3">{title}</h1>
            <ReactApexChart
                type="area"
                series={series}
                options={options}
                id="linechart"
                dir="ltr"
                height={307}
            />
        </div>
    );
};