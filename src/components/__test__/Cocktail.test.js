import React from "react";
import Cocktail from '../pages/Cocktail';
import '@testing-library/jest-dom/extend-expect';
import {render} from '@testing-library/react';


beforeAll(() =>
    Object.defineProperty(HTMLMediaElement.prototype, "muted", {
        set: jest.fn(),
    })
);

test('page has background-video, title and button', () =>{

    const { getByTestId } = render(<Cocktail/>);
    const background = getByTestId('background');
    const btn = getByTestId('cocktail-button');
    const title = getByTestId('title');

    expect(background).toBeTruthy();
    expect(btn).toBeTruthy();
    expect(title).toBeTruthy();
})