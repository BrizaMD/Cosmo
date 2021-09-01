import React from "react";
import {render, fireEvent, cleanup, waitForElement} from '@testing-library/react';
import Love from '../pages/Love';
import "@testing-library/jest-dom/extend-expect";

test('home page icons and bg reders without crashing', () =>{
    const { getByTestId } = render(<Love/>);
    const formButton = getByTestId('calculate');
    const secondPerson = getByTestId('secondPerson');
    const firstPerson = getByTestId('firstPerson');
    const background = getByTestId('background');

    expect(formButton).toBeTruthy();
    expect(firstPerson).toBeTruthy();
    expect(secondPerson).toBeTruthy();
    expect(background).toBeTruthy();
})


test('click form button then shows calculation result div', async () => {
    const {getByTestId} = render(<Love/>);
    const formButton = getByTestId('calculate');

    fireEvent.click(formButton);

    const resultDiv = await (() => getByTestId('result'));

    expect(resultDiv).toBeTruthy();
})