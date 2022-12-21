import { useEffect, useState } from 'react';
import { Theme, ThemeContext, ThemeOptions } from './Context';
import { getPreferredTheme } from './preferred-theme';

type ThemeProviderProps = {
    options: ThemeOptions;
    children: React.ReactNode;
};

export function ThemeProvider({ options, children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(options.theme);

    useEffect(() => {
        setTheme(getPreferredTheme());
    }, []);

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return <ThemeContext.Provider value={{ theme, setTheme, options }}>{children}</ThemeContext.Provider>;
}
