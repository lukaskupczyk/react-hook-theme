# react-hook-theme

Switch between dark and light mode in your React application with ease.

![Toggle](/assets/toggle.gif)

## Features

-   ThemeProvider component to wrap the application and provide the theme context to components
-   useTheme hook to access and change the current theme
-   Toggle component to switch between dark and light mode
-   Automatic detection of users browser settings

## Example

A working example is provided in the `example` folder.

## Installation

```bash
yarn add react-hook-theme

# or

npm install react-hook-theme
```

## Basic usage

### Provider

Wrap the application in the `ThemeProvider`.

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

### Styling of Dark / Light Mode

Adjust styling by working with css variables

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

// styling
import 'react-hook-theme/dist/styles/style.css';

// ...
<header>
    <Toggle />
</header>;
```

#### Props

| Name | Type   | Required | Description                           | Default    |
| ---- | ------ | -------- | ------------------------------------- | ---------- |
| id   | string |          | Sets the html id of the input element | rht-toggle |

### Hooks

Use the provided `useTheme` hook to access or update the current theme

```typescript
/*
 * App.tsx
 */

import { useTheme } from 'react-hook-theme';

// ...
const { theme, setTheme } = useTheme();
```

#### Return

| Object Name | Type                   | Description              |
| ----------- | ---------------------- | ------------------------ |
| theme       | Theme                  | The current theme        |
| setTheme    | (theme: Theme) => void | Update the current theme |
| options     | ThemeOptions           | Configuration of hook    |
