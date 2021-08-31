import React from "react";
import { render, screen } from '@testing-library/react';

import ReactDOM from 'react-dom';
import Navbar from '../NavBar';

test('renders withouth crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<button></button>, div)
})