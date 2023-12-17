import { useUser } from "../UserContext"
export function GeneralPage(){

    const userId = useUser();
    console.log(userId);

    // console.log(useUser());
    return (
        <div> 
                {/* <h1>Dashboard Section</h1> */}

                <section className="text-gray-600 body-font">
  <div className="container px-5 -mx-20">

    <div className="flex flex-wrap justify-center">

      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <div className="px-8 py-8 relative z-10 w-full border-4 border-gray-200 bg-white opacity-100 hover:border-blue-200 hover:bg-sky-100 hover:cursor-pointer">
            <h2 className="tracking-widest text-sm title-font font-medium text-center text-indigo-500 mb-1">LOST ITEM</h2>
            <h3 className="title-font text-lg font-medium text-gray-900 mb-3 text-center my-5 ">Report Lost Item Here!</h3>
          </div>
        </div>
      </div>
      
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <div className="px-8 py-8 relative z-10 w-full border-4 border-gray-200 bg-white opacity-100 hover:border-blue-200 hover:bg-sky-100 hover:cursor-pointer">
            <h2 className="tracking-widest text-sm title-font font-medium text-center text-indigo-500 mb-1">LOST ITEM</h2>
            <h3 className="title-font text-lg font-medium text-gray-900 mb-3 text-center my-5">Report Lost Item Here!</h3>
          </div>
        </div>
      </div>
      
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <div className="px-8 py-8 relative z-10 w-full border-4 border-gray-200 bg-white opacity-100 hover:border-blue-200 hover:bg-sky-100 hover:cursor-pointer">
            <h2 className="tracking-widest text-sm title-font font-medium text-center text-indigo-500 mb-1">LOST ITEM</h2>
            <h3 className="title-font text-lg font-medium text-gray-900 mb-3 text-center my-5">Report Lost Item Here!</h3>
          </div>
        </div>
      </div>
      
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <div className="px-8 py-8 relative z-10 w-full border-4 border-gray-200 bg-white opacity-100 hover:border-blue-200 hover:bg-sky-100 hover:cursor-pointer">
            <h2 className="tracking-widest text-sm title-font font-medium text-center text-indigo-500 mb-1">LOST ITEM</h2>
            <h3 className="title-font text-lg font-medium text-gray-900 mb-3 text-center my-5">Report Lost Item Here!</h3>
          </div>
        </div>
      </div>
      
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <div className="px-8 py-8 relative z-10 w-full border-4 border-gray-200 bg-white opacity-100 hover:border-blue-200 hover:bg-sky-100 hover:cursor-pointer">
            <h2 className="tracking-widest text-sm title-font font-medium text-center text-indigo-500 mb-1">LOST ITEM</h2>
            <h3 className="title-font text-lg font-medium text-gray-900 mb-3 text-center my-5">Report Lost Item Here!</h3>
          </div>
        </div>
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