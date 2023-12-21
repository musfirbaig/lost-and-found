"use client"
import { useEffect, useState } from "react";


export default function UsersList(){

    const [usersList, setUsersList] = useState([]);
    const [data, setData] = useState<any>([
      {
          "username": "abdullah",
          "email": "abudullah123@gmail.com",
          "register_date": "18/12/2023",
          "contact": "03008979264"
      },
      {
          "username": "umarfawad",
          "email": "umarfawad78@gmail.com",
          "register_date": "15/12/2023",
          "contact": "03128979287"
      },
      {
          "username": "bilalanjum",
          "email": "bilalanjum12@gmail.com",
          "register_date": "21/12/2023",
          "contact": "03168989264"
      },
      {
          "username": "abdulbari",
          "email": "abdulbari23@gmail.com",
          "register_date": "01/12/2023",
          "contact": "03152912924"
      },
      {
          "username": "sajidbaig",
          "email": "sajidbaig93@gmail.com",
          "register_date": "05/12/2023",
          "contact": "03156975386"
      },
      {
          "username": "ahmadsiddique",
          "email": "ahmadsiddique20@gmail.com",
          "register_date": "08/12/2023",
          "contact": "03108975364"
      },
      {
          "username": "anjumalam",
          "email": "anjumalam99@gmail.com",
          "register_date": "19/12/2023",
          "contact": "03008789261"
      },
      {
          "username": "harisnadeem",
          "email": "harisnadeem87@gmail.com",
          "register_date": "10/12/2023",
          "contact": "03158878261"
      }
  ]);



    function deleteUser(index: number) {
      // Create a new array without the user at the specified index
      const newData = [...data.slice(0, index), ...data.slice(index + 1)];
      // Update the state to trigger a re-render
      setData(newData);
    }

    useEffect(() => {
      // Set the initial data
      setUsersList(data);
    }, [usersList, data]);

    return (
        <div>
            <div className="overflow-x-auto">
  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
    <thead className="ltr:text-left rtl:text-right">
      <tr>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Username</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Email</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Contact No.</th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date Registered</th>
        <th className="px-4 py-2"></th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">

    {usersList.length>0 && (usersList.map((item:any, index:number) => (
          <tr key={index}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">{item['username']}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{item['email']}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{item['contact']}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{item['register_date']}</td>
              <td className="whitespace-nowrap px-4 py-2">
                <button onClick={()=> deleteUser(index)}
                  className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                >
                  Delete User
                </button>
                
              </td>
          </tr>
        ))) }

      {/* <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">Bag</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">24/05/2023</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">black CamelMountain</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">Seecs Entrance</td>
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
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">Bag</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">24/05/2023</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">black CamelMountain</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">Seecs Entrance</td>
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
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">Gary Barlow</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">24/05/1995</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">Singer</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">$20,000</td>
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
    )
}