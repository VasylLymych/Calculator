import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import Screen from "../Screen";

describe('Screen component tests', (): void => {
    const statement: string = 'some statement';

    beforeEach((): void => {
        render(<Screen statement={statement}/>);
    });

    it('renders screen', (): void => {
        const element: HTMLElement = screen.getByText(statement);

        expect(element).toBeInTheDocument();
    });
})