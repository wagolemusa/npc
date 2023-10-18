"use client";

import axios from "axios";
import { useRouter } from "next/router";
import { createContext, useState } from 'react';

const AuthContext = createContext();


export const AuthProvider =({ children }) => {
    const [user, setUser] = useState(null);
    const [ error, setError] = useState(null);
    const [updated, setUpdated] = useState(false);

    const router = useRouter;
    
    // Register user
    const registerUser = async({name, email, password}) => {
        try{

            const { data } = await axios.post(
                `${process.env.ENVIRONMENT_URL}/api/auth/register`,
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

    // Add Address
    const addNewAddress = async(address) => {
        try{
            const { data } = await axios.post(
                `${process.env.ENVIRONMENT_URL}/api/address`,
                address
            )
            if(data){
                router.push("/me");
            }
        }catch(error){
            setError(error?.response?.data?.message)
        }
    }


    // Update Address 
    const updateAddress = async(id, address) => {
        try{
            const { data } = await axios.put(
                `${process.env.ENVIRONMENT_URL}/api/address/${id}`,
                address
            );
            if(data?.address){
                setUpdated(true)
                router.replace(`/address/${id}`);
            }
        }catch(error){
            setError(error?.response?.data.message);
        }
    }

        // Dalete Address 
        const deleteAddress = async(id) => {
            try{
                const { data } = await axios.delete(
                    `${process.env.ENVIRONMENT_URL}/api/address/${id}`
                );
                if(data?.success){
                  router.push("/me")
                }
            }catch(error){
                setError(error?.response?.data.message);
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
                updated,
                registerUser,
                addNewAddress,
                updateAddress,
                deleteAddress,
                setUpdated,
                clearErrors
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
