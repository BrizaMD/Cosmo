import React from "react";
import {render, fireEvent, cleanup} from '@testing-library/react';
import Zodiac from '../pages/Zodiac';
import "@testing-library/jest-dom/extend-expect";


beforeAll(() =>
    Object.defineProperty(HTMLMediaElement.prototype, "muted", {
        set: jest.fn(),
    })
);

test('page has 12 icons, background -video', () =>{
    const { getByTestId } = render(<Zodiac/>);
    const background = getByTestId('background-video');
    const signs = getByTestId('signs');

    expect(background).toBeTruthy();
    expect(signs).toBeTruthy();

})

test('when clicked zodiac then changed zodiac description', async () =>{
    const component = render(<Zodiac/>);
    const testZodiacAquarius = component.getByTestId('aquarius');

    fireEvent.click(testZodiacAquarius);
    expect(component.getByTitle('aquarius')).toBeTruthy();

    const testZodiacAries = component.getByTestId('aries');
    fireEvent.click(testZodiacAries);
    expect(component.getByTitle('aries')).toBeTruthy();
})



afterEach(cleanup);