import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="h-10 mr-3" alt="New Beginning Logo" />
          </Link>
          <div className="flex items-center md:order-2">
            <a
              href="#"
              className="text-sm font-semibold leading-6 px-6 py-2 text-white bg-[#426853] rounded-md"
            >
              Get Consulting <span aria-hidden="true">&rarr;</span>
            </a>
            <button
              data-collapse-toggle="mega-menu"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mega-menu"
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            id="mega-menu"
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          >
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
              <li>
                <Link
                  to="/"
                  className="text-sm font-inter font-semibold leading-6 text-[#4b5d80]"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>

              <li>
                <button
                  id="mega-menu-dropdown-button"
                  data-dropdown-toggle="mega-menu-dropdown"
                  className="flex text-sm font-inter font-semibold leading-6 text-[#4b5d80]"
                >
                  Services
                  <svg
                    className="w-2.5 h-2.5 mt-2 ml-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="mega-menu-dropdown"
                  className={`absolute z-10 grid grid-cols-3 auto-rows-fr text-sm bg-white border border-gray-100 rounded-lg shadow-md`}
                  style={{
                    padding: "30px",
                  }}
                >
                  <div className="p-4 pb-0 text-[#4b5d80] ">
                    <ul className="space-y-4">
                      <li>
                        <Link to="/services" className="text-[#4b5d80]">
                          Individual Counseling
                        </Link>
                      </li>
                      <li>
                        <Link to="/service-1" className="text-[#4b5d80]">
                          Group Therapy
                        </Link>
                      </li>
                      <li>
                        <Link to="/service-2" className="text-[#4b5d80]">
                          Psychiatric Evaluations
                        </Link>
                      </li>
                      <li>
                        <Link to="/service-3" className="text-[#4b5d80]">
                          Medication management
                        </Link>
                      </li>
                      <li>
                        <Link to="/service-4" className="text-[#4b5d80]">
                          Pediatric Treatment
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 pb-0 text-[#4b5d80] ">
                    <ul className="space-y-4">
                      <li>
                        <Link to="/service-5" className="text-[#4b5d80]">
                          Telepsychiatry
                        </Link>
                      </li>
                      <li>
                        <Link to="/service-6" className="text-[#4b5d80]">
                          Pharmacogenomics
                        </Link>
                      </li>
                      <li>
                        <Link to="/service-7" className="text-[#4b5d80]">
                          Addiction treatment
                        </Link>
                      </li>
                      <li>
                        <Link to="/service-8" className="text-[#4b5d80]">
                          Couple and Family Counseling
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="p-4 pb-0 text-[#4b5d80] ">
                    <ul className="space-y-4">
                      <li>
                        <a href="#" className="text-[#4b5d80]">
                          Terms
                        </a>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </li>

              <li>
                <Link
                  to="/news"
                  className="text-sm font-inter font-semibold leading-6 text-[#4b5d80]"
                >
                  News
                </Link>
              </li>

              <li>
                <Link
                  to="/articles"
                  className="text-sm font-inter font-semibold leading-6 text-[#4b5d80]"
                >
                  Articles
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-sm font-inter font-semibold leading-6 text-[#4b5d80]"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-sm font-inter font-semibold leading-6 text-[#4b5d80]"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
