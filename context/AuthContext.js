"use client";

import axios from "axios";
import { useRouter } from "next/router";
import { createContext, useState } from 'react';

const AuthContext = createContext();


export const AuthProvider =({ children }) => {
    const [user, setUser] = useState(null);
    const [ error, setError] = useState(null);

    const router = useRouter;
    
    const registerUser = async({name, email, password}) => {
        try{

            const { data } = await axios.post(
                `${process.env.API_URL}/api/auth/register`,
                {
                    name,
                    email,
                    password
                }
            )

            if(data?.user){
                router.push('/')
            }

        } catch (error){
            setError(error?.response?.data?.message)
        }
    }

    const clearErrors = () => {
        setError(null)
    }

    return(
        <AuthContext.Provider
            value={{
                user, 
                setUser,
                error,
                setError,
                registerUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
