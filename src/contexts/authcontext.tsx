'use client'
import { addDays } from "date-fns";
import moment from "moment";
import { createContext, ReactNode, useContext, useState } from "react";
import { DateRange } from "react-day-picker";


const AuthContext = createContext({} as any);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [dateUpdate, setDateUpdate] = useState<any>(moment().format("DD/MM/YYY HH:MM:SS"));
    const [rangeDate, setRangeDate] = useState<DateRange | undefined>({
        from: new Date(),
        to: new Date(),
      });
    const [filterDate, setFilterDate] = useState<Date>(new Date);
    const [loading, setLoading] = useState<boolean>(false);

    return (
        <AuthContext.Provider value={{
            dateUpdate,
            setDateUpdate,
            rangeDate,
            setRangeDate,
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