import { MouseEvent, ReactNode } from 'react';
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

export default Fab;
