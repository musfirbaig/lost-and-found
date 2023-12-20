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
  user_id: string;
  is_returned: number;
  date_found: string;
  item_description: string;
  image_id: string;
  title: string;
  location: string;
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
    // console.log("append found item called");
    // console.log(data[userId]);
    setUsersData(data);

  }

  function appendLostItem(lostItem:LostItem){
    let data:UsersData = usersData;
    data[userId]["lost_items"].push(lostItem);
    // console.log("append lost item called");
    // console.log(data[userId]);
    setUsersData(data);
  }

  function getUsersData(){
    // const fileContent = fs.readFileSync(filePath, 'utf-8');
    // const data = JSON.parse(fileContent);
    const data = {
      "6ZXjlblL0JSGx89I1Zp5IwaaI653": {
        "user_image" : "alksdfjlask",
        "found_items": [
          {
            "title": "Bag",
            "item_description": "It is a red bag",
            "location": "seecs parking",
            "image_id": "11_827303a4-c8da-410a-b23f-af98860af29a_n3ysv5",
            "date_found": "10/12/2023"
          },
          {
              "title": "Laptop",
              "item_description": "It is a dell Laptop",
              "location": "seecs entrance",
              "image_id": "395430600-240x180_mp0vp0",
              "date_found": "08/11/2023"
            },
            {
              "title": "Notebook",
              "item_description": "It is a dux Notebook",
              "location": "seecs backyard",
              "image_id": "b0a72a6f26712f3c66a928c3976b0289.jpg_750x750.jpg__zfusgw",
              "date_found": "01/12/2023"
            }
        ],
        "lost_items": [
          {
            "title": "Phone",
            "item_description": "It is samsung s6, with green back cover",
            "location": "smme ground",
            "image_id": "412168046-600x450_vs75mp",
            "date_found": "05/12/2023"
          },
          {
              "title": "Laptop",
              "item_description": "It is a dell Laptop",
              "location": "seecs entrance",
              "image_id": "403078646-240x180_a9rhqx",
              "date_found": "09/12/2023"
            },
            {
              "title": "Tablet",
              "item_description": "It is a asus tablet",
              "location": "sns",
              "image_id": "357829063-600x450_m8vfj0",
              "date_found": "14/12/2023"
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
      console.log(user.uid);

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
