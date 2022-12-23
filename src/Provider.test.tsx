import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MatchMediaMock from 'jest-matchmedia-mock';
import { useCallback } from 'react';
import { Theme } from './Context';
import { ThemeProvider } from './Provider';
import { useTheme } from './useTheme';

const TestingComponent = () => {
    const { theme, setTheme } = useTheme();

    const handleClick = useCallback((theme: Theme) => {
        setTheme(theme);
    }, []);

    return (
        <>
            <div data-testid="current-theme">{theme}</div>
            <button onClick={() => handleClick('light')}>change</button>
        </>
    );
};

describe('<ThemeProvider />', () => {
    let matchMedia: MatchMediaMock;

    beforeEach(() => {
        matchMedia = new MatchMediaMock();
        matchMedia.useMediaQuery('(prefers-color-scheme: dark)');
    });

    afterEach(() => {
        matchMedia.clear();
    });

    test('expect theme to be dark', async () => {
        // ARRANGE
        render(
            <ThemeProvider options={{ theme: 'dark' }}>
                <TestingComponent />
            </ThemeProvider>
        );

        // ASSERT
        expect(screen.getByTestId('current-theme')).toHaveTextContent('dark');
    });

    test('expect theme to be light', async () => {
        // ARRANGE
        render(
            <ThemeProvider options={{ theme: 'dark' }}>
                <TestingComponent />
            </ThemeProvider>
        );

        // ACT
        await userEvent.click(screen.getByText('change'));

        // ASSERT
        expect(screen.getByTestId('current-theme')).toHaveTextContent('light');
    });
});
