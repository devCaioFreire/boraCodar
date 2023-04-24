import React, { createContext, useState, useEffect } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../styles/theme/Theme';

interface ThemeContextData {
    theme: DefaultTheme;
    toggleTheme: () => void;
}

interface ChildrenProps {
    children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextData>(
    {} as ThemeContextData
);

export const ThemeProviderContext: React.FC<ChildrenProps> = ({ children }) => {
    const [theme, setTheme] = useState(lightTheme);

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            setTheme(darkTheme);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === lightTheme ? darkTheme : lightTheme;
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme === lightTheme ? 'light' : 'dark');
    };

    return (
        <ThemeProvider theme={theme}>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                {children}
            </ThemeContext.Provider>
        </ThemeProvider>
    );
};
