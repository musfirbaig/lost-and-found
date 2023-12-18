

export default function ViewItem(){

    return (
              <div className="container py-5 px-20 flex items-center justify-center">
                {/* Use max-w-7xl to limit the width of the container */}
                <div className="bg-white transition shadow-xl grid grid-cols-12 rounded-lg w-full max-w-7xl">
                  {/* Column 1: Image */}
                  <div className="col-span-4 rounded-lg overflow-hidden">
                    {/* Aspect ratio for a fixed height */}
                    <img
                      alt="Guitar"
                      src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                      className="w-full h-96 object-cover"
                    />
                  </div>
          
                  {/* Column 2: Content */}
                  <div className="col-span-8 flex flex-col">
                    {/* Content Section */}

                    <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm">
                        <dl className="-my-3 divide-y divide-gray-100 text-sm">
                            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Title</dt>
                            <dd className="text-gray-700 sm:col-span-2">Mr</dd>
                            </div>

                            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Name</dt>
                            <dd className="text-gray-700 sm:col-span-2">John Frusciante</dd>
                            </div>

                            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Occupation</dt>
                            <dd className="text-gray-700 sm:col-span-2">Guitarist</dd>
                            </div>

                            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Salary</dt>
                            <dd className="text-gray-700 sm:col-span-2">$1,000,000+</dd>
                            </div>

                            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Bio</dt>
                            <dd className="text-gray-700 sm:col-span-2">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis debitis explicabo
                                doloremque impedit nesciunt dolorem facere, dolor quasi veritatis quia fugit aperiam
                                aspernatur neque molestiae labore aliquam soluta architecto?
                            </dd>
                            </div>
                        </dl>
                        </div>

                    {/* <div className="border border-gray-900/10 p-4 sm:p-6 flex-1">
                      <a href="#">
                        <h3 className="font-bold uppercase text-gray-900">
                          TITLE: BOOK
                        </h3>
                      </a>
          
                      <p className="mt-2 line-clamp-3 text-sm text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores,
                        possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum
                        eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo
                        tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?
                      </p>
                    </div> */}
          
                    {/* CTA Section */}
                    <div className="flex items-end justify-end p-4">
                      <a
                        href="#"
                        className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                      >
                        Read Blog
                      </a>
                    </div>
                  </div>
                </div>
              </div>
          
          
    )


//     return (
//         <div className="container h-screen py-10 px-20">
//             <div className=" bg-white transition shadow-xl grid grid-cols-12 rounded-lg">
  

//   <div className=" col-span-4 rounded-lg">
//     <img
//       alt="Guitar"
//       src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
//       className="aspect-square h-full w-full object-cover"
//     />
//   </div>

//   <div className="col-span-6 justify-between">
//     <div className="border-s border-gray-900/10 p-4 sm:p-6">
//       <a href="#">
//         <h3 className="font-bold uppercase text-gray-900">
//           Finding the right guitar for your style - 5 tips
//         </h3>
//       </a>

//       <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
//         pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
//         quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
//         atque dignissimos. Molestias explicabo corporis voluptatem?
//       </p>
//     </div>

//     <div className="sm:flex sm:items-end sm:justify-end">
//       <a
//         href="#"
//         className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
//       >
//         Read Blog
//       </a>
//     </div>
//   </div>
// </div>
//         </div>
//     )
}