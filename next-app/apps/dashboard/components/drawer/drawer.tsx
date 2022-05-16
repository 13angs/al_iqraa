// import styles from './drawer.module.css';
import { useRouter } from 'next/router';
import List from '../list/list';

/* eslint-disable-next-line */
export interface DrawerProps {}

export function Drawer(props: DrawerProps) {
  const router = useRouter();
  return (
    <div className="fixed top-0 left-0 w-80 h-full p-3">
      <div className="bg-light-paper dark:bg-dark-paper drop-shadow-md w-full h-full rounded-xl p-3">

        {/* logo area */}
        <div className="w-full h-20 bg-light-in-paper dark:bg-dark-in-paper rounded-xl">
        </div>

        <hr className="w-full dark:opacity-5 my-3" />

        {/* menu area */}
        <List/>
      </div>
    </div>
  );
}

export default Drawer;
