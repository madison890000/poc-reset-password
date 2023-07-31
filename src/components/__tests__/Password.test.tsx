import React from 'react';
import Password from '../Password';
import renderer from 'react-test-renderer';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import {LESS_THAN_8_CHARACTERS, SHOULD_INCLUDE_ONE_NUMBER_AND_TWO_SPECIAL_CHARACTERS} from "../ValidatePassWordReg";

describe('renders Password Component initial', () => {
    test('snapshot for Password Component initial', () => {
        const resetPasswordModule = renderer.create(<Password/>).toJSON();
        expect(resetPasswordModule).toMatchSnapshot();
    });
    test('Password Component should have a input', () => {
        render(<Password/>);
        const passwordInput = screen.getByTestId('reset-password');
        expect(passwordInput).toBeVisible();
    });
})

describe('Password Component change actions', () => {
    test('message:LESS_THAN_8_CHARACTERS when less than 8 characters', async () => {
        render(<Password/>);
        const passwordInput = screen.getByTestId('reset-password');
        fireEvent.change(passwordInput, {target: {value: 'abc123'}});
        await waitFor(() => {
            expect(screen.getByText(LESS_THAN_8_CHARACTERS)).toBeInTheDocument();
        })
    })

    test('message:LESS_THAN_8_CHARACTERS when less than 8 characters', async () => {
        render(<Password/>);
        const passwordInput = screen.getByTestId('reset-password');
        fireEvent.change(passwordInput, {target: {value: 'abc123abcsdd'}});
        await waitFor(() => {
            expect(screen.getByText(SHOULD_INCLUDE_ONE_NUMBER_AND_TWO_SPECIAL_CHARACTERS)).toBeInTheDocument();
        })
    })
    test('success when input correctly', async () => {
        render(<Password/>);
        const passwordInput = screen.getByTestId('reset-password');
        fireEvent.change(passwordInput, {target: {value: 'abc123abc__'}});
        await waitFor(() => {
            expect(screen.queryByText(SHOULD_INCLUDE_ONE_NUMBER_AND_TWO_SPECIAL_CHARACTERS)).toEqual(null);
        })
    })
})