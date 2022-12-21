import React from 'react';

export type Theme = 'dark' | 'light';

export type ThemeOptions = {
    theme: Theme;
};

type ThemeContext = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    options: ThemeOptions;
};

export const ThemeContext = React.createContext<ThemeContext>({
    theme: 'dark',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setTheme: () => {},
    options: { theme: 'dark' },
});
