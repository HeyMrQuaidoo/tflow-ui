import { FC } from "react"
import { CustomTable } from "@/components"
import { tableColumns, tableData } from "@/config/tableColumns"


export const Dashboard: FC = () => {
    return (
        <div className="p-8">
            <CustomTable
                columns={tableColumns}
                data={tableData}
            />
        </div>
    );
}