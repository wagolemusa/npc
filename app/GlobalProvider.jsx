'use client'
import { CartProvider } from "../context/CartContext";
import { AuthProvider } from "../context/AuthContext";
import { ProductProvider } from "../context/ProductContext";
import { SessionProvider } from "next-auth/react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function GlobalProvider({ children }){
    return(
        <>
    <ToastContainer position="bottom-right" />
        <AuthProvider>
            <CartProvider>
                <ProductProvider>
                    <SessionProvider>{children}</SessionProvider>
                </ProductProvider>
            </CartProvider>
        </AuthProvider>
        </>
    )
}

