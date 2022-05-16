import { MouseEvent, ReactNode } from 'react';
// import PropTypes from 'prop-types';
// import styles from './fab.module.css';

/* eslint-disable-next-line */
export interface FabProps {
  icon: ReactNode,
  onClick?: (event: MouseEvent<HTMLElement>) => void;
}

export function Fab(props: FabProps) {
  const {icon, onClick } = props;

  return (
    <button className='fixed bottom-5 right-5 p-3 rounded-full bg-primary w-12 h-12'
      onClick={onClick}
    >
      {icon}
    </button>
  );
}


Fab.defaultProps = {
  icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-dark-text" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
}

export default Fab;
