import { FC } from "react"
import avatar from "/avatar.png"
import { useUIModal } from "@/context"
import { RiNotification3Line } from "react-icons/ri"


export const Navbar: FC = () => {
    const { toggleNotificationModal } = useUIModal();
    
    return (
        <nav className="sticky md:h-20 w-full bg-white text-textPrimary border-b border-b-strokeSoft py-3 px-8 flex flex-wrap items-center justify-between gap-y-4 gap-x-12 z-20 overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-2.5">
                <div style={{ backgroundImage: `url(${avatar})`, backgroundSize: "cover", backgroundPosition: "center" }} className="w-10 h-10 bg-black flex items-center justify-center rounded-full shrink-0"></div>
                <div>
                    <p className="text-base font-medium">Admin</p>
                    <p className="text-sm text-textMuted">Welcome back</p>
                </div>
            </div>
            <RiNotification3Line role="button" onClick={toggleNotificationModal} />
        </nav>
    );
}
