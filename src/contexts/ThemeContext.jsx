import React, { createContext,useState } from 'react'



export const NavbarTheme = createContext(null)


export const NavbarThemeProvider = (props) => {

    const [NavTheme,setNavTheme] = useState('#C3ACD0')

    const [CardBg,setCardBg] = useState('#FFF2F2')

    return (
        <NavbarTheme.Provider value={{NavTheme,setNavTheme,CardBg}} >
            {props.children}
        </NavbarTheme.Provider>
    )

}

