import React, {SetStateAction} from 'react';
import { IConsole } from './hooks/useConsole';

const consoleContext = React.createContext({
    theme: 'light',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setState: (callback: SetStateAction<IConsole>)=>{}
});

export default consoleContext;