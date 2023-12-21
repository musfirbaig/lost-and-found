"use client"
import { useEffect, useState } from "react";
import { useUser } from "../UserContext";


export default function GeneralPage(){

    const [isFoundModalOpen, setFoundModalOpen] = useState(false);
    const [isLostModalOpen, setLostModalOpen] = useState(false);

    const [foundFilter, setFoundFilter] = useState(true);
    const [lostFilter, setLostFilter] = useState(false);

    const [foundItems, setFoundItems] = useState([]);
    const [lostItems, setLostItems] = useState([]);
    const user = useUser();
    const {allItems} = user as any;

    // const found_items = usersData[userId]["found_items"];
  
    useEffect(() => {
      // This function will run after the component mounts
      // You can perform asynchronous operations or side effects here
      if (Object.keys(allItems).length>0) {
        setFoundItems(allItems["found_items"]);
        setLostItems(allItems["lost_items"]);
        // You can perform operations or assign foundItems to something else here
      }
    }, [allItems]);

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
                        
                        group inline-block rounded-full bg-gray-700  hover:text-white focus:outline-none focus:ring activetext-opacity-75
                        `}
                        
                        >
                        <span
                            className={`block rounded-full ${foundFilter? "bg-transparent text-white" : "bg-white"} px-8 py-3 text-sm font-medium group-hover:bg-transparent`}
                        >
                            Founded Items
                        </span>
                        </button>

                        <button onClick={manageFilter}
                        className="group inline-block rounded-full bg-gray-700 hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                        
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
        {foundFilter && foundItems.length>0 && (foundItems.map((item:any, index:number) => (<>
                        <div className="col-span-3 mx-3 my-3">
                        <article
                            className="rounded-xl border-2 border-gray-500 p-0.5 transition bg-[length:400%_400%] shadow-sm hover:[animation-duration:_4s]"
                        >
                            <div className="rounded-[10px] bg-white p-4 sm:p-6">


                                <a href="#">
                                    <h3 className="mt-0.5 text-sm font-medium text-gray-900">
                                        Item : {item.item}
                                    </h3>
                                </a>

                                <h4 className="mt-0.5 text-sm font-medium text-gray-900">
                                    Location : {item.location}
                                </h4>
                                <h4 className="mt-0.5 text-sm font-medium text-gray-900">
                                    Date : {item.date}
                                </h4>

                                <button
                                    className="float-right group inline-block border-gray-700 border-2 rounded-full bg-gray-700 hover:text-white focus:outline-none focus:ring active:text-opacity-75" onClick={openFoundModal}

                                >
                                    <span
                                        className="block rounded-full bg-white px-4 py-2 text-xs font-medium group-hover:bg-transparent"
                                    >
                                        Claim
                                    </span>
                                </button>

                            </div>
                        </article>

                    </div></>)))}




                    {/* all lost items rendered window */}


                    {lostFilter && lostItems.length>0 && (lostItems.map((item:any, index:number) => (<><div className="col-span-3 mx-3 my-3">
                        <article
                            className="rounded-xl border-2 border-gray-500 p-0.5  transition bg-[length:400%_400%] shadow-sm hover:[animation-duration:_4s]"
                        >
                            <div className="rounded-[10px] bg-white p-4 sm:p-6">


                                <a href="#">
                                    <h3 className="mt-0.5 text-sm font-medium text-gray-900">
                                        Item : {item.item}
                                    </h3>
                                </a>

                                <h4 className="mt-0.5 text-sm font-medium text-gray-900">
                                    Location : {item.location}
                                </h4>
                                <h4 className="mt-0.5 text-sm font-medium text-gray-900">
                                    Date : {item.date}
                                </h4>

                                <button
                                    className="float-right group inline-block border-gray-700 border-2 rounded-full bg-gray-700 hover:text-white focus:outline-none focus:ring active:text-opacity-75" onClick={openLostModal}

                                >
                                    <span
                                        className="block rounded-full bg-white px-4 py-2 text-xs font-medium group-hover:bg-transparent"
                                    >
                                        Report
                                    </span>
                                </button>

                            </div>
                        </article>

                    </div></>)))}
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