"use client"
import { useState } from "react";


export default function Search(){

    const [isFoundModalOpen, setFoundModalOpen] = useState(false);
    const [isLostModalOpen, setLostModalOpen] = useState(false);

    const [foundFilter, setFoundFilter] = useState(true);
    const [lostFilter, setLostFilter] = useState(false);

    const manageFilter = ()=>{
        setFoundFilter(!foundFilter);
        setLostFilter(!lostFilter);
    }

    const openFoundModal = () => {
        setFoundModalOpen(true);
    };

    const closeFoundModal = () => {
        setFoundModalOpen(false);
    };


    const openLostModal = () => {
        setLostModalOpen(true);
    };

    const closeLostModal = () => {
        setLostModalOpen(false);
    };

    return (
        <div>
            {/* Header container which contains filtering buttons */}
            <div className=" text-black p-4">
            <div className="container mx-auto flex justify-between items-center">
                
                {/* <h1 className="text-2xl font-semibold">Your App Name</h1> */}
                <h1 className="text-lg font-semibold">LOST AND FOUND ITEMS</h1>
                
                <div className="flex space-x-4">


                        {/* Pill */}

                        <button onClick={manageFilter}
                        className={`
                        
                        group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring activetext-opacity-75
                        `}
                        
                        >
                        <span
                            className={`block rounded-full ${foundFilter? "bg-transparent text-white" : "bg-white"} px-8 py-3 text-sm font-medium group-hover:bg-transparent`}
                        >
                            Founded Items
                        </span>
                        </button>

                        <button onClick={manageFilter}
                        className="group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                        
                        >
                        <span
                            className={`block rounded-full ${lostFilter? "bg-transparent text-white" : "bg-white"} px-8 py-3 text-sm font-medium group-hover:bg-transparent`}
                        >
                            Lost Items
                        </span>
                        </button>
                {/* <button className="px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                    Filter 1
                </button>
                <button className="px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300">
                    Filter 2
                </button>
                <button className="px-3 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none focus:ring focus:border-yellow-300">
                    Filter 3
                </button> */}
                </div>
            </div>
            </div>


            {/*
  Heads up! 👋

  Custom CSS:
    - animate-background https://github.com/markmead/hyperui/blob/main/tailwind.preset.js
*/}

<div className="grid grid-cols-12">
        {foundFilter && (<><div className="col-span-3 mx-2">
                    <article
                        className=" rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 transition bg-[length:400%_400%] shadow-sm hover:[animation-duration:_4s]"
                    >
                        <div className="rounded-[10px] bg-white p-4 sm:p-6">


                            <a href="#">
                                <h3 className="mt-0.5 text-sm font-medium text-gray-900">
                                    Item : Iphone 14 pro max
                                </h3>
                            </a>

                            <h4 className="mt-0.5 text-sm font-medium text-gray-900">
                                Location : SEECS backyard
                            </h4>
                            <h4 className="mt-0.5 text-sm font-medium text-gray-900">
                                Date : 20/12/2023
                            </h4>

                            {/* <div className="mt-4 flex flex-wrap gap-1">
    <span
        className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
    >
        Mobile
    </span>

    <span
        className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
    >
        Iphone
    </span>
    </div> */}

                            <button
                                className="float-right group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75" onClick={openFoundModal}

                            >
                                <span
                                    className="block rounded-full bg-white px-4 py-2 text-xs font-medium group-hover:bg-transparent"
                                >
                                    Claim
                                </span>
                            </button>

                            {/* <button
    className="group relative inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 -ml-4 md:-ml-6 float-right"
    >
    <span

        
    className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-indigo-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
    ></span>

    <span className="relative block border border-current bg-white px-4 py-2 text-xs">Download</span>
    </button> */}

                        </div>
                    </article>

                </div><div className="col-span-3 mx-2">
                        <article
                            className=" rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 transition bg-[length:400%_400%] shadow-sm hover:[animation-duration:_4s]"
                        >
                            <div className="rounded-[10px] bg-white p-4 sm:p-6">


                                <a href="#">
                                    <h3 className="mt-0.5 text-sm font-medium text-gray-900">
                                        Item : Iphone 14 pro max
                                    </h3>
                                </a>

                                <h4 className="mt-0.5 text-sm font-medium text-gray-900">
                                    Location : SEECS backyard
                                </h4>
                                <h4 className="mt-0.5 text-sm font-medium text-gray-900">
                                    Date : 20/12/2023
                                </h4>

                                <button
                                    className="float-right group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75" onClick={openFoundModal}

                                >
                                    <span
                                        className="block rounded-full bg-white px-4 py-2 text-xs font-medium group-hover:bg-transparent"
                                    >
                                        Claim
                                    </span>
                                </button>

                            </div>
                        </article>

                    </div></>)}




                    {/* all lost items rendered window */}


                    {lostFilter && (<><div className="col-span-3 mx-2">
                        <article
                            className=" rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 transition bg-[length:400%_400%] shadow-sm hover:[animation-duration:_4s]"
                        >
                            <div className="rounded-[10px] bg-white p-4 sm:p-6">


                                <a href="#">
                                    <h3 className="mt-0.5 text-sm font-medium text-gray-900">
                                        Item : Umrella
                                    </h3>
                                </a>

                                <h4 className="mt-0.5 text-sm font-medium text-gray-900">
                                    Location : Nbs Ground
                                </h4>
                                <h4 className="mt-0.5 text-sm font-medium text-gray-900">
                                    Date : 23/10/2023
                                </h4>

                                <button
                                    className="float-right group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75" onClick={openLostModal}

                                >
                                    <span
                                        className="block rounded-full bg-white px-4 py-2 text-xs font-medium group-hover:bg-transparent"
                                    >
                                        Report
                                    </span>
                                </button>

                            </div>
                        </article>

                    </div></>)}
</div>

{/* this model is for foundFilter */}
{isFoundModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="rounded-lg bg-white p-8 shadow-2xl">
            <h2 className="text-lg font-bold">Are you sure its your Item?</h2>

            <p className="mt-2 text-sm text-gray-500">
              Your claim request will be sent for approval?
            </p>

            <div className="mt-4 flex gap-2">
              <button
                type="button"
                className="rounded bg-green-50 px-4 py-2 text-sm font-medium text-green-600"
                onClick={closeFoundModal}
              >
                Yes, I'm sure
              </button>

              <button
                type="button"
                className="rounded bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600"
                onClick={closeFoundModal}
              >
                No, go back
              </button>
            </div>
          </div>
        </div>
      )}



      {/* this model is for lostFilter */}
{isLostModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="rounded-lg bg-white p-8 shadow-2xl">
            <h2 className="text-lg font-bold">Are you sure you have the Item?</h2>

            <p className="mt-2 text-sm text-gray-500">
              Your item report will be sent to the admin?
            </p>

            <div className="mt-4 flex gap-2">
              <button
                type="button"
                className="rounded bg-green-50 px-4 py-2 text-sm font-medium text-green-600"
                onClick={closeLostModal}
              >
                Yes, I'm sure
              </button>

              <button
                type="button"
                className="rounded bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600"
                onClick={closeLostModal}
              >
                No, go back
              </button>
            </div>
          </div>
        </div>
      )}
        </div>
    )
}