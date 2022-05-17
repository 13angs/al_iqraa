import * as React from 'react';


export function useDefaultContext() {
    const [state, setState] = React.useState({
        theme: 'light'
    });

    const setTheme = React.useCallback((html: HTMLElement, localTheme: string) => {
        
        if (localTheme === 'dark') {
            // localStorage.setItem('LOCAL_THEME', localTheme);

            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }

        localStorage.setItem('LOCAL_THEME', localTheme);

        setState(prev => ({
            ...prev,
            theme: localTheme
        }))
    }, [setState]);

    React.useEffect(() => {
        let localTheme = '';
        localTheme = localStorage.getItem('LOCAL_THEME') || 'light';

        const html = document.getElementsByTagName('html')[0];

        setTheme(html, localTheme);
    }, [setTheme]);


    return {
        theme: state.theme,
        setState,
        setTheme
    }
}

export default useDefaultContext;