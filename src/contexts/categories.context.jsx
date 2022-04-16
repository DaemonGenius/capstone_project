import React, { createContext, useState, useEffect } from "react";
import PRODUCTS from "../shop-data.json";
import SHOP_DATA from "../shop-data.js";

import {getCategoriesAndDocuments} from "../utils/firebase/firebase.utils"

export const CategoriesContext = createContext({
    categoriesMap: {},
 });

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    const value = {categoriesMap}

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap()
    },[])

    // useEffect(() => {
    //     addCollectionAndDocument('categories', SHOP_DATA);
    // },[])

    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}
