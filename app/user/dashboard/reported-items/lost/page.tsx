"use client"

export default function LostItems(){
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
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
}