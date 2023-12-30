"use client";
import { createContext, useState } from "react"; 
import axios from "axios";
import { useRouter } from "next/navigation";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [updated, setUpdated] = useState(false);

  const router = useRouter();

  const newProduct = async (product) => {
    try {
      const { data } = await axios.post(
        `${process.env.ENVIRONMENT_URL}/api/admin/products`,
        product
      );

      if (data) {
        router.replace("/admin/products");
      }
    } catch (error) {
      setError(error?.response?.data?.message);
    }
  };


  const uploadProductImages = async (formData, id) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.ENVIRONMENT_URL}/api/admin/products/upload_images/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (data?.data) {
        setLoading(false);
        router.replace("/admin/products");
      }
    } catch (error) {
      setError(error?.response?.data?.message);
    }
  };

  const clearErrors = () => {
    setError(null);
  };

  return (
    <ProductContext.Provider
      value={{
        error,
        loading,
        updated,
        uploadProductImages,
        setUpdated,
        newProduct,
        clearErrors,
        
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;