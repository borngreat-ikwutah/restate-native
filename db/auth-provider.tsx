import React, { createContext } from "react";
import { GetUser } from "./appwrite";
import { useAppwrite } from "./use-appwrite";


interface User {
    $id: string
    name: string
    email: string
    avatar: string
}

interface GlobalContextType {
    isLoggedIn: boolean
    user: User | null
    isLoading: boolean
    refetch: (newParams: Record<string, string| number>)=> Promise<void>
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);



const GlobalAuthProvider = ({ children }: {children: React.ReactNode})=> {
    const {data: user, refetch, loading} = useAppwrite({
        fn: GetUser,
    })

    const isLoggedIn = !!user;

    return (
        <GlobalContext.Provider value={{
            isLoggedIn,
            user,
            isLoading: loading,
            refetch
        }}>
            {children}
        </GlobalContext.Provider>
    )
}



export const useGlobalAuth = (): GlobalContextType => {
    const context = React.useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobalAuth must be used within a GlobalAuthProvider");
    }
    return context;
}


export default GlobalAuthProvider;