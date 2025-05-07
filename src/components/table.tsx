import { useState } from "react"
import { Pagination } from "./pagination"
import { CustomSelectOption, CustomTableProps } from "@/interfaces"


export const CustomTable = <T extends { [key: string]: any }>({ 
    data, columns, rowClassName, tableClassName, headerClassName, onRowClick, onCellClick, showPagination=true  
}: CustomTableProps<T>) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState<number>(5);
    const displayPagination = showPagination && data?.length > 0;
    
    const truncateText = (text: string, maxLength: number = 12) => {
        if (text) {
            if (text.length <= maxLength) return text;
            return `${text.substring(0, maxLength)}...`;
        }
    }

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    }
    const handleRowsPerPageChange = (selectedOption: CustomSelectOption | null) => {
        if (selectedOption) {
            setRowsPerPage(selectedOption.value);
            setCurrentPage(1);
        }
    }

    const startIdx = (currentPage - 1) * rowsPerPage;
    const endIdx = startIdx + rowsPerPage;
    const currentData = data ? data.slice(startIdx, endIdx) : [];
    
    return (
        <section className={`bg-white ${displayPagination ? "grid gap-4" : "block"} rounded-lg`}>
            <table className={`min-w-full bg-white ${tableClassName}`}>
                <thead className="bg-blue-600 text-white">
                    <tr className={`${headerClassName ?? ""} text-sm rounded-lg`}>
                        {columns.map((col, index) => (
                            <th key={index} className={`py-2.5 px-4 font-medium border-b border-gray ${col.className}`}>
                                {col.title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {currentData?.map((item, index) => (
                        <tr key={index} className={`text-sm capitalize ${rowClassName ? rowClassName(item, index) : index % 2 !== 0 ? "bg-lightGrey" : ""} ${onRowClick ? "cursor-pointer" : "cursor-default"}`} onClick={() => onRowClick && onRowClick(item)}>
                            {columns.map((col, colIndex) => {
                                const cellContent = col.dataIndex === "id" 
                                                        ? truncateText(item[col.dataIndex]) 
                                                        : (col.dataIndex === "body" || col.dataIndex === "details") 
                                                        ? truncateText(item[col.dataIndex], 50)  
                                                        : item[col.dataIndex];
                                return (
                                    <td 
                                        key={colIndex} 
                                        className={`p-4 border-b border-b-gray 
                                            ${col.className} ${col.cellClassName ? col.cellClassName(item[col.dataIndex], item, index) : ""} 
                                        `}
                                        onClick={() => onCellClick && onCellClick(item)}
                                    >
                                        {col.render ? col.render(cellContent !== null ? cellContent : "", item) : cellContent}
                                    </td>
                                )
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
            {displayPagination && (
                <Pagination 
                    totalRows={data.length}
                    rowsPerPage={rowsPerPage}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                    onRowsPerPageChange={handleRowsPerPageChange}
                />
            )}
        </section>
    );
}