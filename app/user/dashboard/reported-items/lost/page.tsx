"use client"

import { useUser } from "@/app/user/UserContext";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function LostItems(){
  // const user = useUser();
  // const {userId, usersData} = user as any;
  // const lost_items = usersData[userId]["lost_items"];


  const user = useUser();
  const {userId, usersData} = user as any;


  // let foundItems = null; // Initialize as null or handle an empty state accordingly

  const [lostItems, setLostItems] = useState([]);

  // const found_items = usersData[userId]["found_items"];

  useEffect(() => {
    // This function will run after the component mounts
    // You can perform asynchronous operations or side effects here
    if (usersData && userId && usersData[userId] && usersData[userId]['lost_items']) {
      setLostItems(usersData[userId]['lost_items']);
      // You can perform operations or assign lostItems to something else here
    }
  }, [userId, usersData]);
    return (
        <div>

<div className="overflow-x-auto">
  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
    <thead className="ltr:text-left rtl:text-right">
      <tr>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Item</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Reported Date</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Description</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Location</th>
        <th className="px-4 py-2"></th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
      

      {lostItems.length>0 && (lostItems.map((item:any, index:number) => (
          <tr key={index}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">{item['title']}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{item['date']}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{item['description']}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{item['location']}</td>
              <td className="whitespace-nowrap px-4 py-2">
                <Link href={`lost/view/${index}`}>
                <span
                  className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                >
                  View
                </span>
                </Link>
                
              </td>
          </tr>
        )))}


        {/*
        <tr> 
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">Geometry</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">24/09/2023</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">Dux company green color</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">SMME</td>
        <td className="whitespace-nowrap px-4 py-2">
          <a
            href="#"
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            View
          </a>
        </td>
      </tr> */}



      {/* <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">Watch</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">04/12/2023</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">black color watch</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">Seecs Backyard</td>
        <td className="whitespace-nowrap px-4 py-2">
          <a
            href="#"
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            View
          </a>
        </td>
      </tr>

      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">Pen</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">24/05/2023</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">dollar blue pen</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">S3H</td>
        <td className="whitespace-nowrap px-4 py-2">
          <a
            href="#"
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            View
          </a>
        </td>
      </tr> */}

    </tbody>
  </table>
</div>
        </div>
    );
}