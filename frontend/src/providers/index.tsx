import { createContext, useEffect, useState } from "react";
import { IUser, IUserContext, IUserLogin, IUserProviderProps, IUserRegister, LoginResponse } from "./interfaces";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const UserContext = createContext<IUserContext>({} as IUserContext)

export const UserProvider = ({children}:IUserProviderProps) =>{
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<IUser | null>(null)
    const navigate = useNavigate()

    useEffect(()=>{
        const token = localStorage.getItem("@TOKEN")

        if(!token){
            setLoading(false)
            return
        }
        api.defaults.headers.common.Authorization = `Bearer ${token}`
        setLoading(false)
    },[])

    const loginUser = async(data:IUserLogin): Promise<void> =>{
        try{
            const response = await api.post<LoginResponse>("/login",data)
            const {token} = response.data
            api.defaults.headers.common.Authorization = `Bearer ${token}`
            localStorage.setItem("@TOKEN", token)
            setLoading(false)
            navigate("/")
        }
        catch(error){
            console.log(error)
        }
    }

    const registerUser = async(data:IUserRegister): Promise<void> =>{
        try {
            const response = await api.post("/users",data)
            setUser(response.data.user)
            navigate("/login")
            
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <UserContext.Provider value={{loginUser,loading,registerUser}}>
            {children}
        </UserContext.Provider>
    )
}