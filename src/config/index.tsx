// global imports
import { StylesConfig } from "react-select"
import { RiCalendarLine, RiDashboardLine, RiMacLine } from "react-icons/ri"

import dayjs, { Dayjs } from "dayjs"
import { DateRange } from "@mui/x-date-pickers-pro"
import InputAdornment from "@mui/material/InputAdornment"
import { PickersShortcutsItem } from "@mui/x-date-pickers"


export const defaultIconSize = 18;
export const defaultIconLgSize = 20;
export const defaultIconXlSize = 32;
export const currencySymbol = "GH₵";

export const customStyles: StylesConfig = {
    control: (base: any, state: { isFocused: any; isDisabled: any; }) => ({
        ...base,
        height: "40px",
        minHeight: "40px",
        borderRadius: "8px",
        borderColor: state.isFocused ? "#4F46E5" : "#E2E4E9",
        backgroundColor: state.isDisabled ? "#F6F8FA" : "#FFF",
        display: "flex",
        alignItems: "center",
        padding: "0 8px",
        width: "auto",
        minWidth: "100px",
        boxShadow: state.isFocused ? "0 0 0 2px rgba(79, 70, 229, 0.5)" : "none",
    }),
    valueContainer: (base: any) => ({
        ...base,
        padding: "0 6px",
        fontSize: "14px",
    }),
    placeholder: (provided: any) => ({
        ...provided,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        fontSize: "14px",
    }),
    indicatorSeparator: () => ({
        display: "none",
    }),
    indicatorsContainer: (base: any) => ({
        ...base,
        padding: "0 4px",
    }),
    menu: (provided: any) => ({
        ...provided,
        zIndex: 999,
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    }),
    menuList: (provided: any) => ({
        ...provided,
        padding: "0",
        fontSize: "14px",
    }),
    option: (base: any, state: { isSelected: any; isFocused: any; isDisabled: any; }) => ({
        ...base,
        padding: "8px 12px",
        backgroundColor: state.isSelected ? "#E5E7EB" : state.isFocused ? "#F3F4F6" : "#FFF",
        color: state.isDisabled ? "#9CA3AF" : "#111827",
        cursor: state.isDisabled ? "not-allowed" : "pointer",
    }),
}

export const sidebarItems = [
    {
        path: "/overview",
        icon: RiDashboardLine,
        activeIcon: RiDashboardLine,
        label: "Overview"
    },
    {
        path: "/Services",
        icon: RiDashboardLine,
        activeIcon: RiDashboardLine,
        label: "Services"
    },
    {
        path: "/overview",
        icon: RiDashboardLine,
        activeIcon: RiDashboardLine,
        label: "Overview"
    },
    {
        path: "/overview",
        icon: RiDashboardLine,
        activeIcon: RiDashboardLine,
        label: "Overview"
    },
    {
        path: "/random",
        icon: RiMacLine,
        activeIcon: RiMacLine,
        label: "SubItem Link",
        subItems: [
            {
                path: "/random/link1",
                label: "Link 1",
            },
            {
                path: "/random/link2",
                label: "Link 2",
            },
        ],
    },
];


// ---------- table config ---------- //
export const commonTextFieldProps = {
    size: "small" as const,
    sx: {
        "& .MuiOutlinedInput-root": {
            borderRadius: "1rem",
            fontSize: "14px",
            background: "white",
        },
        "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: "1rem",
        },
        "& input": {
            fontSize: "14px",
            width: "auto",
            minWidth: 0,
        },
        "&.MuiTextField-root": {
            minWidth: "auto", 
            width: "auto",
        },
        "&.MuiPickersTextField-root": {
            minWidth: "auto",
            width: "auto",
        },
    },
};


export const dateRangePickerProps = {
    InputProps: {
        startAdornment: (
            <InputAdornment position="start">
                <RiCalendarLine size={20} className="text-textSoft" />
            </InputAdornment>
        ),
    },
};


export const shortcutItems: PickersShortcutsItem<DateRange<Dayjs>>[] = [
    {
      label: "Today",
      getValue: () => {
        const today = dayjs();
        return [today, today];
      },
    },
    {
      label: "Last 7 Days",
      getValue: () => {
        const today = dayjs();
        return [today.subtract(7, "day"), today];
      },
    },
    {
        label: "Last 30 Days",
        getValue: () => {
          const today = dayjs();
          return [today.subtract(30, "day"), today];
        },
    },
    {
        label: "Last 3 Months",
        getValue: () => {
          const today = dayjs();
          return [today.subtract(3, "month"), today];
        },
    },
    {
        label: "Last 12 Months",
        getValue: () => {
          const today = dayjs();
          return [today.subtract(12, "month"), today];
        },
    },
    {
        label: "Month to Date",
        getValue: () => {
          const today = dayjs();
          return [today.startOf("month"), today];
        },
    },
    {
        label: "Year to Date",
        getValue: () => {
          const today = dayjs();
          return [today.startOf("year"), today];
        },
    },
    {
        label: "All Time",
        getValue: () => {
          return [null, null];
        },
    },
    {
      label: "Custom",
      getValue: () => {
        return [null, null]; 
      },
    },
];
// ---------- end of table config ---------- //
