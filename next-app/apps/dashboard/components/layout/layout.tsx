import React, {ReactNode} from 'react';
import { Wrapper} from '../../contexts/providers/ConsoleProvider';
import consoleContext from '../../contexts/consoleContext';
import Drawer from '../drawer/drawer';
// import Fab from '../fab/fab';
import {Fab} from '@next-app/fab';
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

          {props.children}
        </div>
      </div>
      <Fab 
        onClick={(e) => handleChangeTheme()}
      />
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
