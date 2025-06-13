import { stateUser } from '@/types/type';
import { create } from 'zustand';


export const useUserStore = create<stateUser>((set) => ({
    firstName: "",
    email: "",
    lastName: "",  
    avatar: "",
    isLoggedIn: false,
    isInDB: false,
    setUser: (user) => set(user),
}));
