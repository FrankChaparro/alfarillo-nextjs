import Image from "next/image";
import Icon from "@mdi/react";

import { mdiFacebook, mdiInstagram, mdiLinkedin, mdiYoutube ,mdiWhatsapp} from "@mdi/js";

function Navbar() {
  return (
    <div className="bg-red-400 ">
      <nav className=" fixed bg-black/80 w-full z-20 top-0 start-0 ">
        <div className="px-8 flex flex-wrap items-center justify-between mx-auto p-4 ">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image
              src="/assets/logo.png"
              width={50}
              height={50}
              alt="Picture of the author"
              className=""
            />
            <span className="roboto-condensed text-2xl font-bold whitespace-nowrap dark:text-white">
              Alfarillo Group
            </span>
          </div>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="space-x-3 flex ">

            <a
                href="https://chat.whatsapp.com/FPSGh5fPjuwANiS1cgHRKG"
                type="button"
                className="text-white bg-green-700 hover:bg-green-500 opacity-85
                 font-medium rounded-lg text-sm p-2 
                  flex items-center"
              >
                <Icon path={mdiWhatsapp} size={0.9} />
              </a>

              <a
                href="https://www.instagram.com/alfarillo_group/"
                type="button"
                className="text-white bg-orange-700 hover:bg-orange-500 opacity-85
                 font-medium rounded-lg text-sm p-2 
                  flex items-center"
              >
                <Icon path={mdiInstagram} size={0.9} />
              </a>

              <a
                href="https://www.youtube.com/@ProyectosAlfarillo"
                type="button"
                className="text-white bg-red-700 hover:bg-red-500 opacity-85
                 font-medium rounded-lg text-sm p-2 
                  flex items-center"
              >
                <Icon path={mdiYoutube} size={0.9} />
              </a>

              <a
                href="https://www.facebook.com/alfarilloproject?locale=es_LA"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-500 opacity-85
                 font-medium rounded-lg text-sm p-2 
                  flex items-center"
              >
                <Icon path={mdiFacebook} size={0.9} />
              </a>

              <a
                href="https://www.linkedin.com/company/alfarillo-project"
                type="button"
                className="text-white bg-sky-700 hover:bg-sky-500 opacity-85 
                 font-medium rounded-lg text-sm p-2 
                  flex items-center"
              >
                <Icon path={mdiLinkedin} size={0.9} />
              </a>
            </div>

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
          
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
