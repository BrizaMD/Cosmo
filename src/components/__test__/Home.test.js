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
    const background = getByTestId('background-video');

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
