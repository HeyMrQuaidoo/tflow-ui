import { FC } from "react"
import { CustomButton } from ".."
import { ModalLayoutProps } from "@/interfaces"


export const ModalLayout: FC<ModalLayoutProps> = ({ id, isModalOpen, onCloseModal, nonDismissable, positionClasses, bodyClasses, children, footer, actionBtnOnly=false, actionBtnText, handleSubmit, isLoading, isDisabled, isValid }) => {
    const handleOnClose = (e: any) => {
        if (e.target.id === id) onCloseModal();
    }
    
    return (
        <div id={id} onClick={!nonDismissable ? handleOnClose : undefined}
            className={`fixed inset-0 flex ${positionClasses ?? "items-center justify-center"} p-4 bg-black bg-opacity-40 z-40 transition-opacity duration-300 ${positionClasses} ${
                isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
            <div
                className={`${bodyClasses ?? "md:w-3/5 lg:w-2/5"} bg-white text-textPrimary max-h-[90vh] overflow-y-auto rounded-2xl transform transition-transform duration-300 ${
                    isModalOpen ? "animate-fade-in" : "animate-fade-out"
                }`}
            >
                {children}
                {footer && (
                    <>
                    <hr />
                    <div className="p-4 w-full flex items-center gap-2.5">
                        {!actionBtnOnly && (
                            <CustomButton 
                                variant="custom"
                                btnType="button"
                                label="Cancel"
                                clickEvent={onCloseModal}
                                border fullWidth
                            />
                        )}
                        <CustomButton 
                            variant="primary"
                            btnType="button"
                            label={actionBtnText ?? "Save"} fullWidth
                            clickEvent={handleSubmit}
                            isLoading={isLoading} isDisabled={isDisabled ?? !isValid}
                        />
                    </div>
                    </>
                )}
            </div>
        </div>
    );
}
