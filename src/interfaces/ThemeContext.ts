export interface ThemeOption {
    color: string;
    background: string;
    a: string;
    hover: string;
    backgroundOpacity: string
}

export interface ThemeUseStateProps {
    theme: ThemeOption,
    togglerTheme: (theme: ThemeOption) => void
}