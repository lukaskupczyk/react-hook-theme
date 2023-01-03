# react-hook-theme

Switch between dark and light mode in your React application with ease.

![Toggle](/assets/toggle.gif)

## Features

-   Provides the theme context to components
-   Hook to retrieve and change the current theme
-   Optional toggle to switch between dark and light mode
-   Automatic detection of users' browser settings
-   Optionally persists the selected theme to local storage
-   Ready for Next.js

## Example

Check out the [CodeSandbox](https://codesandbox.io/s/example-react18-i73swh) for a working example.

Another example is also included in the `example` folder of the repository.

## Installation

```bash
yarn add react-hook-theme

# or

npm install react-hook-theme
```

## Basic usage

### Provider

Wrap the application in the `ThemeProvider`. Optionally provide settings via the `options` prop.

```typescript
/*
 * index.tsx
 */

import { ThemeProvider } from 'react-hook-theme';

// ...
<ThemeProvider
    options={{
        theme: 'dark',
        save: true,
    }}
>
    <App />
</ThemeProvider>;
// ...
```

#### Options Prop

| Name  | Type    | Required | Description                              | Default |
| ----- | ------- | -------- | ---------------------------------------- | ------- |
| theme | Theme   |          | The default theme as a fallback          | dark    |
| save  | boolean |          | Save theme to local storage when changed | false   |

### Styling of Dark / Light Mode

Adjust the styling of your app by utilizing css variables:

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

Optionally use the toggle component to render a switch to change between dark and light mode.

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
