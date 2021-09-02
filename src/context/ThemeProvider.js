import React, { useState, useLayoutEffect } from 'react';

const ThemeContext = React.createContext({
    dark: false,
    toggle: () => {},
});

export default ThemeContext;

export function ThemeProvider (props) {
    const [dark, setDark] = useState(false);

    useLayoutEffect(() => {
        const lastTheme = window.localStorage.getItem('darkTheme');

        if (lastTheme === 'true') {
            setDark(true);
        } else {
            setDark(false);
        }
    }, [dark]);

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

