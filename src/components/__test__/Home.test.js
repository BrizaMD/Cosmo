import React from "react";
import {render, fireEvent, cleanup} from '@testing-library/react';
import Home from '../pages/Home';
import "@testing-library/jest-dom/extend-expect";

beforeAll(() =>
    Object.defineProperty(HTMLMediaElement.prototype, "muted", {
        set: jest.fn(),
    })
);

test('home page icons and bg reders without crashing', () =>{
    const { getByTestId } = render(<Home/>);
    const dog = getByTestId('dog-icon');
    const cat = getByTestId('cat-icon');
    const background = getByTestId('background-video');

    expect(dog).toBeTruthy();
    expect(cat).toBeTruthy();
    expect(background).toBeTruthy();
})

test('click on icon then advice will be on the screen', async () =>{
    const { getByTestId } = render(<Home/>);
    const cookie = getByTestId('fortune-icon');

    fireEvent.click(cookie);

    const resultDiv = await (() => getByTestId('advice'));
    expect(resultDiv).toBeTruthy();
})

afterEach(cleanup);
