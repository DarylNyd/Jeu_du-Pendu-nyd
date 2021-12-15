import React, { createContext, useState} from "react";


export const Theme = createContext ();

const ThemeContextProvider = (props) => {

    const [theme, setTheme] = useState('Hello World');

    return (
        <ThemeContextProvider value={{theme}}> 
            {props.children}
        </ThemeContextProvider>
    )

}
export default ThemeContextProvider;