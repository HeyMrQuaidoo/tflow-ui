import Select from "react-select"
import { FC, ReactNode } from "react"
import { customStyles } from "@/config"
import { CustomSelectOption, PaginationProps } from "@/interfaces"
import { RiArrowLeftDoubleLine, RiArrowLeftSLine, RiArrowRightDoubleLine, RiArrowRightSLine } from "react-icons/ri";


export const Pagination: FC<PaginationProps> = ({
    totalRows,
    rowsPerPage,
    currentPage,
    onPageChange,
    onRowsPerPageChange
}) => {
        
    const totalPages = Math.ceil(totalRows / rowsPerPage);
    const firstPage = currentPage === 1;
    const lastPage = currentPage === totalPages;

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const rowsPerPageOptions: CustomSelectOption[] = [7, 10, 15, 20, 25, 30].map((number) => ({
        label: `${number} / page`,
        value: number,
        isDisabled: totalRows < number
    }));

    const IconButton = ({ icon, isDisabled, clickEvent }: { icon: ReactNode, isDisabled?: boolean, clickEvent: ()=>void }) => (
        <button type="button" disabled={isDisabled} onClick={clickEvent} className="bg-white">{icon}</button>
    )

    return (
        <>
            <div className="px-4 flex items-center justify-between text-sm">
                <span className="text-textMuted">Page {currentPage} of {totalPages}</span>
                <div className="flex items-center">
                    <div className="flex items-center">
                        <IconButton
                            isDisabled={firstPage}
                            clickEvent={() => onPageChange(1)}
                            icon={<RiArrowLeftDoubleLine />}
                        />
                        <IconButton
                            isDisabled={firstPage}
                            clickEvent={() => onPageChange(currentPage - 1)}
                            icon={<RiArrowLeftSLine />}
                        />
                    </div>
                    {pageNumbers.map((page) => (
                        <div
                            key={page}
                            role="button"
                            onClick={() => onPageChange(page)}
                            className={`px-2.5 py-1 mx-1 ${currentPage === page ? `bg-greyMist` : "bg-white"} border border-strokeSoft rounded-md`}
                        >
                            {page}
                        </div>
                    ))}
                    <div className="flex items-center">
                        <IconButton
                            isDisabled={lastPage}
                            clickEvent={() => onPageChange(currentPage + 1)}
                            icon={<RiArrowRightSLine />}
                        />
                        <IconButton
                            isDisabled={lastPage}
                            clickEvent={() => onPageChange(totalPages)}
                            icon={<RiArrowRightDoubleLine />}
                        />
                    </div>
                </div>
                <div className="relative p-0.5">
                    <Select 
                        inputValue={""}
                        styles={customStyles}
                        options={rowsPerPageOptions}
                        menuPortalTarget={document.body}
                        value={rowsPerPageOptions.find(option => option.value === rowsPerPage)}
                        onChange={(option) => {
                            if (option) {
                                onRowsPerPageChange(option as CustomSelectOption);
                            }
                        }}
                    />
                </div>
            </div>
        </>
    );
}
