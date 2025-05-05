import { FC } from "react"
import { PuffLoader } from "react-spinners"
import { CustomButtonProps } from "@/interfaces"


export const CustomButton: FC<CustomButtonProps> = ({ variant, btnType, label, iconLeft, iconRight, border, clickEvent, isLoading, isDisabled, customStyle, fullWidth }) => {
    return (
        <>
        <button 
            type={btnType} 
            style={{ padding: "0.6em 1.2em" }}
            className={`
                ${fullWidth ? "flex-1" : "w-fit"} 
                text-sm 
                flex items-center justify-center 
                ${isLoading ? "gap-2" : "gap-1.5"} 
                rounded-lg
                ${
                  border
                    ? "bg-white text-textMuted border border-strokeSoft"
                    : (isLoading || isDisabled) && variant === "secondary"
                    ? "bg-white border-2 border-strokeSoft text-textMuted cursor-not-allowed"
                    : (isLoading || isDisabled)
                    ? "bg-strokeSoft text-textMuted cursor-not-allowed"
                    : variant === "primary"
                    ? "bg-primary text-white"
                    : variant === "secondary"
                    ? "bg-white border-2 border-primary text-primary"
                    : customStyle ?? "bg-white text-primary"
                }
            `}              
            onClick={() => {
                if (clickEvent) {
                    clickEvent();
                }
            }}
            disabled={isLoading || isDisabled}
        >
            {iconLeft} <span>{label}</span> {iconRight}
            {isLoading && (
                <PuffLoader 
                    size={25}
                    loading={isLoading}
                    color="white"
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            )}
        </button>
        </>
    );
}
