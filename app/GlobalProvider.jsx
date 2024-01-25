'use client'
import { CartProvider } from "../context/CartContext";
import { AuthProvider } from "../context/AuthContext";
import { ProductProvider } from "../context/ProductContext";
import { OrderProvider } from "../context/OrderContext"
import { SessionProvider } from "next-auth/react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Provider from "./Provider";

export function GlobalProvider({ children }){
    return(
        <>
    <ToastContainer position="bottom-right" />
    <Provider>
        <AuthProvider>
            <CartProvider>
                <OrderProvider>
                    <ProductProvider>
                        <SessionProvider>{children}</SessionProvider>
                    </ProductProvider>
                </OrderProvider>
            </CartProvider>
        </AuthProvider>
    </Provider>
        </>
    )
}

