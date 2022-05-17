import React, { SetStateAction, ReactNode } from 'react';
import useDefaultContext from './use-default-context';

/* eslint-disable-next-line */
export interface DefaultContextProps { 
  children?: ReactNode
}

export interface DefaultState {
  theme: string;
}

export const DefaultContext = React.createContext({
    theme: '',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setState: (callback: SetStateAction<DefaultState>) => {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setTheme: (html: HTMLElement, localTheme: string) => {},
})

export function DefaultContextProvider(props: DefaultContextProps) {
  const { children } = props;
  return (
    <DefaultContext.Provider value={useDefaultContext()}>
      {children}
    </DefaultContext.Provider>
  );
}

export interface WrapperProps {
  children?: ReactNode
}

export function DefaultContextWrapper(props: WrapperProps) {
  const { children } = props;
    
  return (
      <DefaultContextProvider>
          <div className='w-full h-full'>
              {children}
          </div>
      </DefaultContextProvider>
  )
}

export default DefaultContext;
