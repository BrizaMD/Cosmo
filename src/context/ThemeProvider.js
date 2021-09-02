import React, { useState, useLayoutEffect } from 'react';

const ThemeContext = React.createContext({
    dark: false,
    toggle: () => {},
});

export default ThemeContext;

export function ThemeProvider (props) {
    // keeps state of the current theme
    const [dark, setDark] = useState(false);

    // paints the app before it renders elements
    useLayoutEffect(() => {
        const lastTheme = window.localStorage.getItem('darkTheme');

        if (lastTheme === 'true') {
            setDark(true);
            applyTheme(darkTheme);
        } else {
            setDark(false);
            applyTheme(lightTheme);
        }
        // if state changes, repaints the app
    }, [dark]);

    // rewrites set of css variablels/colors
    const applyTheme = theme => {
        const root = document.getElementsByTagName('html')[0];
        root.style.cssText = theme.join(';');
    }

    const toggle = () => {
        const body = document.getElementsByTagName('body')[0];
        body.style.cssText = 'transition: background .5s ease';

        setDark(!dark);
        window.localStorage.setItem('darkTheme', !dark);
    };

    return (
        <ThemeContext.Provider value={{
            dark,
            toggle,
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}


// styles
const lightTheme = [
    '--border: rgba(0,0,0,.2)',
    '--shadow: #000',
    '--heading: rgba(255,100,0,1)',
    '--main: #1d8f13',
    '--text: #000',
    '--textAlt: #fff',
    '--inactive: rgba(0,0,0,.3)',
    '--background: white',
];

const darkTheme = [
    '--border: rgba(255,255,255,.1)',
    '--shadow: #000',
    '--heading: rgba(255,255,5,.9)',
    '--main: #79248f',
    '--text: rgb(255, 255, 255)',
    '--textAlt: #fff',
    '--inactive: rgba(255,255,255,.3)',
    '--background: #2D2D2D',
];



// import React, { createContext, useReducer } from "react";
// import {createGlobalStyle} from "styled-components";
//
// export const ThemeContext = createContext();
//
// const initialState = {
//     originalTheme: true,
// };
//
// const themeReducer = (state, action) => {
//     switch (action.type) {
//         case "ORIGINAL":
//             return { originalTheme: true };
//         case "SECONDARY":
//             return { originalTheme: false };
//         default:
//             return state;
//     }
// };
//
// export function ThemeProvider(props) {
//     const [state, dispatch] = useReducer(themeReducer, initialState );    // must have 3rd argument? lazy loading?
//
//     return <ThemeContext.Provider value={{ state, dispatch }}>{props.children}</ThemeContext.Provider>;
// }
//
// export const GlobalStyles = createGlobalStyle`
//   body {
//     background: ${(state) => state ? 'green' : 'pink'};
//   }
// `;

// import React, { createContext, useReducer } from "react";
//
// export const ThemeContext = createContext();
//
// const initialState = {
//     darkMode: false,
// };
//
// const themeReducer = (state, action) => {
//     switch (action.type) {
//         case "LIGHTMODE":
//             return { darkMode: false };
//         case "DARKMODE":
//             return { darkMode: true };
//         default:
//             return state;
//     }
// };
//
// export function ThemeProvider(props) {
//     const [state, dispatch] = useReducer(themeReducer, initialState);
//
//     return <ThemeContext.Provider value={{ state, dispatch }}>{props.children}</ThemeContext.Provider>;
// }