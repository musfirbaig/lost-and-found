// UserContext
"use client"
import { createContext, useContext, useState } from 'react';


import {onAuthStateChanged } from "firebase/auth";
import {auth} from "../../config/firebase"








// Create a context with an initial value (empty object)
const UserContext = createContext({});

// Export a provider component
export const UserProvider = ({ children }:{
    children: React.ReactNode
}) => {
  const [userId, setUserId] = useState("");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user

      setUserId(user.uid);
      // ...
    } else {
      // User is signed out
      // ...

      setUserId("");

    }
  });

  // Pass the state and methods down through the context provider
  const contextValue = {
    userId
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

// Custom hook for consuming the context
export const useUser = () => {
  return useContext(UserContext);
};
