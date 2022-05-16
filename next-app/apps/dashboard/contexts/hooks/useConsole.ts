import React from 'react';

export interface IConsole {
    theme: string
}

export default function useConsole() {
    const [state, setState] = React.useState({
        theme: 'light'
    });

    return {
        theme: state.theme,
        setState
    }
}