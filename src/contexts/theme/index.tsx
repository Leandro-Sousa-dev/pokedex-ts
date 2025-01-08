import { createContext, useState } from "react";
import { ThemeOption, ThemeUseStateProps} from '../../interfaces/themeContext'
import { ChildrenInteface } from "../../interfaces/Generics";

export const themes = {
    light: {
        color: "#111111",
        background: "#eeeeee",
        a: "#232333",
        hover: "#ffffff",
        backgroundOpacity: "rgba(255, 255, 255, 0.8)",

    },
    dark: {
        color: "#dddddd",
        background: "#232323",
        a: "#ffffff",
        hover: "#000000",
        backgroundOpacity: "rgba(255, 255, 255, 0.3)",

    }
}

export const ThemeContext = createContext({} as ThemeUseStateProps)

export const ThemeProvider = ({children}: ChildrenInteface) => {

    const [ theme, setTheme] = useState<ThemeOption>(themes.light)

    function togglerTheme(theme: ThemeOption){
        setTheme(theme)
    }

    return (
        <ThemeContext.Provider value={{theme, togglerTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}