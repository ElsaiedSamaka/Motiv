import useTranslation from "core/hooks/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import LanguageSwitcher from "shared/Common/LanguageSwitcher/LanguageSwitcher";

const Navbar = () => {
  const { locale } = useRouter();
  const { t } = useTranslation(locale);

  return (
    <nav className="nav-bar border-b border-gray-200 px-4 py-2 fixed left-0 right-0 top-0 z-50 bg-white ltr:md:ml-56 ltr:lg:ml-64 rtl:md:mr-56 rtl:lg:mr-64">
      <div className="flex flex-wrap justify-between items-center ">
        {/* left content */}
        <div className="search-control flex justify-start items-center">
          <button
            data-drawer-target="drawer-navigation"
            data-drawer-toggle="drawer-navigation"
            aria-controls="drawer-navigation"
            className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 :focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 :focus:ring-gray-700 :text-gray-400 :hover:bg-gray-700 :hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              aria-hidden="true"
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Toggle sidebar</span>
          </button>
          {/* search-control */}
          <form className="hidden md:block md:pl-2">
            <label htmlFor="topbar-search" className="sr-only">
              Search
            </label>
            <div className="relative md:w-96">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.1191 18.3129L16.4113 14.6329C17.8505 12.8373 18.5475 10.5582 18.3589 8.26415C18.1704 5.97016 17.1105 3.83564 15.3974 2.2995C13.6843 0.76336 11.448 -0.0576363 9.14852 0.00532409C6.84901 0.0682845 4.66099 1.01042 3.03438 2.638C1.40777 4.26558 0.466194 6.45489 0.403271 8.75578C0.340348 11.0567 1.16086 13.2942 2.69608 15.0084C4.23131 16.7225 6.36456 17.783 8.65719 17.9717C10.9498 18.1604 13.2276 17.463 15.0221 16.0229L18.6999 19.7029C18.7928 19.7966 18.9034 19.871 19.0252 19.9217C19.1469 19.9725 19.2776 19.9987 19.4095 19.9987C19.5414 19.9987 19.6721 19.9725 19.7938 19.9217C19.9156 19.871 20.0262 19.7966 20.1191 19.7029C20.2992 19.5164 20.3999 19.2672 20.3999 19.0079C20.3999 18.7485 20.2992 18.4993 20.1191 18.3129ZM9.41544 16.0229C8.0318 16.0229 6.67922 15.6123 5.52876 14.8431C4.3783 14.074 3.48163 12.9807 2.95213 11.7016C2.42263 10.4226 2.28409 9.01509 2.55403 7.65722C2.82396 6.29935 3.49025 5.05207 4.46864 4.07311C5.44702 3.09414 6.69356 2.42745 8.05062 2.15736C9.40768 1.88726 10.8143 2.02588 12.0926 2.5557C13.371 3.08551 14.4636 3.98272 15.2323 5.13386C16.001 6.28501 16.4113 7.63838 16.4113 9.02285C16.4113 10.8794 15.6742 12.6598 14.3622 13.9726C13.0503 15.2854 11.2709 16.0229 9.41544 16.0229Z"
                    fill="#7C7C8D"
                  />
                </svg>
              </div>
              <input
                type="text"
                name="email"
                id="topbar-search"
                className="bg-[#F5F4F6] text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 placeholder:font-semibold placeholder:text-[#7C7C8D]"
                placeholder={t("navbar.search")}
              />
            </div>
          </form>
          {/* search-control */}
        </div>
        {/* left content */}
        {/* right content */}
        <div className="flex items-center justify-end lg:order-2">
          {/* lang selector */}
          <LanguageSwitcher />
          {/* lang selector */}
          {/* Notifications */}
          <div className="notifications">
            {/* notification icon */}
            <button
              type="button"
              data-dropdown-toggle="notification-dropdown"
              className="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300"
            >
              <span className="sr-only">View notifications</span>
              {/* Bell icon */}
              {/* className="w-6 h-6" */}
              <div className="bell-icon relative">
                <svg
                  className="bell-icon"
                  width="20"
                  height="24"
                  viewBox="0 0 20 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.1999 13.449V9.62358C17.1982 7.91915 16.5948 6.27033 15.4966 4.9691C14.3985 3.66788 12.8764 2.79823 11.1999 2.51416V1.20295C11.1999 0.883906 11.0735 0.577931 10.8484 0.352335C10.6234 0.126739 10.3182 0 9.9999 0C9.68164 0 9.37642 0.126739 9.15137 0.352335C8.92633 0.577931 8.7999 0.883906 8.7999 1.20295V2.51416C7.12343 2.79823 5.60133 3.66788 4.50316 4.9691C3.405 6.27033 2.80163 7.91915 2.7999 9.62358V13.449C2.09964 13.6971 1.4931 14.1564 1.06343 14.7637C0.633757 15.371 0.40199 16.0967 0.399902 16.8413V19.2472C0.399902 19.5662 0.526331 19.8722 0.751374 20.0978C0.976418 20.3234 1.28164 20.4501 1.5999 20.4501H5.3679C5.64424 21.4694 6.2475 22.3693 7.08462 23.0109C7.92173 23.6524 8.94618 24 9.9999 24C11.0536 24 12.0781 23.6524 12.9152 23.0109C13.7523 22.3693 14.3556 21.4694 14.6319 20.4501H18.3999C18.7182 20.4501 19.0234 20.3234 19.2484 20.0978C19.4735 19.8722 19.5999 19.5662 19.5999 19.2472V16.8413C19.5978 16.0967 19.366 15.371 18.9364 14.7637C18.5067 14.1564 17.9002 13.6971 17.1999 13.449ZM5.1999 9.62358C5.1999 8.34741 5.70561 7.12351 6.60579 6.22113C7.50596 5.31874 8.72686 4.81179 9.9999 4.81179C11.2729 4.81179 12.4938 5.31874 13.394 6.22113C14.2942 7.12351 14.7999 8.34741 14.7999 9.62358V13.2324H5.1999V9.62358ZM9.9999 21.6531C9.58107 21.6505 9.17019 21.5381 8.8081 21.3271C8.44601 21.1161 8.14531 20.8137 7.9359 20.4501H12.0639C11.8545 20.8137 11.5538 21.1161 11.1917 21.3271C10.8296 21.5381 10.4187 21.6505 9.9999 21.6531ZM17.1999 18.0442H2.7999V16.8413C2.7999 16.5222 2.92633 16.2162 3.15137 15.9906C3.37642 15.7651 3.68164 15.6383 3.9999 15.6383H15.9999C16.3182 15.6383 16.6234 15.7651 16.8484 15.9906C17.0735 16.2162 17.1999 16.5222 17.1999 16.8413V18.0442Z"
                    fill="#7C7C8D"
                  />
                </svg>
                <svg
                  className="red-indicator absolute top-0 right-0"
                  width="10"
                  height="9"
                  viewBox="0 0 10 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="4.8999"
                    cy="4.5"
                    r="3.75"
                    fill="#FF5E6F"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              {/* Notifications */}
            </button>
            {/* notification icon */}
            {/* Notifications Dropdown menu */}
            <div
              className="hidden absolute right-10 overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white divide-y divide-gray-100 shadow-lg :divide-gray-600 :bg-gray-700 rounded-xl"
              id="notification-dropdown"
            >
              <div className="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 :bg-gray-600 :text-gray-300">
                Notifications
              </div>
              <div className="h-32 overflow-y-scroll">
                <a className="flex py-3 px-4 border-b hover:bg-gray-100 hover:cursor-pointer">
                  <div className="flex-shrink-0 relative">
                    <img
                      className="w-11 h-11 rounded-full"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                      alt="Bonnie Green avatar"
                    />
                    <div className="flex absolute bottom-0 justify-center items-center ml-6 -mt-5 w-5 h-5 rounded-full border border-white bg-primary-700">
                      <svg
                        aria-hidden="true"
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
                        <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                      </svg>
                    </div>
                  </div>
                  <div className="pl-3 w-full">
                    <div className="text-gray-500 font-normal text-sm mb-1.5 :text-gray-400">
                      New message from
                      <span className="font-semibold text-gray-900 :text-white">
                        Bonnie Green
                      </span>
                    </div>
                    <div className="text-xs font-medium text-primary-600 :text-primary-500">
                      a few moments ago
                    </div>
                  </div>
                </a>
                <a className="flex py-3 px-4 border-b hover:bg-gray-100 hover:cursor-pointer">
                  <div className="flex-shrink-0 relative">
                    <img
                      className="w-11 h-11 rounded-full"
                      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                      alt="Bonnie Green avatar"
                    />
                    <div className="flex absolute bottom-0 justify-center items-center ml-6 -mt-5 w-5 h-5 rounded-full border border-white bg-primary-700">
                      <svg
                        aria-hidden="true"
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
                        <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                      </svg>
                    </div>
                  </div>
                  <div className="pl-3 w-full">
                    <div className="text-gray-500 font-normal text-sm mb-1.5 :text-gray-400">
                      New message from
                      <span className="font-semibold text-gray-900 :text-white">
                        Bonnie Green
                      </span>
                    </div>
                    <div className="text-xs font-medium text-primary-600 :text-primary-500">
                      a few moments ago
                    </div>
                  </div>
                </a>
              </div>
              <a className="block py-2 text-md font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 :bg-gray-600 :text-white :hover:underline">
                <div className="inline-flex items-center">
                  <svg
                    aria-hidden="true"
                    className="mr-2 w-4 h-4 text-gray-500 :text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  View all
                </div>
              </a>
            </div>
          </div>
          {/* Notifications */}
          {/* User avatar */}
          <div className="user-avatar relative">
            <button
              type="button"
              className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 "
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="dropdown"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                alt="user photo"
              />
            </button>
            {/* User avatar */}
            {/* Dropdown menu */}
            <div
              className="hidden absolute right-2 z-50 my-4 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow"
              id="dropdown"
            >
              <div className="py-3 px-4">
                <span className="block text-sm font-semibold text-gray-900 :text-white">
                  Lorem ipsum
                </span>
                <span className="block text-sm text-gray-900 truncate :text-white">
                  l.com
                </span>
              </div>
              <ul
                className="py-1 text-gray-700 :text-gray-300"
                aria-labelledby="dropdown"
              >
                <li>
                  <a className="block py-2 px-4 text-sm hover:bg-gray-100 hover:cursor-pointer">
                    My profile
                  </a>
                </li>
                <li>
                  <a className="block py-2 px-4 text-sm hover:bg-gray-100 hover:cursor-pointer">
                    Account settings
                  </a>
                </li>
              </ul>
              <ul
                className="py-1 text-gray-700 :text-gray-300"
                aria-labelledby="dropdown"
              >
                <li>
                  <a className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 :hover:bg-gray-600 :hover:text-white">
                    <svg
                      className="mr-2 w-5 h-5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                    My likes
                  </a>
                </li>
              </ul>
              <ul
                className="py-1 text-gray-700 :text-gray-300"
                aria-labelledby="dropdown"
              >
                <li>
                  <a className="block py-2 px-4 text-sm hover:bg-gray-100 hover:cursor-pointer">
                    Log out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
