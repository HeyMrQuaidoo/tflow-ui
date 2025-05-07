// global imports
import { RiMoneyDollarCircleLine, RiArrowUpLine, RiArrowDownLine, RiGroupLine, RiShoppingCartLine } from "react-icons/ri"

// local imports
import { StatsCardProps } from "@/interfaces"


export const cardItems: StatsCardProps[] = [
    {
        icon: RiMoneyDollarCircleLine,
        title: "Revenue",
        value: "150,200",
        currency: true,
        bgColour: "bg-white",
        iconBg: "white",
        iconColour: "primary",
        percentageInfo: { value: "12.4", note: "since last month" },
        clickEvent: () => console.log("Revenue clicked"),
    },
    {
        icon: RiGroupLine,
        title: "New Users",
        value: "3,456",
        iconBg: "green-100",
        iconColour: "green-600",
        percentageInfo: { value: "-4.8", note: "since last week" },
    },
    {
        icon: RiShoppingCartLine,
        title: "Orders",
        value: "876",
        iconBg: "blue-100",
        iconColour: "blue-600",
        percentageInfo: { value: "2.3", note: "past 24 hrs" },
    },
    {
        icon: RiArrowUpLine,
        title: "Growth Rate",
        value: "5.67%",
        iconBg: "indigo-100",
        iconColour: "indigo-600",
    },
    {
        title: "Pending Approvals",
        value: "19",
        bgColour: "bg-neutral-100",
    },
    {
        icon: RiArrowDownLine,
        title: "Churn Rate",
        value: "3.2%",
        iconBg: "red-100",
        iconColour: "red-500",
        percentageInfo: { value: "-1.2", note: "from Q1" },
    },
];
