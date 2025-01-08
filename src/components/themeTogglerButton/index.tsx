import { useContext } from "react";
import { ThemeContext, themes } from "../../contexts/theme";
import { ContainerTTB, StyleTogglerThemeButton } from "./styles";

export const ThemeTogglerButton = () => {
    const { theme, togglerTheme } = useContext(ThemeContext)

    return (
        <ContainerTTB>
            <StyleTogglerThemeButton theme={theme} onClick={() => { theme === themes.light ? togglerTheme(themes.dark) : togglerTheme(themes.light) }} >Change to {theme === themes.light ? 'Dark' : "Light"}</StyleTogglerThemeButton>
        </ContainerTTB>
    )
}