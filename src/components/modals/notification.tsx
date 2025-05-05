import { FC } from "react"
import moment from "moment"
import { NoRecords } from ".."
import { useUIModal } from "@/context"
import { ModalLayout } from "./layout"


export const NotificationModal: FC = () => {
    const initials = "TA";
    const notifications: any[] = [];
    const { isNotificationModalOpen, toggleNotificationModal } = useUIModal();
    
    return (
        <ModalLayout 
            id="notification-overlay" 
            isModalOpen={isNotificationModalOpen} 
            onCloseModal={toggleNotificationModal} 
            positionClasses="justify-end items-start top-[4.2rem] md:top-20"
            bodyClasses="md:w-2/5 2xl:w-1/4 md:max-w-[calc(100%-18rem)]"
        >
            <div className="py-4 px-8 flex items-center gap-10 justify-between">
                <h2 className="text-base font-medium">Notifications</h2>
                <div className="flex items-center gap-4">
                    <p className="text-sm text-primary font-medium">Mark all as read</p>
                    <span role="button" onClick={toggleNotificationModal} className="text-xl text-textSecondary">&times;</span>
                </div>
            </div>
            <hr />
            <div className="py-5 px-8">
                {notifications?.length > 0 ? (
                    <>
                    {notifications.map((notification: any, index: number) => {
                    return (
                        <div key={index} className="p-2 flex items-center gap-3.5 border-b border-b-strokeSoft">
                        <span className="p-2 bg-strokeSofter w-10 h-10 flex items-center justify-center font-medium rounded-full">{initials}</span>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm font-medium">{notification?.body}</p>
                            <span className="text-xs text-textSecondary">{moment(notification?.date).format("MMMM, YYYY")}</span>
                        </div>
                        </div>
                        );
                    })}
                    </>
                ) : (
                    <NoRecords message={"No notifications yet"} iconSize={120} altText={"no-notifications"} />
                )}
            </div>
        </ModalLayout>
    );
}
