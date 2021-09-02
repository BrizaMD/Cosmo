import React from "react";
import {render, fireEvent, cleanup} from '@testing-library/react';
import Love from '../pages/Love';
import "@testing-library/jest-dom/extend-expect";


beforeAll(() =>
        Object.defineProperty(HTMLMediaElement.prototype, "muted", {
            set: jest.fn(),
        })
);

test('page has a video background', () =>{
    const { getByTestId } = render(<Love/>);
    const background = getByTestId('background-video');
    expect(background).toBeTruthy();
})


test('form has two input area', () =>{
    const { getByTestId } = render(<Love/>);
    const secondPerson = getByTestId('secondPerson');
    const firstPerson = getByTestId('firstPerson');
    expect(firstPerson).toBeTruthy();
    expect(secondPerson).toBeTruthy();
})

test('input fields have a default text', ()=>{
    const { getByTestId } = render(<Love/>);
    const secondPerson = getByTestId('secondPerson');
    const firstPerson = getByTestId('firstPerson');

    expect(firstPerson).toHaveValue("Your name");
    expect(secondPerson).toHaveValue("Your partner name");
})


test('change first person input field then value will be changed', async () => {
    const { getByTestId } = render(<Love/>);
    const firstPerson = getByTestId('firstPerson');
    fireEvent.change(firstPerson, {
        target:{
            value: "test content"
        }
    });
      expect(firstPerson).toHaveValue("test content");
})


test('change second person input field then value will be changed', async () => {
    const { getByTestId } = render(<Love/>);
    const secondPerson = getByTestId('secondPerson');
    fireEvent.change(secondPerson, {
        target:{
            value: "test content"
        }
    });
    expect(secondPerson).toHaveValue("test content");
})

test('form has button with Calculate it! text', () =>{
    const { getByTestId } = render(<Love/>);
    const formButton = getByTestId('calculate');
    expect(formButton.textContent).toBe('Calculate it!');
})


test('click form button then shows calculation result div', async () => {
    const {getByTestId} = render(<Love/>);
    const formButton = getByTestId('calculate');
    fireEvent.click(formButton);
    const resultDiv = await (() => getByTestId('result'));
    expect(resultDiv).toBeTruthy();
})

afterEach(cleanup);