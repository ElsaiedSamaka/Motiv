import { useState } from "react";
// ApexCharts wont work for server component by default so we have to use dynamic import in order
// to lazely load it
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ChartCard = () => {
  const [series, setSeries] = useState([20]);
  const [options] = useState({
    chart: {
      height: 150,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: "70%",
          background: "",
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: "back",
          dropShadow: {
            enabled: false,
            top: 3,
            left: 0,
            blur: 0,
            opacity: 0.24,
          },
        },
        track: {
          background: "#fa0000a9",
          strokeWidth: "67%",
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: false,
            top: -3,
            left: 0,
            blur: 0,
            opacity: 0.35,
          },
        },

        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: "#888",
            fontSize: "17px",
          },
          value: {
            formatter: function (val) {
              return parseInt(val);
            },
            color: "#111",
            fontSize: "36px",
            show: true,
          },
        },
      },
    },
    fill: {
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: ["#ABE5A1"],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Percent"],
  });

  return (
    <div id="card">
      <div id="chart">
        <ApexChart
          options={options}
          series={series}
          type="radialBar"
          height={350}
        />
      </div>
    </div>
  );
};

export default ChartCard;
