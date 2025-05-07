// global imports
import { FC } from "react"
import { RiSearch2Line } from "react-icons/ri"

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DatePicker } from "@mui/x-date-pickers"

import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField"
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker"
import { DemoContainer } from "@mui/x-date-pickers/internals/demo"

// local imports
import { CustomDateRangePickerProps, CustomTableFilterProps } from "@/interfaces"
import { CustomButton } from "."
import { commonTextFieldProps, dateRangePickerProps, shortcutItems } from "@/config"


export const FilterSection: FC<CustomTableFilterProps> = ({ searchItem = { value: true }, datepicker, daterangepicker, regularButton }) => {
    return (
        <section
            className={`flex flex-nowrap items-center gap-2.5 text-sm my-1`}
        >
            {searchItem.value && (
                <div
                    className={`bg-white h-[40px] flex flex-grow items-center p-2 gap-1 text-textPrimary rounded-lg border border-strokeSoft`}
                >
                    <RiSearch2Line
                        size={20}
                        className="text-textSoft flex-shrink-0 w-4 h-4"
                    />
                    <div className="flex-grow">
                    <input
                        type="text"
                        placeholder={searchItem.placeholder ?? "Search..."}
                        className="bg-white sm:w-auto lg:w-full border-none outline-none px-1.5 text-sm"
                        onChange={
                            searchItem.onSearchChange && ((e) => searchItem?.onSearchChange?.(e.target.value))
                        }
                    />
                    </div>
                </div>
            )}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                {datepicker && (
                    <DatePicker
                        slotProps={{
                            textField: commonTextFieldProps,
                            field: { clearable: true, onClear: datepicker.onClearDate },
                        }}
                        onChange={datepicker.onDateChange}
                    />
                )}
            </LocalizationProvider>
            {daterangepicker && (
                <CustomDateRangePicker
                    selectedDateRange={daterangepicker.selectedDateRange}
                    onDateRangeChange={daterangepicker.onDateRangeChange}
                />
            )}
            {Array.isArray(regularButton)
                ? regularButton.map((button, index) => (
                    <CustomButton
                        key={index}
                        btnType={button.btnType}
                        variant={button.variant}
                        label={button.label}
                        iconLeft={button.iconLeft}
                        clickEvent={button.clickEvent}
                        border={button.border}
                    />
                    ))
                : regularButton && (
                    <CustomButton
                    btnType={regularButton.btnType}
                        variant={regularButton.variant}
                        label={regularButton.label}
                        iconLeft={regularButton.iconLeft}
                        clickEvent={regularButton.clickEvent}
                    />
                )
            }
        </section>
    );
}


export const CustomDateRangePicker: FC<CustomDateRangePickerProps> = ({ selectedDateRange, onDateRangeChange }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div>
                <DemoContainer components={["SingleInputDateRangeField"]} sx={{ paddingTop: 0, marginTop: 0 }}>
                    <DateRangePicker 
                        value={selectedDateRange ?? [null, null]}
                        onChange={(newValue) => {
                            if (newValue !== selectedDateRange) {
                                onDateRangeChange(newValue);
                            }
                        }}
                        slotProps={{
                            shortcuts: { items: shortcutItems },
                            textField: { ...commonTextFieldProps, ...dateRangePickerProps, fullWidth: true },
                        }}
                        slots={{ field: SingleInputDateRangeField }}
                    />
                </DemoContainer>
            </div>
        </LocalizationProvider>
    );
}
