import React, {SetStateAction} from 'react';
import './index.module.css';
import {Wrapper} from '../contexts/providers/ConsoleProvider';
import consoleContext from '../contexts/consoleContext';
import { IConsole } from '../contexts/hooks/useConsole';



// apps/site/pages/index.tsx
export default function Index() {
  const { setState, theme } = React.useContext(consoleContext);


  const handleChangeTheme = (value: string) => {
    setState((callback: SetStateAction<IConsole>) => ({
      ...callback,
      theme: value
    }));
  }

  React.useEffect(() => {
    const html = document.getElementsByTagName('html')[0];
    html.classList.add(theme);
  }, [theme]);
  
  return (
    <Wrapper>
      {/*  */}
      <div className="fixed top-0 left-0 p-2 pl-0 w-full">
        <nav className="ml-80 bg-indigo-700 h-16 rounded-xl">

        </nav>
      </div>

      {/* drawer area */}
      <div className="fixed top-0 left-0 w-80 h-screen p-2">
        <div className="bg-indigo-700 h-full rounded-xl p-2">
        </div>
      </div>

      {/*  content goes here */}
      <div className="ml-80 mt-20 mr-2 box-border">
        <div className="">
          <button className='rounded-full bg-indigo-700 text-white p-2'
            onClick={() => handleChangeTheme('dark')}
          >
            Change Theme
          </button>
        </div>
      </div>

      {/* change the background-color here */}
        <style jsx global>{`
            body {
              background-color: ${theme === 'light' ? 'white' : 'black'}
            }
        `}
        </style>
    </Wrapper>
  );
}