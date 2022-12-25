import { Theme } from './Context';

export function storeTheme(theme: Theme) {
    if (typeof window !== 'undefined') {
        localStorage.setItem('rht-theme', theme);
    }
}

export function getStoredTheme() {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('rht-theme') as Theme;
    }

    return null;
}
