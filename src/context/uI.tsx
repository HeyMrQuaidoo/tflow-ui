// global imports
import { FC, ReactNode, createContext, useCallback, useContext, useState } from "react"


const UIContext = createContext({
    isNotificationModalOpen: false,
    toggleNotificationModal: () => {},
    isUserProfileModalOpen: false,
    toggleUserProfileModalOpen: () => {},
});

export const UIProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [isNotificationModalOpen, setNotificationModalOpen] = useState(false);
    const [isUserProfileModalOpen, setIsUserProfileModalOpen] = useState(false);

    const toggleNotificationModal = useCallback(() => {
        setNotificationModalOpen(prev => {
            if (!prev) setIsUserProfileModalOpen(false);
            return !prev;
        })
    }, []);

    const toggleUserProfileModalOpen = useCallback(() => {
        setIsUserProfileModalOpen(prev => {
            if (!prev) setNotificationModalOpen(false);
            return !prev;
        })
    }, []);

    return (
        <UIContext.Provider value={{ 
            isNotificationModalOpen, toggleNotificationModal, 
            isUserProfileModalOpen, toggleUserProfileModalOpen 
        }}>
            {children}
        </UIContext.Provider>
    );
}

export default UIContext;
export const useUIModal = () => useContext(UIContext);
