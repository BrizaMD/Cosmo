// import React from "react";
// import {act, fireEvent, getByText, render, screen} from '@testing-library/react';
//
// import ReactDOM, {unmountComponentAtNode} from 'react-dom';
// import Cocktail from '../pages/Cocktail';
//
// let container = null;
//
// beforeEach(() => {
//     // setup a DOM element as a render target
//     container = document.createElement('div');
//     document.body.appendChild(container);
// });
//
// afterEach(() => {
//     // cleanup on exiting
//     unmountComponentAtNode(container);
//     container.remove();
//     container = null;
// });
//
// test('renders withouth crashing', () => {
//     const div = document.createElement("div");
//     ReactDOM.render(<Cocktail />, div)
// });
//
// test('renders drink from fetch', async() => {
//     const div = document.createElement("div");
//     ReactDOM.render(<Cocktail />, div);
//
//     fireEvent(
//         getByText(div, 'Get a Drink!'),
//         new MouseEvent('click', {
//             bubbles: true,
//             cancelable: true,
//         }),
//     );
//
//     const fakeDrink = {
//         id: '1',
//         name: 'The Coders Brew',
//         category: 'Strongest',
//         alcoholContent: 'Alcoholic',
//         glassType: 'Huge glass',
//         instructions_EN: 'You cannot simply make this drink, the drink will find you',
//         picture: 'realpicture',
//         recipeUrl: 'fakeurl.com'
//     };
//
//     jest.spyOn(global, "fetch").mockImplementation(() =>
//         Promise.resolve({
//             json: () => Promise.resolve(fakeDrink)
//         })
//     );
//
//     await act( async () => {
//         await render(<Cocktail />, container);
//     })
//
//     expect(div.querySelector('div')).toBe(fakeDrink.name);
//
//     // expect(container.querySelector("summary").textContent).toBe(fakeUser.name);
//     // expect(container.querySelector("strong").textContent).toBe(fakeUser.age);
//     // expect(container.textContent).toContain(fakeUser.address);
//
//     // remove the mock to ensure tests are completely isolated
//     global.fetch.mockRestore();
// })