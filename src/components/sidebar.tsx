import { ProfileSection } from "."
import { useUIModal } from "@/context"
import { useAuthStore } from "@/store"
import { FC, useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { defaultIconSize, defaultIconXlSize, sidebarItems } from "@/config"
import { RiAddLine, RiArrowDownSLine, RiArrowRightSLine, RiRemixiconLine } from "react-icons/ri"


const ActiveIndicator = () => {
    return (
        <div className="absolute h-5 w-1 bg-primary -left-6 top-1/2 transform -translate-y-1/2 rounded-r-md"></div>
    );
}

export const Sidebar: FC = () => {  
    const location = useLocation();
    const { authorisedUser } = useAuthStore();
    const { toggleUserProfileModalOpen } = useUIModal();

    const pathname = location.pathname;
    const contentRef = useRef<HTMLDivElement | null>(null);
    const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});
    
    const isActive = (path: string) => {
        return pathname.startsWith(path);
    }

    const isAnySubItemActive = (subItems: { path: string; label: string }[]) => {
        return subItems.some(subItem => {
            const prefixedPath = `/app${subItem.path}`;
            return isActive(prefixedPath);
        });
    }

    const toggleSubItems = (e: React.MouseEvent, index: string) => {
        e.preventDefault();
        setOpenItems(prev => ({ ...prev, [index]: !prev[index] }));
    }

    return (
        <aside
            className="
                fixed w-64 h-screen lg:w-72 py-3 px-6 overflow-y-auto md:translate-x-0
                scrollbar-hide flex flex-col justify-between flex-shrink-0 bg-[#0B122E] text-white border-r border-strokeSoft z-30 md:z-10
            "
        >
            <div className="py-4 flex flex-col gap-12">
                <div className="flex items-center gap-3">
                    <RiRemixiconLine size={defaultIconXlSize} />
                    <h2 className="text-lg font-medium">Transflow</h2>
                </div>
                <div className="flex flex-col gap-2.5">
                    {sidebarItems.map((item: any, index: number) => {
                        const prefixedPath = `/app${item.path}`;
                        const isParentActive = item.subItems ? isAnySubItemActive(item.subItems) : isActive(prefixedPath);
                        const IconComponent = isActive(prefixedPath) && item.activeIcon ? item.activeIcon : item.icon;
                        const isOpen = openItems[index];

                        return (
                            <div key={index}>
                                <Link 
                                    to={item.subItems ? "" : prefixedPath} 
                                    onClick={item.subItems ? (e) => toggleSubItems(e, index.toString()) : undefined} 
                                    className={`
                                        relative flex items-center justify-between py-2 px-3 rounded-lg ${
                                        item.subItems 
                                            ? isParentActive 
                                                ? `bg-white before:content-[''] before:absolute before:-left-6 before:h-3/5 before:w-1 before:rounded-r-md before:top-1/2 before:transform before:-translate-y-1/2` 
                                                : "text-textSecondary hover:lightGrey"
                                            : isActive(prefixedPath)
                                            ? `bg-primary text-white hover:text-white`
                                            : "text-textSecondary hover:lightGrey"
                                        }  transition-all duration-500 ease-in-out
                                    `}
                                >
                                    <div className="flex items-center text-sm">
                                        {isParentActive && <ActiveIndicator />}
                                        {IconComponent && 
                                            <IconComponent 
                                                className={`mr-2 ${
                                                    item.subItems && isParentActive 
                                                        ? `text-primary` : ""
                                                }`} 
                                                fontSize="small" size={20} 
                                            />
                                        }
                                        <span>{item.label}</span>
                                    </div>
                                    {item.subItems && (
                                        <div role="button" onClick={(e) => toggleSubItems(e, index.toString())} className="text-textSoft">
                                            {isOpen ? <RiArrowDownSLine size={defaultIconSize} /> : <RiArrowRightSLine size={defaultIconSize} />}
                                        </div>
                                    )}
                                </Link>
                                {item.subItems && (
                                    <div 
                                        ref={contentRef}
                                        className={`
                                            ml-7 flex flex-col gap-1 text-sm transition-all duration-500 ease-in-out overflow-hidden 
                                            ${isOpen ? "scale-y-100 opacity-100 mt-2" : "scale-y-0 opacity-0"}
                                        `}
                                        style={{ height: isOpen ? `${contentRef.current?.scrollHeight || 0}px` : "0px" }}
                                    >
                                        {item.subItems.map((subItem: any, index: number) => {
                                            const prefixedPath = `/app${subItem.path}`;
                                            return (
                                                <Link 
                                                    key={index} to={prefixedPath} 
                                                    className={`
                                                        px-3 py-2.5 text-textSecondary rounded-lg 
                                                        ${isActive(prefixedPath) ? `bg-lightGrey border border-strokeSoft` : "font-medium hover:bg-lightGrey"}
                                                        ${subItem.plusIcon ? " flex items-center justify-between" : ""}
                                                    `}
                                                >
                                                    <p>{subItem.label}</p> {subItem.plusIcon && (<RiAddLine fontSize="small" size={20} className={isActive(prefixedPath) ? "text-white" : "text-textSoft"} />)}
                                                </Link>
                                            )
                                        })}
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
            <ProfileSection
                initials="TA" 
                authorisedUser={authorisedUser}
                clickEvent={() => {
                    toggleUserProfileModalOpen();
                }}
            />
        </aside>
    );
}
