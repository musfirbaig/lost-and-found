import Link from "next/link";
import { UserProvider } from "../UserContext";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

  
  return (
    <div>
      {/* HEADER */}
      <header className="bg-gray-50 w-full">
        <div className="mx-auto max-w-screen-xl px-4 py-1 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo in Header */}
          <div className="flex-shrink-0">
            {/* <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
              Logo
            </span> */}
          </div>



          {/* Search and Notification Icons */}
          <div className="flex items-center gap-4">
            {/* <h2>We Find</h2> */}
            {/* ... Search Input and Button ... */}
            {/* ... Notification Button ... */}
          </div>

          {/* User Profile */}
          <a href="#" className="block shrink-0">
            <span className="sr-only">Profile</span>
            <img
              alt="Man"
              src="https://cdn3.iconfinder.com/data/icons/essential-rounded/64/Rounded-31-512.png"
              className="h-10 w-10 rounded-full object-cover"
            />
          </a>
        </div>
      </header>

      {/* SIDEBAR */}

      {/* <div className="flex h-screen flex-col justify-between border-e bg-white">
        <div className="px-4 py-6"> */}


          {/* Logo Removed from Sidebar */}

          {/* ... Sidebar Navigation ... */}

          <div className="grid grid-cols-12">
              {/* SIDEBAR */}
              <div className="col-span-2 flex h-screen flex-col justify-between border-e bg-white">
                {/* Sidebar Content */}
                {/* ... (Your Sidebar Code) ... */}
                <div className="flex h-screen flex-col justify-between border-e bg-white">
  <div className="px-4">


    <ul className="mt-6 space-y-1">
      <li>
        <Link href="/admin/dashboard">
        <span className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
          All Items
        </span>
        </Link>

      </li>

      <li>
        <Link href="/user/dashboard/search">
        <span
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Claim Requests
        </span>
        </Link>
      </li>

      {/* <li>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary
            className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <span className="text-sm font-medium"> My Reported Items </span>

            <span className="shrink-0 transition duration-300 group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <ul className="mt-2 space-y-1 px-4">
            <li>
            <Link href="/user/dashboard/reported-items/lost">
              <span
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Reported Lost Items
              </span>
            </Link>
              
            </li>

            <li>
              <Link href="/user/dashboard/reported-items/found">
              <span
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Reported Found Items
              </span>
              </Link>
              
            </li>
          </ul>
        </details>
      </li>

      <li>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary
            className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <span className="text-sm font-medium"> Report An Item </span>

            <span className="shrink-0 transition duration-300 group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <ul className="mt-2 space-y-1 px-4">
            <li>
            <Link href="/user/dashboard/report-items/lost">
              <span
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Report Lost Item
              </span>
              </Link>
            </li>

            <li>
              <Link href="/user/dashboard/report-items/found">
              <span
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Report Found Item
              </span>
              </Link>
              
            </li>

            {/* <li>
              <form action="/logout">
                <button
                  type="submit"
                  className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                >
                  Logout
                </button>
              </form>
            </li> */}
          {/* </ul>
        </details>
      </li> */}

      <li>
      <Link href="/login">
        <span
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Approved Requests
        </span>
      </Link>
      </li>

      <li>
      <Link href="/admin/dashboard/users">
        <span
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Delete Users
        </span>
      </Link>
      </li>
    </ul>
  </div>

  {/* <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
    <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
      <img
        alt="Man"
        src="https://cdn3.iconfinder.com/data/icons/essential-rounded/64/Rounded-31-512.png"
        className="h-10 w-10 rounded-full object-cover"
      />

      <div>
        <p className="text-xs">
          <strong className="block font-medium">Eric Frusciante</strong>

          <span> eric@frusciante.com </span>
        </p>
      </div>
    </a>
  </div> */}
</div>

              </div>

              {/* DYNAMIC SECTION */}
              <section className="col-span-10 p-8">
                {/* <h1>Dashboard Layout</h1> */}
                <UserProvider>
                    {children}
                </UserProvider>
              </section>
            </div>

    </div>
  );
}
