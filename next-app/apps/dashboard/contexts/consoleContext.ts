import React, {SetStateAction} from 'react';
import { IConsole } from './hooks/useConsole';

const consoleContext = React.createContext({
    theme: '',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setState: (callback: SetStateAction<IConsole>) => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setTheme: (html: HTMLElement, localTheme: string) => {},
});

export default consoleContext;