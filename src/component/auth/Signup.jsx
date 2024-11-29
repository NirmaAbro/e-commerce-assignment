// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import { handleError, handleSuccess } from '../auth/utills';

// function Signup() {
//     const [signupInfo, setSignupInfo] = useState({
//         name: '',
//         email: '',
//         password: ''
//     });

//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         const copySignupInfo = { ...signupInfo };
//         copySignupInfo[name] = value;
//         setSignupInfo(copySignupInfo);
//     };

//     const handleSignup = async (e) => {
//         console.log("signup button clicked");
//         e.preventDefault();
//         const { name, email, password } = signupInfo;
//         if (!name || !email || !password) {
//             return handleError('Name, email, and password are required');
//         }
//         try {
//             const url = `https://deploy-mern-app-1-api.vercel.app/auth/signup`;
//             const response = await fetch(url, {
//                 method: "POST",
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(signupInfo)
//             });
//             const result = await response.json();
//             const { success, message, error } = result;
//             if (success) {
//                 handleSuccess(message);
//                 setTimeout(() => {
//                     navigate('/login');
//                 }, 1000);
//             } else if (error) {
//                 const details = error?.details[0].message;
//                 handleError(details);
//             } else if (!success) {
//                 handleError(message);
//             }
//         } catch (err) {
//             handleError(err);
//         }
//     };

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100">
//             <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//                 <h1 className="text-2xl font-bold mb-6 text-center">Signup</h1>
//                 <form onSubmit={handleSignup} className="space-y-6">
//                     <div>
//                         <label htmlFor="name" className="block text-lg font-medium text-gray-700">
//                             Name
//                         </label>
//                         <input
//                             onChange={handleChange}
//                             type="text"
//                             name="name"
//                             autoFocus
//                             placeholder="Enter your name..."
//                             value={signupInfo.name}
//                             className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none "
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="email" className="block text-lg font-medium text-gray-700">
//                             Email
//                         </label>
//                         <input
//                             onChange={handleChange}
//                             type="email"
//                             name="email"
//                             placeholder="Enter your email..."
//                             value={signupInfo.email}
//                             className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm "
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="password" className="block text-lg font-medium text-gray-700">
//                             Password
//                         </label>
//                         <input
//                             onChange={handleChange}
//                             type="password"
//                             name="password"
//                             placeholder="Enter your password..."
//                             value={signupInfo.password}
//                             className="w-full mt-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none"
//                         />
//                     </div>
//                     <button
//                     onClick={handleSignup}
//                         type="submit"
//                         className="w-full bg-yellow-700 text-white py-3 rounded-lg font-semibold  transition duration-200"
//                     >
//                         Signup
//                     </button>
//                     <div onClick={handleLogin} className="text-center">
//                         <span className="text-yellow-700">Already have an account? </span>
//                         <Link to="/login" className="text-black hover:underline">
//                             Login
//                         </Link>
//                     </div>
//                 </form>
//             </div>
//             {/* <ToastContainer /> */}
//         </div>
//     );
// }

// export default Signup;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../auth/utills";

function Signup() {
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    console.log("form values ", e.target.value);
    const { name, value } = e.target;
    const copySignupInfo = { ...signupInfo };
    copySignupInfo[name] = value;
    setSignupInfo(copySignupInfo);
  };

  const handleSignup = async (e) => {
    console.log(" in file signup, signup button clicked");
    e.preventDefault();
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      return handleError("Name, email, and password are required");
    }
    try {
      // const url = `https://deploy-mern-app-1-api.vercel.app/auth/signup`;
      const url = `http://localhost:8080/auth/signup`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupInfo),
      });
      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg w-full max-w-sm shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Signup</h1>
        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg">
              Name
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Enter your name..."
              autoFocus
              value={signupInfo.name}
              className="text-lg p-2 border-b border-gray-500 outline-none placeholder-italic placeholder-gray-400"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg">
              Email
            </label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter your email..."
              value={signupInfo.email}
              className="text-lg p-2 border-b border-gray-500 outline-none placeholder-italic placeholder-gray-400"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-lg">
              Password
            </label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter your password..."
              value={signupInfo.password}
              className="text-lg p-2 border-b border-gray-500 outline-none placeholder-italic placeholder-gray-400"
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-700 text-white text-lg py-2 rounded hover:bg-yellow-800 transition-all"
          >
            Signup
          </button>
          <span className="text-sm text-gray-600">
            Already have an account?
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </span>
        </form>

        {/* <ToastContainer  />  */}

        <div className="w-20 h-20 justify-center items-center text-center flex mt-20  border4 border-black">
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Signup;
