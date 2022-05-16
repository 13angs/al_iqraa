import { useRouter } from 'next/router';
// import styles from './list.module.css';

/* eslint-disable-next-line */
export interface ListProps {}

export function List(props: ListProps) {
  const router = useRouter();
  return (
    <div>
      <div className="group w-full h-12 bg-light-in-paper dark:bg-dark-in-paper 
        rounded-xl mt-3 px-3 flex items-center gap-2 hover:bg-primary
        dark:hover:bg-indigo-600 cursor-pointer"
        onClick={() => router.push('/')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 dark:text-dark-text group-hover:fill-indigo-600 group-hover:stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
          <p className="text-light-text dark:text-dark-text font-semibold group-hover:text-dark-text">Dashboard</p>
      </div>

      <div className="group w-full h-12 bg-light-in-paper dark:bg-dark-in-paper 
        rounded-xl mt-3 px-3 flex items-center gap-2 hover:bg-primary
        dark:hover:bg-indigo-600 cursor-pointer"
        onClick={() => router.push('/blogs')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 dark:text-dark-text group-hover:fill-indigo-600 group-hover:stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
          <p className="text-light-text dark:text-dark-text font-semibold group-hover:text-dark-text">All Blogs</p>
      </div>
      
    </div>
  );
}

export default List;
