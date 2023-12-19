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

// interface UsersData {

// }


export type FoundItem = {
  title: string;
  description: string;
  location: string;
  image: string;
  date: string;
};
export type LostItem = {
  title: string;
  description: string;
  location: string;
  image: string;
  date: string;
};

type UserData = {
  user_image: string;
  found_items: FoundItem[];
  lost_items: LostItem[]; // Add the correct type for lost_items if needed
};

type UsersData = {
  [userId: string]: UserData;
};



// Create a context with an initial value (empty object)
const UserContext = createContext({});

// Export a provider component
export const UserProvider = ({ children }:{
    children: React.ReactNode
}) => {
  const [userId, setUserId] = useState("");
  const [usersData, setUsersData] = useState({});

  

  function appendFoundItem(foundItem:FoundItem){
    
    let data:UsersData = usersData;
    data[userId]["found_items"].push(foundItem);
    console.log("append found item called");
    console.log(data[userId]);
    setUsersData(data);

  }

  function appendLostItem(lostItem:LostItem){
    let data:UsersData = usersData;
    data[userId]["lost_items"].push(lostItem);
    console.log("append lost item called");
    console.log(data[userId]);
    setUsersData(data);
  }

  function getUsersData(){
    // const fileContent = fs.readFileSync(filePath, 'utf-8');
    // const data = JSON.parse(fileContent);
    const data = {
      "wBv4E8BRPNOlc3Ocj8HD9ZyTF0n1": {
        "user_image" : "alksdfjlask",
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
        "lost_items": [
          {
            "title": "Phone",
            "description": "It is samsung s6, with green back cover",
            "location": "smme ground",
            "image": "hmbytyhsrmhlxngbbssf",
            "date": "2023-11-11"
          },
          {
              "title": "Laptop",
              "description": "It is a dell Laptop",
              "location": "seecs entrance",
              "image": "cld-sample-4",
              "date": "2023-12-18"
            },
            {
              "title": "Tablet",
              "description": "It is a asus tablet",
              "location": "sns",
              "image": "cld-sample-4",
              "date": "2023-12-18"
            }
        ]
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
    usersData,
    appendFoundItem,
    appendLostItem
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

// Custom hook for consuming the context
export const useUser = () => {
  return useContext(UserContext);
};
