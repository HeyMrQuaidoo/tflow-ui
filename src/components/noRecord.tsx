import { FC } from "react"
import blank from "/emptyState.svg"
import { NoRecordProps } from "@/interfaces"


export const NoRecords: FC<NoRecordProps> = ({ message, genericMessage, iconSize, altText }) => {
    return (
        <div className="flex justify-center">
            <div className="grid gap-4 place-items-center py-4">
                <img src={blank} width={iconSize} alt={altText} />
                <p className={`${iconSize < 100 ? "text-xs" : "text-sm"} text-stoneGrey text-center`}>{genericMessage ? "We couldn't find any record matching your search." : message}</p>
            </div>
        </div>
    );
}
