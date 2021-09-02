import React from "react";
import Cocktail from '../pages/Cocktail';
import '@testing-library/jest-dom/extend-expect';
import {fireEvent, render} from '@testing-library/react';


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


test('title text is "If you want a good time or just drink something tasty..."', ()=>{
    const { getByTestId } = render(<Cocktail/>);
    const title = getByTestId('title');

    expect(title.textContent).toBe("If you want a good time or just drink something tasty...");
})


test('button text is "Get a Drink"', ()=>{
    const { getByTestId } = render(<Cocktail/>);
    const btn = getByTestId('cocktail-button');

    expect(btn.textContent).toBe("Get a Drink!");
})


test('when click button then new content appears', async ()=>{
    const { getByTestId } = render(<Cocktail/>);
    const btn = getByTestId('cocktail-button');

    fireEvent.click(btn);

    const resultDiv = await(() => getByTestId('result'));

    expect(resultDiv).toBeTruthy();
})