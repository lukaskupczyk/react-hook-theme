# react-hook-theme

react-hook-theme allows you to switch between dark / light mode in your React application with ease.

![Toggle](/assets/toggle.gif)

## Features

-   ThemeProvider component to wrap your application and provide the theme context to your components.
-   useTheme hook to access and change the current theme in your components.
-   Toggle component to switch between dark and light mode
-   Automatic detection of users browser settings

## Example

You will find a working exampled in the `example` folder.

## Installation

```bash
yarn add react-hook-theme

#or

npm install react-hook-theme
```

## Basic usage

### Provider

Wrap your App in the `ThemeProvider`.

```typescript
/*
 * index.tsx
 */

import { ThemeProvider } from 'react-hook-theme';

// ...
<ThemeProvider
    options={{
        theme: 'dark',
    }}
>
    <App />
</ThemeProvider>;
// ...
```

### Styling

Adjust your styling by working with variables

```css
/*
 * style.css
 */

:root {
    --background: #fff;
    --primary: #000;
}

[data-theme='light'] {
    --background: #fff;
    --primary: #000;
}

[data-theme='dark'] {
    --background: #282c34;
    --primary: #fff;
}

// ...

body {
    background-color: var(--background);
    color: var(--primary);
}
```

### Toggle

Optionally use the toggle

```typescript
/*
 * App.tsx
 */

import { Toggle } from 'react-hook-theme';

// ...
<header>
    <Toggle />
</header>;
```

### Hooks

Use the provide `useTheme` hook to access or update the current theme

```typescript
/*
 * App.tsx
 */

import { useTheme } from 'react-hook-theme';

// ...
const { theme, setTheme } = useTheme();
```
