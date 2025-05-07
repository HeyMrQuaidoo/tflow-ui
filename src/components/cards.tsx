import React from "react";
import ApexCharts from "react-apexcharts";
import { DashboardBannerProps, DashboardCardsProps } from "@/interfaces";

export const Cards: React.FC<DashboardCardsProps> = ({
  headerTitle,
  cardPercentage,
  cardValue,
  series,
}) => {
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "line",
      toolbar: { show: false },
      sparkline: { enabled: true },
      animations: {
        enabled: true,
        speed: 800,
      },
    },
    stroke: {
      curve: "smooth",
      width: 3,
      colors: ["#5FFF5F"],
    },
    markers: {
      size: 3,
      colors: ["#0D1B2A"],
      strokeColors: "#5FFF5F",
      strokeWidth: 2,
      hover: {
        size: 6,
      },
    },
    tooltip: {
      enabled: true,
      theme: "dark",
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        gradientToColors: ["#5FFF5F"],
        stops: [0, 100],
      },
    },
  };


  return (
    <div className="flex gap-2 h-auto rounded-2xl text-white mb-7">
      <div className="w-full bg-blue-600 rounded-2xl p-3 flex flex-col justify-between">
        <div className="flex justify-between">
          <h2 className="text-md">{headerTitle}</h2>
          <h2 className="text-xl text-green-500 font-bold">
            {cardPercentage}%
          </h2>
        </div>

        <h2 className="text-xl">GHC {cardValue}</h2>

        <div className="w-[70%] h-12 mt-1">
          <ApexCharts
            options={options}
            series={series}
            type="line"
            height={50}
          />
        </div>
      </div>
    </div>
  );
};

export const DashboardBanner: React.FC<DashboardBannerProps> = ({
  chartCardData,
}) => {
  return (
    <>
      <div className="flex flex-wrap w-full gap-10">
      {chartCardData.map((item, index) => (
        <Cards
          key={index}
          headerTitle={item.headerTitle}
          cardPercentage={item.cardPercentage}
          cardValue={item.cardValue}
          chartData={item.chartData}
          series={item.series}
        />
      ))}
      </div>
    </>
  );
};
