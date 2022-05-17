// import styles from './index.module.css';
import * as React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

/* eslint-disable-next-line */
export interface RegisterProps { }

export function Register(props: RegisterProps) {
  const [register, setRegister] = React.useState({
    email: '',
    password: ''
  });


  const handleInputdata = (e) => {
    setRegister(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const router = useRouter();
  const { query } = router;

  const userEmail = React.useMemo(() => {
    if (query) {
      return query.email;
    }
    return null;
  }, [query]);

  return (
    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm m-auto mt-52">
      <h1 className="text-center text-light-text text-xl font-bold mb-5">Welcome to Al Iqraa</h1>
      <form>
        <div className="form-group mb-6">
          {/* <label htmlFor="exampleInputEmail2" className="form-label inline-block mb-2 text-light-text">Email address</label> */}
          <input
            type={userEmail ? 'password' : "email"}
            name={userEmail ? 'password' : "email"}
            required
            className="form-control
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
            aria-describedby="emailHelp"
            placeholder={`Enter ${userEmail ? 'password' : 'email'}`}
            value={userEmail ? register.password : register.email}
            onChange={handleInputdata}
          />
        </div>
        {/* <div className="form-group mb-6">
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
            placeholder="Password" />
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
        </div> */}
        <button type={userEmail ? 'submit' : 'button'} className="
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
          ease-in-out"
          onClick={(e) => {
            e.preventDefault();

            if (userEmail) {
              e.preventDefault();
              console.log(query.email, register.password);
              axios.post('http://al-iqraa.com/api/v1/auth/signup', {
                email: query.email,
                password: register.password
              }).then(res => {
                console.log(res);
              })
            }
            // send the user/email to the route
            // switch to password
            router.push({
              pathname: '/register',
              query: { email: register.email }
            })
          }}
        >Continue with Email</button>
        <p className="mt-6 text-center cursor-pointer"><a
          onClick={() => router.push('/')}
          className="text-primary hover:text-primary focus:text-primary transition duration-200 ease-in-out">Other Login Options</a>
        </p>
      </form>

      {/* <Fab /> */}
    </div>
  );
}

export default Register;
