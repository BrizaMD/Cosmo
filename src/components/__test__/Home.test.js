import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Home from '../pages/Home';


test('renders withouth crashing', () => {
    render(<Home />);
    const video = screen.getByTestId("background-video");
    const cat = screen.getByTestId("cat-icon");
    const dog = screen.getByTestId("dog-icon");
    const cookie = screen.getByTestId("fortune-icon");
    expect(cookie).toBeTruthy();


    expect(video).toBeInTheDocument();
    expect(cat).toBeInTheDocument();
    expect(dog).toBeInTheDocument();
    expect(cookie).toBeInTheDocument();
})


describe("clickIcon", () => {
    const cookie = screen.getByTestId("fortune-icon");

})