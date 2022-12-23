import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Toggle } from './Toggle';

test('expect toggle not to be checked', async () => {
    // ARRANGE
    render(<Toggle />);

    // ASSERT
    waitFor(() => {
        expect(screen.getByRole('switch')).not.toBeChecked();
    });
});

test('expect toggle to be checked', async () => {
    // ARRANGE
    render(<Toggle />);

    // ACT
    await userEvent.click(screen.getByRole('switch'));

    // ASSERT
    waitFor(() => {
        expect(screen.getByRole('switch')).toBeChecked();
    });
});
