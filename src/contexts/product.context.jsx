import React, { createContext, useState, useEffect } from "react";
import PRODUCTS from "../shop-data.json";
import SHOP_DATA from "../shop-data.js";

import {getCategoriesAndDocuments} from "../utils/firebase/firebase.utils"

export const ProductContext = createContext({
    products: [],
 });

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const value = {products}

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
        }
        getCategoriesMap()
    },[])

    // useEffect(() => {
    //     addCollectionAndDocument('categories', SHOP_DATA);
    // },[])

    return (
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    )
}
