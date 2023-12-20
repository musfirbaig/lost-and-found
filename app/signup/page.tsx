'use client'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import { useEffect, useState } from 'react';
import {auth} from '../../config/firebase';

export default function SignUp() {

  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [contactNo, setContactNo] = useState('');
  // const [username, setUsername] = useState('');
  const [userData, setUserData] = useState({});

  // let fakeUser = {
  //       user_id: '8Or452e51TSdfUgUlZ78456l5u',
  //       user_name: 'nanannanana',
  //       email: 'AAAA@example.com',
  //       passwords: 'hashedpword1236897',
  //       contact_no: '123-6545698-767',
  //       user_role: 'client',
  //       f_name: 'mohsin',
  //       l_name: 'Doe',
  //       user_dp_id: 'default-avatar-profile-icon-vector-600nw-1745180411',
      
  // }

  

  const handleRegisterUser = async () => {
    try {
      const response = await fetch('http://localhost:3000/route/APIs/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log('User registered successfully!');
        // console.log(userData);
      } else {
        console.error('Failed to register user:', response.statusText);
      }
    } catch (error) {
      console.error('Error during user registration:', error);
    }
  };

  useEffect(() => {
    // This block of code will be executed whenever userData is updated
    console.log("from signup button ", userData);
    if (Object.keys(userData).length > 0) {
      // console.log(userData);
      handleRegisterUser();
    }
  }, [userData]);

  const userSignUp = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const registerData = {
        user_id: user.uid,
        user_name: user.uid,
        email: email,
        passwords: password,
        contact_no: contactNo,
        user_role: 'client',
        f_name: fname,
        l_name: lname,
        user_dp_id: 'default-avatar-profile-icon-vector-600nw-1745180411_hdtsox',
      };

      // console.log(user);
      setUserData(registerData);
      // console.log("from signup button ", userData);
      // await handleRegisterUser(); 
      // Wait for handleRegisterUser to complete before moving forward

      // Redirect to the dashboard or any other page upon successful login
      router.push('../login');
    } catch (error:any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      // Handle login error
      console.error(errorCode, errorMessage);
    }
  };

  const submitSignInBtn = (e: React.FormEvent) => {
    e.preventDefault();
    // Call your login function with the current input values
    userSignUp(email, password);
  };

  

    
      
    return (
        <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}

      
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-0 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          /> */}
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign Up
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={submitSignInBtn}>

          <div className="flex space-x-4">
            <div>
            <label htmlFor="fname" className="block text-sm font-medium leading-6 text-gray-900">
              First Name
              </label>
              <div className="mt-2">
                <input
                  id="fname"
                  name="fname"
                  type="text"
                  value={fname}
                  onChange={(e)=> setFname(e.target.value)}
                  // autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
            <label htmlFor="lname" className="block text-sm font-medium leading-6 text-gray-900">
              Last Name
              </label>
              <div className="mt-2">
                <input
                  id="lname"
                  name="lname"
                  type="text"
                  value={lname}
                  onChange={(e)=> setLname(e.target.value)}
                  // autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            </div>

            {/* <div>
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
              User Name
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={username}
                  onChange={(e)=> setUsername(e.target.value)}
                  // autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}

            <div>
            <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">
              Contact Number#
              </label>
              <div className="mt-2">
                <input
                  id="contact"
                  name="contact"
                  type="text"
                  value={contactNo}
                  onChange={(e)=> setContactNo(e.target.value)}
                  // autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
              {/* <button
                type="submit" onClick={submitSignInBtn}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button> */}
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <Link href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Login Here
            </Link>
          </p>
        </div>
      </div>
    </>
    )
}