import { createContext } from "react";
import { food_list } from "../assets/frontend_assets/assets";


export const storeContext = createContext(null)

const StoreContextProvider = (props) => {



    const contextValue = {
         food_list
    }
    return(
         <storeContextProvider value={contextValue}>
             {props.children}
         </storeContextProvider>
    ) 
}

export default StoreContextProvider;  