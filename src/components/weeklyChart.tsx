import React from "react";
import ApexCharts from "react-apexcharts";
import { WeeklyChartProps } from "@/interfaces";

export const WeeklyChart: React.FC<WeeklyChartProps> = ({ headerTitle, chartData }) => {
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "line",
      toolbar: { show: false },
      animations: {
        enabled: true,
        speed: 800,
      },
    },
    stroke: {
      width: [0, 3], // Bar width = 0, line = 3
    },
    plotOptions: {
      bar: {
        columnWidth: "45%",
        borderRadius: 5,
      },
    },
    xaxis: {
      categories: chartData[0].data.map((_, index) => `Day ${index + 1}`),
      labels: {
        style: {
          colors: "#9CA3AF",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: true,
      borderColor: "#E5E7EB",
      strokeDashArray: 4,
    },
    colors: ["#2563EB", "#10B981"], // Bar and line colors
    tooltip: {
      enabled: true,
      theme: "dark",
    },
  };

  const series = [
    {
      name: "Transactions",
      type: "bar",
      data: chartData[0].data,
    },
    {
      name: "Trend Line",
      type: "line",
      data: chartData[0].data,
    },
  ];

  return (
    <div className="p-3 border rounded-lg shadow-sm bg-white w-full">
      <div className="text-base font-semibold text-gray-700 mb-2">{headerTitle}</div>
      <ApexCharts
        options={options}
        series={series}
        type="line"
        height={300}
      />
    </div>
  );
};
