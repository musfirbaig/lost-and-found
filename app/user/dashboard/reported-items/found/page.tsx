"use client"
import { useUser } from '@/app/user/UserContext';
import Link from 'next/link';

export default function FoundedItems(){

  const {userId, usersData} = useUser();
  const found_items = usersData[userId]["found_items"];


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

    {found_items.map((item:any, index:number) => (
          <tr key={index}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center">{item['title']}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{item['date']}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{item['description']}</td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700 text-center">{item['location']}</td>
              <td className="whitespace-nowrap px-4 py-2">
                <Link href={`found/view/${index}`}>
                <span
                  className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                >
                  View
                </span>
                </Link>
                
              </td>
          </tr>
        ))}

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
    );
}