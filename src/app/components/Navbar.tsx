
import Image from "next/image";
import Icon from '@mdi/react';

import {
  mdiFacebook,
}
  from '@mdi/js';


function Navbar() {
  return (
    <div className="bg-red-400 ">
       <nav className="absolute  bg-transparent w-full z-20 top-0 start-0 ">
          <div className="px-8 flex flex-wrap items-center justify-between mx-auto p-4 ">
            <div
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image
                src="/assets/logo.png"
                width={50}
                height={50}
                alt="Picture of the author"
                className=""
              />
              <span className="roboto-condensed text-2xl font-bold whitespace-nowrap dark:text-white">
                Alfarillo
              </span>
            </div>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <a
                href="https://www.facebook.com/alfarilloproject?locale=es_LA"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600
                  dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center"
                  
              >
                <Icon path={mdiFacebook} size={0.9} className="mr-2" />
                Facebook
              </a>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex text-black space-x-8">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
        </nav>
    </div>
  )
}

export default Navbar
