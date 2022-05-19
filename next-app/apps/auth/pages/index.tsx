// import styles from './index.module.css';
import * as React from 'react';
import { Fab } from '@next-app/fab';
import { useRouter } from 'next/router';
import axios from 'axios';

export function Index() {
  const router = useRouter();
  const [login, setLogin] = React.useState({
    email: '',
    password: ''
  })
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  const handleInput = (e) => {
    setLogin(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    axios.post('http://al-iqraa.com/api/v1/auth/signin', {
      email: login.email,
      password: login.password
    }).then(res => {
      console.log(res);
    })
  }
  return (
    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm m-auto mt-40">
      <h1 className="text-center text-light-text text-xl font-bold mb-5">Welcome to Al Iqraa</h1>
      <p className="text-gray-500 my-2">Please sign-in to your account and start the adventure</p>
      <form onSubmit={handleLoginSubmit}>
        <div className="form-group mb-6">
          <label htmlFor="exampleInputEmail2" className="form-label inline-block mb-2 text-light-text">Email address</label>
          <input type="email" className="form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-light-text
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-light-text focus:bg-white focus:border-primary focus:outline-none" id="exampleInputEmail2"
            aria-describedby="emailHelp" placeholder="Enter email"
            name='email'
            onChange={handleInput}
            value={login.email}
          />
        </div>
        <div className="form-group mb-6">
          <label htmlFor="exampleInputPassword2" className="form-label inline-block mb-2 text-light-text">Password</label>
          <input type="password" className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-light-text
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-light-text focus:bg-white focus:border-primary focus:outline-none" id="exampleInputPassword2"
            placeholder="Password"
            name="password"
            onChange={handleInput}
            value={login.password}
          />
        </div>
        <div className="flex justify-between items-center mb-6">
          <div className="form-group form-check">
            <input type="checkbox"
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              id="exampleCheck2" />
            <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2">Remember me</label>
          </div>
          <a href="#!"
            className="text-primary hover:text-primary focus:text-primary transition duration-200 ease-in-out">Forgot
            password?</a>
        </div>
        <button type="submit" className="
          w-full
          px-6
          py-2.5
          bg-primary
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg
          transition
          duration-150
          ease-in-out">Sign in</button>
        <p className="mt-6 text-center cursor-pointer"><a
          onClick={() => router.push('/register')}
          className="text-primary hover:text-primary focus:text-primary transition duration-200 ease-in-out">Continue with Email</a>
        </p>
      </form>

      <Fab />
    </div>
  );
}

export default Index;
