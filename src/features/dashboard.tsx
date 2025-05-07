// global imports
import { Dayjs } from "dayjs"
import { FC, useState } from "react"
import { RiAddLine } from "react-icons/ri"

// local imports
import { tableColumns, tableData } from "@/config/tableColumns"
import { CustomTable, FilterSection, MainWrapper, SoftBorderedContainer, StatsCard } from "@/components"
import { cardItems } from "@/data"


export const Dashboard: FC = () => {
    const [_, setSelectedDate] = useState<Dayjs | null>(null);
    
    const handleDateChange = (value: Dayjs | null) => {
        setSelectedDate(value);
    }
    const handleClearDate = () => {
        setSelectedDate(null);
    }

    const onDeleteRecord = (id: string) => {
        console.log(id);
    }

    return (
        <MainWrapper>
            <div className="grid grid-cols-3 2xl:grid-cols-6 gap-4">
                {cardItems.map((item, index) => (
                    <StatsCard key={index} {...item} />
                ))}
            </div>
            <SoftBorderedContainer gap>
                <FilterSection
                    datepicker={{
                        value: true,
                        onDateChange: handleDateChange,
                        onClearDate: handleClearDate
                    }}
                    regularButton={{
                        btnType: "button", label: "Add Button",
                        variant: "primary", iconLeft: RiAddLine, clickEvent: ()=>{},
                    }}
                />
                <CustomTable
                    columns={tableColumns(onDeleteRecord)}
                    data={tableData}
                />
            </SoftBorderedContainer>
        </MainWrapper>
    );
}