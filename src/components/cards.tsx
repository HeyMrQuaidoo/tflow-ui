// global imports
import clsx from "clsx"
import { FC } from "react"
import ApexCharts from "react-apexcharts";

// local imports
import { currencySymbol } from "@/config"
import { DashboardBannerProps, DashboardCardsProps, StatsCardProps } from "@/interfaces";


export const StatsCard: FC<StatsCardProps> = ({ icon: Icon, bgColour, iconColour, iconBg, title, value, currency, percentageInfo, clickEvent }) => {
    const positivePercentage = percentageInfo ? Number(percentageInfo.value) > 0 : "";
    const negativePercentage = percentageInfo ? Number(percentageInfo.value) < 0 : "";
    
    return (
        <section role={clickEvent ? "button" : "none"} onClick={clickEvent} className={`flex flex-row items-center flex-1 gap-4 py-4 px-6 ${bgColour ?? "bg-white"} border border-strokeSoft rounded-xl shrink-0`}>
            {Icon && (
                <div className={clsx(`bg-${iconBg}`, `p-3 w-fit ${iconBg === "white" ? "border border-strokeSoft" : "border-none"} rounded-full`)}>
                    <Icon className={`text-${iconColour}`} />
                </div>
            )}
            <div className={`w-full flex flex-col gap-1`}>
                <p className="text-sm text-textMuted text-nowrap">{title}</p>
                <div 
                    className={
                        percentageInfo
                            ? "flex flex-wrap items-center gap-2.5" 
                            : "block"
                    }
                >
                    <div className={`${percentageInfo ? "text-2xl 2xl:text-3xl" : "text-2xl"} text-textBase font-medium`}>
                        {currency 
                            ? `${currencySymbol}${value}` 
                            : value || 0
                        }
                    </div>
                    {percentageInfo && (
                        <span 
                            className={`
                                text-sm ${negativePercentage 
                                    ? "bg-errorLight text-errorDark" : positivePercentage 
                                    ? "bg-successLight text-successDark" : "bg-strokeSoft"
                                } py-0.5 px-2 text-xs font-semibold rounded-full
                            `}
                        >{positivePercentage && "+"}{percentageInfo.value}%</span>
                    )}
                </div>
            </div>
        </section>
    );
}

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
