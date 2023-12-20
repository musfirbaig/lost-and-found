"use client"
import Link from "next/link";
import { useUser } from "../UserContext"
import { useEffect, useState } from "react";
export function GeneralPage(){

  // testing code by adding fetch requests to test apis
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/route/APIs/users?id=2');
        const data = await response.json();
        setApiData(data);
        console.log("general page is build");
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  
  const user = useUser();
  // const {userId, usersData} = useUser();
    const {userId, usersData} = user as any;
    // console.log(userId);
    // const userId = useUser();
    const name = "musfirbaig";

    // console.log(useUser());
    return (
        <div className="ml-64"> 
                {/* <h1>Dashboard Section</h1> */}

                <section className="text-gray-600 body-font">
  <div className="container px-5 -mx-20">

{/* it needed to be removed, only for testing */}
    {/* <p>{userId}</p> */}

    <div className="flex flex-wrap justify-center">

    <div className="lg:w-1/3 sm:w-1/2 p-4">
      <Link href="/user/dashboard/search">
        <div className="flex relative">
          <div className="px-8 py-8 relative z-10 w-full border-4 rounded-3xl border-gray-200 bg-white opacity-100 hover:border-gray-500 duration-300  hover:cursor-pointer hover:shadow-2xl">
            <h2 className="tracking-widest text-sm title-font font-medium text-center text-indigo-500 mb-1">SEARCH ITEMS</h2>
            <h3 className="title-font text-base font-medium text-gray-900 mb-3 text-center my-5 ">View All Items Here!</h3>
          </div>
        </div>
        </Link>
      </div>
    
      <div className="lg:w-1/3 sm:w-1/2 p-4">
      <Link href="/user/dashboard/report-items/lost">
        <div className="flex relative">
          <div className="px-8 py-8 relative z-10 w-full border-4 rounded-3xl border-gray-200 bg-white opacity-100 hover:border-gray-500 duration-300  hover:cursor-pointer hover:shadow-2xl">
            <h2 className="tracking-widest text-base title-font font-medium text-center text-indigo-500 mb-1">LOST ITEM</h2>
            <h3 className="title-font text-sm font-medium text-gray-900 mb-3 text-center my-5 ">Report Lost Item Here!</h3>
          </div>
        </div>
        </Link>
      </div>

      
      
      <div className="lg:w-1/3 sm:w-1/2 p-4">
      <Link href="/user/dashboard/report-items/found">
        <div className="flex relative">
          <div className="px-8 py-8 relative z-10 w-full border-4 rounded-3xl border-gray-200 bg-white opacity-100 hover:border-gray-500 duration-300  hover:cursor-pointer hover:shadow-2xl">
            <h2 className="tracking-widest text-base title-font font-medium text-center text-indigo-500 mb-1">FOUND ITEM</h2>
            <h3 className="title-font text-sm font-medium text-gray-900 mb-3 text-center my-5">Report Found Item Here!</h3>
          </div>
        </div>
        </Link>
      </div>
      
      
      
      <div className="lg:w-1/3 sm:w-1/2 p-4">
      <Link href="/user/dashboard/reported-items/lost">
        <div className="flex relative">
          <div className="px-8 py-8 relative z-10 w-full border-4 rounded-3xl border-gray-200 bg-white opacity-100 hover:border-gray-500 duration-300  hover:cursor-pointer hover:shadow-2xl">
            <h2 className="tracking-widest text-base title-font font-medium text-center text-indigo-500 mb-1">REPORTED</h2>
            <h3 className="title-font text-sm font-medium text-gray-900 mb-3 text-center my-5">Reported Found Item Here!</h3>
          </div>
        </div>
        </Link>
      </div>
      
      <div className="lg:w-1/3 sm:w-1/2 p-4">
      <Link href="/user/dashboard/reported-items/found">
        <div className="flex relative">
          <div className="px-8 py-8 relative z-10 w-full border-4 rounded-3xl border-gray-200 bg-white opacity-100 hover:border-gray-500 duration-300  hover:cursor-pointer hover:shadow-2xl">
            <h2 className="tracking-widest text-base title-font font-medium text-center text-indigo-500 mb-1">REPORTED</h2>
            <h3 className="title-font text-sm font-medium text-gray-900 mb-3 text-center my-5">Reported Lost Item Here!</h3>
          </div>
        </div>
        </Link>
      </div>

  
     
      
      {/* <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/605x365"></img>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div> */}
    </div>
  </div>
</section>
        </div>
    )
}