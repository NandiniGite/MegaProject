// import React, { createContext, useContext, useEffect, useState } from "react";

// import { getCurrentUser } from "../lib/appwrite";

// const GlobalContext = createContext();
// export const useGlobalContext = () => useContext(GlobalContext);

// const GlobalProvider = ({ children }) => {
//   const [isLogged, setIsLogged] = useState(false);
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getCurrentUser()
//       .then((res) => {
//         if (res) {
//           setIsLogged(true);
//           setUser(res);
//         } else {
//           setIsLogged(false);
//           setUser(null);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <GlobalContext.Provider
//       value={{
//         isLogged,
//         setIsLogged,
//         user,
//         setUser,
//         loading,
//       }}
//     >
//       {children}
//     </GlobalContext.Provider>
//   );
// };

// export default GlobalProvider;

// Example in GlobalProvider.js

// import React, { createContext, useState, useContext } from "react";
// import axios from "axios";

// const GlobalContext = createContext();

// export const useGlobalContext = () => useContext(GlobalContext);

// const GlobalProvider = ({ children }) => {
//   const [isLogged, setIsLogged] = useState(false);
//   const [token, setToken] = useState(null);

//   const loginUser = async (email, password) => {
//     try {
//       const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });
//       setToken(response.data.token);
//       setIsLogged(true);
//     } catch (error) {
//       console.error("Login error:", error.response?.data || error.message);
//       alert("Failed to log in. Please check your credentials and try again.");
//     }
//   };

//   const registerUser = async (firstName, lastName, email, password) => {
//     try {
//       await axios.post("http://localhost:5000/api/auth/register", { firstName, lastName, email, password });
//     } catch (error) {
//       console.error("Registration error:", error.response?.data || error.message);
//       alert("Registration failed. Please try again.");
//     }
//   };

//   return (
//     <GlobalContext.Provider value={{ isLogged, setIsLogged, loginUser, registerUser, token }}>
//       {children}
//     </GlobalContext.Provider>
//   );
// };

// export default GlobalProvider;

// import React, { createContext, useState, useContext } from "react";
// import axios from "axios";

// const GlobalContext = createContext();

// const GlobalProvider = ({ children }) => {
//   const [isLogged, setIsLogged] = useState(false);
//   const [token, setToken] = useState(null);

//   const loginUser = async (email, password) => {
//     try {
//       const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });
//       setToken(response.data.token);
//       setIsLogged(true);
//     } catch (error) {
//       console.error("Login error:", error.response?.data || error.message);
//       alert("Failed to log in. Please check your credentials and try again.");
//     }
//   };

//   const registerUser = async (firstName, lastName, email, password) => {
//     try {
//       await axios.post("http://localhost:5000/api/auth/register", { firstName, lastName, email, password });
//     } catch (error) {
//       console.error("Registration error:", error.response?.data || error.message);
//       alert("Registration failed. Please try again.");
//     }
//   };

//   return (
//     <GlobalContext.Provider value={{ isLogged, setIsLogged, loginUser, registerUser, token }}>
//       {children}
//     </GlobalContext.Provider>
//   );
// };

// export const useGlobalContext = () => useContext(GlobalContext);

// export default GlobalProvider;  // Ensure GlobalProvider is the default export

import React, { createContext, useState, useContext } from 'react';
import { Alert } from 'react-native';
import axios from 'axios';

// Create context
const GlobalContext = createContext();

// Global Provider component
export const GlobalProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  // Register user function to send data to backend
  const registerUser = async (firstName, lastName, email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', { firstName, lastName, email, password });
      setUser(response.data);
    } catch (error) {
      console.error('Registration error:', error.response?.data || error.message);
      Alert.alert('Registration failed', 'Please try again');
    }
  };

  // Login user function to authenticate and get the token
  const loginUser = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      setToken(response.data.token);
      setIsLogged(true);
      setUser(response.data.user); // If the response contains user data
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
      Alert.alert('Login failed', 'Please check your credentials and try again');
    }
  };

  return (
    <GlobalContext.Provider value={{ isLogged, setIsLogged, user, setUser, token, loginUser, registerUser }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to use the context
export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalProvider;
