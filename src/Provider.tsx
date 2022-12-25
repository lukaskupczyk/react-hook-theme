import { useCallback, useEffect, useState } from 'react';
import { Theme, ThemeContext, ThemeOptions } from './Context';
import { getStoredTheme, storeTheme } from './local-storage';
import { getPreferredTheme } from './preferred-theme';

const fallbackTheme = 'dark';

type ThemeProviderProps = {
    options?: ThemeOptions;
    children: React.ReactNode;
};

export function ThemeProvider({ options = {}, children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(fallbackTheme);

    useEffect(() => {
        const theme = getStoredTheme() || getPreferredTheme() || options?.theme;
        setTheme(theme);
    }, []);

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    const handleThemeChange = useCallback((theme: Theme) => {
        if (options?.save) {
            storeTheme(theme);
        }

        setTheme(theme);
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, setTheme: handleThemeChange, options }}>
            {children}
        </ThemeContext.Provider>
    );
}
