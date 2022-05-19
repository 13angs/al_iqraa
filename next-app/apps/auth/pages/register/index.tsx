// import styles from './index.module.css';
import * as React from 'react';
import { useRouter } from 'next/router';
import useRequest from '../..//hooks/useRequest';

/* eslint-disable-next-line */
export interface RegisterProps { }

export function Register(props: RegisterProps) {
  const router = useRouter();
  const { query } = router;

  const [register, setRegister] = React.useState({
    email: '',
    password: ''
  });


  // connect and handle signup api using useRequest hook
  const { errors: signupErrors, doRequest: signupDoRequest } = useRequest(
    'http://al-iqraa.com/api/v1/auth/signup',
    { email: query.email, password: register.password },
    'post'
  );

  // connect and handle existemail api using useRequest hook
  const { errors: existEmailErrors, doRequest: existEmailDoRequest, setErrors: setExistEmailErrors } = useRequest(
    'http://al-iqraa.com/api/v1/auth/existemail',
    { email: register.email },
    'post',
    () => {
      // reset/hide if theres errors in exist email
      setExistEmailErrors([]);

      router.push({
        pathname: '/register',
        query: { email: register.email }
      })
    }
  );


  const handleInputdata = (e) => {
    setRegister(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleEmail = async (e) => {
    e.preventDefault();

    if (userEmail) {

      signupDoRequest();

      return;

    }

    // check if email exist
    existEmailDoRequest();
  }


  // error handler 
  const errorhandler = () => {
    if (signupErrors.length > 0) {
      const passError = signupErrors.find((err) => err.field === 'password');
      return (<span className='block text-red-500 mt-2'>{passError.message}</span>)
    }

    // handle email error
    // const existEmail = existEmailErrors || [];
    if (existEmailErrors.length > 0) {
      return (<span className='block text-red-500 mt-2'>{existEmailErrors[0].message}</span>)
    }

  }


  // make sure to use premetive types
  const userEmail = React.useMemo(() => {
    return query.email || null;
  }, [query.email]);

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
          {/* handle the email and password errors */}
          {errorhandler()}
        </div>

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
          onClick={handleEmail}
        >Continue with Email</button>
        <p className="mt-6 text-center cursor-pointer"><a
          onClick={() => router.push('/')}
          className="text-primary hover:text-primary focus:text-primary transition duration-200 ease-in-out">Other Login Options</a>
        </p>
      </form>

      {/* <Fab /> */}
    </div>
  )
}

export default Register;
