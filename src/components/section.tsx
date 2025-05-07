import { FC } from "react"
import avatar from "/avatar.png"
import { CustomContainerProps, ProfileSectionProps } from "@/interfaces"
import { RiArrowRightSLine } from "react-icons/ri"


export const MainWrapper: FC<CustomContainerProps> = ({ children }) => {
    return (
        <div className="p-8 flex flex-col gap-6">{children}</div>
    );
}


export const ProfileSection: FC<ProfileSectionProps> = ({ authorisedUser, clickEvent }) => {
    return (
        <div role="button" onClick={clickEvent} className={`w-full mb-3 bg-primaryMedium flex items-center gap-3 rounded-md`}>
            <div style={{ backgroundImage: `url(${avatar})`, backgroundSize: "cover", backgroundPosition: "center" }} className="bg-primary w-10 h-10 bg-customBlue p-2 rounded-full shrink-0"></div>
            <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">{authorisedUser?.userName}</p>
                <p className="text-xs font-normal">{authorisedUser?.email}</p>
            </div>
            <RiArrowRightSLine role="button" className="text-textSecondary shrink-0 pr-1" />
        </div>
    );
}


export const SoftBorderedContainer: FC<CustomContainerProps> = ({ children, gap, scrollbarHide }) => {
    return (
      <div className={`flex-grow h-fit bg-white p-4 ${gap ? "flex flex-col flex-wrap gap-4" : "grid"} rounded-2xl border border-strokeSoft overflow-x-auto${scrollbarHide ? " scrollbar-hide" : ""}`}>
        {children}
      </div>
    );
}
