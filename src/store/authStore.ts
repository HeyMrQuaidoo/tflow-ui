import { create } from "zustand"
import { AuthStoreInterface } from "@/interfaces"


const getUserFromLocalStorage = (): any => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
}

export const useAuthStore = create<AuthStoreInterface>((set) => ({
    error: null,
    isAuthLoading: false,
    authorisedUser: getUserFromLocalStorage(),
    setActiveUser: (user) => {
        localStorage.setItem("user", JSON.stringify(user)); 
        set({ authorisedUser: user }); 
    }
}))
