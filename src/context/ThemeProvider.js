import React, { useState, useLayoutEffect } from 'react';

const ThemeContext = React.createContext({
    isOriginal: false,
    toggle: () => {},
});

export default ThemeContext;

export function ThemeProvider (props) {
    const [isOriginal, setDark] = useState(false);

    useLayoutEffect(() => {
        const lastTheme = window.localStorage.getItem('darkTheme');

        if (lastTheme === 'true') {
            setDark(true);
        } else {
            setDark(false);
        }
    }, [isOriginal]);

    const toggle = () => {
        const body = document.getElementsByTagName('body')[0];
        body.style.cssText = 'transition: background .5s ease';

        setDark(!isOriginal);
        window.localStorage.setItem('darkTheme', !isOriginal);
    };

    return (
        <ThemeContext.Provider value={{
            isOriginal,
            toggle,
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

