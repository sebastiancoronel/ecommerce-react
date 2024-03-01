import { useState } from "react";
import Logo from "../logo";
import SearchIcon from "../icons/search";
import HeartIcon from "../icons/heart";
import CartIcon from "../icons/cart";
import { NavLink } from "react-router-dom";
import Products from "../../mocks/products.json";
import ShoppingCartSidebar from "../shopping-cart-sidebar";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setCartIsOpen] = useState(false);
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);

  // Extract categories from mock
  const products = Products.products.map((item) => {
    return item.category;
  });

  const [categories, setCategories] = useState([...new Set(products)]);

  // Sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleShoppingCart = () => {
    setCartIsOpen(!isCartOpen);
  };

  //Categories menu
  const toggleCategoryMenu = () => {
    setCategoryMenuOpen(!categoryMenuOpen);
  };

  return (
    <>
      <header className="flex fixed items-center top-0 w-full text-black font-medium bg-slate-50 h-[80px] border-b-2 border-gray-200 z-10">
        {/* Logo */}
        <div className="flex flex-grow basis-0 ml-[166px] w-[388px]">
          <Logo />
        </div>

        {/* Center menu */}
        <nav className="flex-grow w-[775px] h-[80px] justify-center">
          <ul className="flex text-[1.4rpx] gap-4 py-7 items-center justify-center">
            <li>Home</li>
            <li>
              <button onClick={toggleCategoryMenu}>Collection</button>
            </li>
            <li>
              <NavLink to={"/products/all"}>Products</NavLink>
            </li>
            <li>Other pages</li>
            <li>Blog</li>
          </ul>
        </nav>

        {/* Last part menu */}
        <nav className="flex w-[388px] h-[80px]">
          <ul className="flex text-sm gap-6 items-center justify-center">
            <button>
              <li>
                <SearchIcon />
              </li>
            </button>
            <li>
              <HeartIcon />
            </li>
            <li>
              <button type="button" onClick={toggleShoppingCart}>
                <CartIcon show={true} />
              </button>
            </li>
            <li>
              <button type="button" onClick={toggleSidebar}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" text-black icon icon-tabler icon-tabler-adjustments rotate-90"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                  <path d="M6 4v4" />
                  <path d="M6 12v8" />
                  <path d="M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                  <path d="M12 4v10" />
                  <path d="M12 18v2" />
                  <path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                  <path d="M18 4v1" />
                  <path d="M18 9v11" />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Category dropdown */}
      <div
        className={`bg-white w-full h-24 flex items-center justify-center gap-24 relative top-20 ${
          categoryMenuOpen ? "visible" : "hidden"
        } `}
      >
        {categories.map((category) => {
          return (
            <div className="w-auto text-black font-semibold" key={category}>
              <NavLink to={`/products/${category}`}>{category}</NavLink>
            </div>
          );
        })}
      </div>

      {/* Shopping cart sidebar */}
      <ShoppingCartSidebar
        isCartOpen={isCartOpen}
        toggleShoppingCart={toggleShoppingCart}
      />

      {/* Sidebar */}
      <div
        className="relative"
        aria-labelledby="slide-over-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          className={`fixed bg-gray-500 bg-opacity-75 transition-opacity ${
            isOpen ? "visible" : "hidden"
          }`}
        ></div>

        <div className="fixed z-40 overflow-hidden">
          <div
            className={`pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10  ${
              isOpen ? "visible" : "hidden"
            }`}
          >
            <div className="pointer-events-auto relative w-screen max-w-md">
              {/* <!--
            Close button
          --> */}
              <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                <button
                  onClick={toggleSidebar}
                  type="button"
                  className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <span className="absolute -inset-2.5"></span>
                  <span className="sr-only">Close panel</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                <div className="relative mt-6 flex-1 px-4 sm:px-6 border-b border-gray-200">
                  <ul className="flex flex-col gap-10 text-xl mt-10 h-96 border-b border-gray-200">
                    <li>Login</li>
                    <li>Register</li>
                    <li>Wishlist</li>
                    <li>Check out</li>
                  </ul>
                  <ul className="text-gray-600 mt-6 flex flex-col gap-4">
                    <li>CURRENCY</li>
                    <li>
                      <select className="bg-stone-100 w-full p-2" name="" id="">
                        <option value="" defaultValue={"USD"}>
                          USD
                        </option>
                      </select>
                    </li>
                    <li> LANGUAGE </li>
                    <li>
                      <select className="bg-stone-100 w-full p-2" name="" id="">
                        <option value="" defaultValue={"USD"}>
                          ENGlISH
                        </option>
                      </select>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
