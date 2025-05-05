import { FC } from "react"
import avatar from "/avatar.png"
import { useUIModal } from "@/context"
import { useAuthStore } from "@/store"
import { ModalLayout } from "./layout"
import { defaultIconSize } from "@/config"
import { Link, useNavigate } from "react-router-dom"
import { RiLayoutGridLine, RiLogoutBoxLine } from "react-icons/ri"


export const MiniProfileModal: FC = () => {
    const { authorisedUser } = useAuthStore();
    const navigate = useNavigate();

    const logout = () => navigate("/");
    const { isUserProfileModalOpen, toggleUserProfileModalOpen } = useUIModal();
        
    return (
        <ModalLayout 
            id="profile-overlay" 
            isModalOpen={isUserProfileModalOpen} 
            onCloseModal={toggleUserProfileModalOpen} 
            positionClasses="justify-start items-end left-[18rem]"
            bodyClasses="absolute right-3 left-2 bottom-4 w-72"
        >
            <div className="py-2.5 px-4" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <div className="flex flex-col gap-1.5 text-sm text-black py-2">
                    <div className={`flex items-center gap-3`}>
                        <div style={{ backgroundImage: `url(${avatar})`, backgroundSize: "cover", backgroundPosition: "center" }} className="bg-primary w-10 h-10 bg-black p-2 rounded-full shrink-0"></div>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm font-medium">{authorisedUser?.userName}</p>
                            <p className="text-xs font-normal text-textMuted">{authorisedUser?.email}</p>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <Link to={""} role="menuitem" onClick={toggleUserProfileModalOpen} className="flex items-center space-x-2.5 py-1.5 block">
                            <RiLayoutGridLine size={defaultIconSize} className="text-textMuted" />
                            <span className="text-black">Activity Log</span>
                        </Link>
                        <Link to={"/"} role="menuitem" onClick={logout} className="flex items-center space-x-2.5 py-1.5 block">
                            <RiLogoutBoxLine size={defaultIconSize} className="text-textMuted" />
                            <span className="text-black">Logout</span>
                        </Link>
                    </div>
                </div>
            </div>
        </ModalLayout>
    );
}
