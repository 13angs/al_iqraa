import * as React from 'react';
import consoleContext from "../consoleContext";
import useConsole from "../hooks/useConsole";

export default function ConsoleProvider({children}) {
    return (
        <consoleContext.Provider value={useConsole()}>
            {children}
        </consoleContext.Provider>
    )
}

export function Wrapper({ children }) {
    
    return (
        <ConsoleProvider>
            <div className='w-full h-full'>
                {children}
            </div>
        </ConsoleProvider>
    )
}