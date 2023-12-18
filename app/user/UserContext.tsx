// UserContext
"use client"
import { createContext, useContext, useState } from 'react';


import {onAuthStateChanged } from "firebase/auth";
import {auth} from "../../config/firebase"


// I am writing logic for the fake json file, so that info will be available
// throught app , for the specific uuid userid, all lost and found items will be available


// import fs from 'fs';
// import path from 'path';

// const filePath = path.join(process.cwd(), '../', 'users.json');





// Create a context with an initial value (empty object)
const UserContext = createContext({});

// Export a provider component
export const UserProvider = ({ children }:{
    children: React.ReactNode
}) => {
  const [userId, setUserId] = useState("");
  const [usersData, setUsersData] = useState({});

  // function setUsersData(){}

  function getUsersData(){
    // const fileContent = fs.readFileSync(filePath, 'utf-8');
    // const data = JSON.parse(fileContent);
    const data = {
      "wBv4E8BRPNOlc3Ocj8HD9ZyTF0n1": {
        "found_items": [
          {
            "title": "Bag",
            "description": "It is a red bag",
            "location": "seecs parking",
            "image": "hmbytyhsrmhlxngbbssf",
            "date": "2023-12-18"
          },
          {
              "title": "Laptop",
              "description": "It is a dell Laptop",
              "location": "seecs entrance",
              "image": "cld-sample-4",
              "date": "2023-12-18"
            },
            {
              "title": "Notebook",
              "description": "It is a dux Notebook",
              "location": "seecs backyard",
              "image": "cld-sample-4",
              "date": "2023-12-18"
            }
        ],
        "lost_items": []
      },
      "user2": {
      }
    }
    
    console.log(data);
    setUsersData(data);
    // return data;
  }

  // function getUserData(userUid: string){
    
  // }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user

      setUserId(user.uid);

      // this is a testing function , that fetches all usersdata, from fake users.json file
      if(Object.keys(usersData).length === 0){
        getUsersData();
      }
      // ...
    } else {
      // User is signed out
      // ...

      setUserId("");

    }
  });

  // Pass the state and methods down through the context provider
  const contextValue = {
    userId,
    usersData
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

// Custom hook for consuming the context
export const useUser = () => {
  return useContext(UserContext);
};
