import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import Keyboard from "../Keyboard";

describe('Screen component tests', (): void => {
    const setStatement: Function = jest.fn();
    const getResult: Function = jest.fn();

    beforeEach((): void => {
        render(<Keyboard getResult={getResult} setStatement={setStatement}/>);
    });

    it('Should call setStatement function', (): void => {
        const element: HTMLElement = screen.getByText('1');

        fireEvent(element, new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }),)

        expect(setStatement).toHaveBeenCalled();
    });

    it('Should call getResult function', (): void => {
        const element: HTMLElement = screen.getByText('=');

        fireEvent(element, new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }),)

        expect(getResult).toHaveBeenCalled();
    });
})