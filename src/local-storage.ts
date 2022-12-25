import { Theme } from './Context';

export function storeTheme(theme: Theme) {
    return localStorage.setItem('rht-theme', theme);
}

export function getStoredTheme() {
    return localStorage.getItem('rht-theme') as Theme;
}
