import { createContext } from "react";



export const ThemeContext = createContext({
    isDark:false,
    theme:{},
    toggleTheme: () => {}
    
})