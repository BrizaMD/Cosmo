import React from "react";
import ReactDOM from 'react-dom';

test('renders withouth crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<button />, div)
})