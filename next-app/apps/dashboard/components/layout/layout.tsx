import React, {ReactNode, SetStateAction} from 'react';
import { Wrapper} from '../../contexts/providers/ConsoleProvider';
import { IConsole } from '../../contexts/hooks/useConsole';
import consoleContext from '../../contexts/consoleContext';
import Drawer from '../drawer/drawer';
import Fab from '../fab/fab';
// import styles from './layout.module.css';

/* eslint-disable-next-line */
export interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { theme, setTheme } = React.useContext(consoleContext);


  const handleChangeTheme = () => {
    let value = localStorage.getItem('LOCAL_THEME');
    value = value === 'light' ? 'dark' : 'light';

    const html = document.getElementsByTagName('html')[0];

    setTheme(html, value);
  }

  return (
    <Wrapper>
      {/*  */}
      <div className="fixed top-0 left-0 p-3 pl-0 w-full">
        <nav className="ml-80 bg-light-paper dark:bg-dark-paper drop-shadow-md h-16 rounded-xl">
        </nav>
      </div>

      {/* drawer area */}
      <Drawer />

      {/*  content goes here */}
      <div className="ml-80 mt-20 mr-3">
        <div className="pt-2">
          <Fab 
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-dark-text" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>}
            onClick={(e) => handleChangeTheme()}
          />

          {props.children}
        </div>
      </div>

      {/* change the background-color here */}
        <style jsx global>{`
            body {
              background-color: ${theme === 'light' ? '#F2F3F4' : '#0F172A'}
            }
        `}
        </style>
    </Wrapper>
  );
}
