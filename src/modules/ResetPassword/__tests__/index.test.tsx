import React from 'react';
import ResetPasswordModule from '../index';
import renderer from 'react-test-renderer';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';

describe('renders ResetPasswordModule initial', () => {
    test('snapshot for ResetPasswordModule initial', () => {
        const resetPasswordModule = renderer.create(<ResetPasswordModule/>).toJSON();
        expect(resetPasswordModule).toMatchSnapshot();
    });
    test('ResetPasswordModule should have a input', () => {
        render(<ResetPasswordModule/>);
        const passwordInput = screen.getByTestId('reset-password');
        expect(passwordInput).toBeVisible();
    });
    test('ResetPasswordModule should have a reset button', () => {
        render(<ResetPasswordModule/>);
        const passwordResetButton = screen.getByTestId('reset-btn');
        expect(passwordResetButton).toBeVisible();
    });

    test('ResetPasswordModule should have a reset button and disabled', () => {
        render(<ResetPasswordModule/>);
        const passwordResetButton = screen.getByTestId('reset-btn');
        expect(passwordResetButton.getAttribute('disabled')).toBe('');
    });
});


describe('ResetPasswordModule word good', () => {

    test('input password correctly, ResetPasswordModule should have a reset button and enabled', async () => {
        render(<ResetPasswordModule/>);
        const passwordResetButton = screen.getByTestId('reset-btn');
        expect(passwordResetButton.getAttribute('disabled')).toBe('');
        const passwordInput = screen.getByTestId('reset-password');
        fireEvent.change(passwordInput, {target: {value: 'abc123__abd'}});
        await waitFor(() => {
            const passwordResetButton = screen.getByTestId('reset-btn');
            // no disable attribute
            expect(passwordResetButton.getAttribute('disabled')).toBe(null);
        })
    });
    test('input password wrong, ResetPasswordModule should have a reset button and enabled', async () => {
        render(<ResetPasswordModule/>);
        const passwordResetButton = screen.getByTestId('reset-btn');
        expect(passwordResetButton.getAttribute('disabled')).toBe('');
        const passwordInput = screen.getByTestId('reset-password');
        fireEvent.change(passwordInput, {target: {value: 'abc123'}});
        await waitFor(() => {
            const passwordResetButton = screen.getByTestId('reset-btn');
            // has disable attribute
            expect(passwordResetButton.getAttribute('disabled')).toBe('');
        })
    });
});