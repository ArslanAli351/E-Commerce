import axios from "axios";
import { useEffect, useState } from "react";

export default function useProduct(productLimite) {
    const API_key = `https://dummyjson.com/products?${productLimite}`;
    const [products, setProducts] = useState(null);
    const [Isloading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getProductData = async () => {
        try {
            setError(null)
            setIsLoading(true)
            const response = await axios(API_key);
            setProducts(response?.data?.products);

        } catch (error) {
            setError(error?.response.statusText || "Unknown error,please try again")
        } finally {
            setIsLoading(false)
        }

    };
    useEffect(() => {
        getProductData();
    }, []);
    return {
        products: products,
        loading: Isloading,
        error: error
    }
}