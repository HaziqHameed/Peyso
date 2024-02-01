import { Fragment, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../resources/assets/logo.png";
import "../header/header.css";
import HomeDropdown from "./dropdowns/home_dropdown/HomeDropdown";
import ShopDropdown from "./dropdowns/shop_dropdown/ShopDropdown";
const navigation = [
  { name: "home", href: "#", current: false },
  { name: "shop", href: "#", current: false },
  { name: "blog", href: "#", current: false },
  { name: "pages", href: "#", current: false },
  { name: "about", href: "#", current: false },
  { name: "contact", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [showHomeDropDown, setShowHomeDropDown] = useState(false);
  const [showShopDropDown, setShowShopDropDown] = useState(false);

  const navDropdowns = (heading) => {
    if (heading === "home") {
      setShowHomeDropDown(true);
    } else {
      setShowHomeDropDown(false);
    }
    if (heading === "shop") {
      setShowShopDropDown(true);
    } else {
      setShowShopDropDown(false);
    }
  };

  const dropdownBridge = () => {
    if (showHomeDropDown === true) {
      setShowHomeDropDown(true);
    } else {
      setShowHomeDropDown(false);
    }
    if (showShopDropDown === true) {
      setShowShopDropDown(true);
    } else {
      setShowShopDropDown(false);
    }
  };

  const leaveDropdowns = () => {
    setShowHomeDropDown(false);
    setShowShopDropDown(false);
  };

  return (
    <Disclosure
      as="nav"
      className="--tw-bg-opacity: 1;
    background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
    px-10 py-3.5 border-2"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center mr-5">
                  <img className="h-7 w-auto" src={logo} alt="Your Company" />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-6">
                    {navigation.map((item) => (
                      <div
                        key={item.name}
                        className="navigation_link"
                        onMouseEnter={() => dropdownBridge(item.name)}
                        onMouseLeave={() => leaveDropdowns()}
                      >
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-black relative pages text-transform: uppercase",
                            "rounded-md px-2.5 py-1 text-sm font-medium no-underline cursor-pointer peer"
                          )}
                          aria-current={item.current ? "page" : undefined}
                          onMouseEnter={() => navDropdowns(item.name)}
                        >
                          {item.name}
                        </a>
                      </div>
                    ))}

                    {showHomeDropDown && (
                      <HomeDropdown
                        enterHome={() => navDropdowns("home")}
                        leaveHome={() => leaveDropdowns()}
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-9">
                <button>
                  <svg
                    className="w-7 h-7 mt-2 cursor-pointer"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      d="M14.5 14.5l-4-4m-4 2a6 6 0 110-12 6 6 0 010 12z"
                    />
                  </svg>
                </button>

                <svg
                  className="w-5 h-5 cursor-pointer"
                  fill="none"
                  viewBox="0 0 15 15"
                  height="1em"
                  width="1em"
                >
                  <path
                    fillRule="evenodd"
                    stroke="currentColor"
                    strokeLinecap="square"
                    d="M10.5 3.498a2.999 2.999 0 01-3 2.998 2.999 2.999 0 113-2.998zM12.5 14.49h-10v-1.996a3 3 0 013-3h4a3 3 0 013 3v1.997z"
                    clipRule="evenodd"
                  />
                </svg>

                <svg
                  className="w-5 h-5 cursor-pointer"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                >
                  <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>

                <span className="relative inline-block">
                  <svg
                    className="h-7 w-7 mt-1 cursor-pointer"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                  >
                    <path d="M8 1a2.5 2.5 0 012.5 2.5V4h-5v-.5A2.5 2.5 0 018 1zm3.5 3v-.5a3.5 3.5 0 10-7 0V4H1v10a2 2 0 002 2h10a2 2 0 002-2V4h-3.5zM2 5h12v9a1 1 0 01-1 1H3a1 1 0 01-1-1V5z" />
                  </svg>
                  <span className="absolute top-3 right-0 text-size bg-red-500 rounded-full">
                    3
                  </span>
                </span>
                <button>
                  <svg
                    className="h-7 w-7 cursor-pointer"
                    viewBox="0 0 24 24"
                    fill="stroke-0"
                    height="1em"
                    width="1em"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 3v2H3V3h9zm4 16v2H3v-2h13zm6-8v2H3v-2h19z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {showShopDropDown && (
            <ShopDropdown
              enterHome={() => navDropdowns("shop")}
              leaveHome={() => leaveDropdowns()}
            />
          )}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
