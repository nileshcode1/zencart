import { createContext, useContext, useEffect } from "react";
import axios from "axios";


const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const AppProvider = ({ children }) => {
  
    const getProducts = async (url) => {

        const res  = await axios.get(url);
        const products = await res.data;
        console.log(products)

    };
    
//use effect se global me sb kuch fetch krlega
    useEffect(() => {
    getProducts(API);

    }, [])


  return (
    <AppContext.Provider value={{ myName: "nilesh pandey" }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
