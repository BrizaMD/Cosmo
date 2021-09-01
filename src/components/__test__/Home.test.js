import React from "react";
import {render, fireEvent, cleanup} from '@testing-library/react';
import Home from '../pages/Home';
import "@testing-library/jest-dom/extend-expect";


global.fetch = jest.fn(() =>{

})

test('home page icons and bg reders without crashing', () =>{
    const { getByTestId } = render(<Home/>);
    const dog = getByTestId('dog-icon');
    const cat = getByTestId('cat-icon');
    const background = getByTestId('background-video');
    expect(dog).toBeTruthy();
    expect(cat).toBeTruthy();
    expect(background).toBeTruthy();
})

test('click on icon then advice will be on the screen', () =>{
    const { getByTestId } = render(<Home/>);
    const cookie = getByTestId('fortune-icon');


    fireEvent.click(cookie);
    // in-prorgress
    // const advice = getByTestId('advice')
    // expect(advice).toBeInTheDocument();
})

test('click cat icon then open random cat picture', () =>{
    const { getByTestId } = render(<Home/>);
    const cat = getByTestId('cat-link');
    const catUrl = 'https://cataas.com/cat';

    fireEvent.click(cat);
    const url = window.location.href;
    expect(url).toEqual(catUrl);
})

afterEach(cleanup);
