import '@testing-library/jest-dom';
import MatchMediaMock from 'jest-matchmedia-mock';
import { getPreferredTheme } from './preferred-theme';

describe('getPreferredTheme()', () => {
    let matchMedia: MatchMediaMock;

    beforeEach(() => {
        matchMedia = new MatchMediaMock();
    });

    afterEach(() => {
        matchMedia.clear();
    });

    test('expect preferred theme to be dark', async () => {
        // ARRANGE
        matchMedia.useMediaQuery('(prefers-color-scheme: dark)');
        const preferred = getPreferredTheme();

        // ASSERT
        expect(preferred).toBe('dark');
    });

    test('expect preferred theme to be light', async () => {
        // ARRANGE
        matchMedia.useMediaQuery('(prefers-color-scheme: light)');
        const preferred = getPreferredTheme();

        // ASSERT
        expect(preferred).toBe('light');
    });
});
