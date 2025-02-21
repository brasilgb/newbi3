'use client'
import moment from "moment";
import { createContext, ReactNode, useContext, useState } from "react";


const AuthContext = createContext({} as any);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [dateUpdate, setDateUpdate] = useState<any>(moment().format("DD/MM/YYY HH:MM:SS"));
    const [startDate, setStartDate] = useState<Date>(new Date);
    const [endDate, setEndDate] = useState<Date>(new Date);
    const [filterDate, setFilterDate] = useState<Date>(new Date);
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <AuthContext.Provider value={{
            dateUpdate,
            setDateUpdate,
            startDate,
            setStartDate,
            endDate,
            setEndDate,
            filterDate,
            setFilterDate,
            loading,
            setLoading
        }}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuthContext = () => useContext(AuthContext);