import { useState, useEffect, useContext } from "react";
import BinIcon from "./icons/bin";
import { CartContext } from "./products/cart-context";

export default function ShoppingCartSidebar({
  isCartOpen,
  toggleShoppingCart,
}) {
  const { removeFromCart, cartFromContext } = useContext(CartContext);
  const [cart, setCart] = useState(cartFromContext);

  useEffect(() => {
    const cartLocalStorageString = localStorage.getItem("cart");
    const cart = cartLocalStorageString
      ? JSON.parse(cartLocalStorageString)
      : [];

    setCart(cart);
  }, [cartFromContext]);

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
    const cartLocalStorage = JSON.parse(localStorage.getItem("cart"));
    setCart(cartLocalStorage);
  };

  return (
    <div
      className="relative"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`fixed bg-gray-500 bg-opacity-75 transition-opacity ${
          isCartOpen ? "visible" : "hidden"
        }`}
      ></div>

      <div className="fixed z-40 overflow-hidden">
        <div
          className={`pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 ${
            isCartOpen ? "visible" : "hidden"
          }`}
        >
          <div className="pointer-events-auto relative w-screen max-w-md overflow-y-scroll">
            {/* Close button */}
            <div className="absolute left-0 top-0 flex">
              <button
                onClick={toggleShoppingCart}
                type="button"
                className="absolute rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
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

            <div className="flex h-full flex-col bg-white py-6">
              <div className="relative mt-6 flex-1 px-4 sm:px-6 border-gray-200">
                {/* Products cotainer */}
                <div className="flex flex-col gap-32 text-xl mt-10 pb-20 h-full border-gray-200">
                  {cart.map((product) => {
                    const urlImage = product.images[0];

                    return (
                      <div
                        className="h-[60px] flex items-center justify-center"
                        key={product.id}
                      >
                        <div
                          className="w-full h-full text-sm bg-contain bg-no-repeat"
                          style={{ backgroundImage: `url(${urlImage})` }}
                        ></div>

                        <div className="flex flex-col w-full text-sm p-1 gap-3">
                          <div className="">{product.title}</div>
                          <div className="">{product.brand}</div>
                          <div className="">${product.price}</div>
                          <div className="flex items-center gap-4">
                            <button className="rounded text-gray-500 text-lg">
                              -
                            </button>
                            <span className="text-sm">2</span>
                            <button className="rounded text-gray-500 text-lg">
                              +
                            </button>
                            <button
                              className="rounded-full bg-gray-200 p-1"
                              onClick={() => handleRemoveFromCart(product.id)}
                            >
                              <BinIcon />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* Total */}
              <div className="flex items-center justify-between text-base font-extrabold border-b border-gray-200 p-4">
                <p className="font-bold">Total</p>$
                {cart.reduce((acc, product) => acc + product.price, 0)}
              </div>

              <div className="text-gray-600 mt-6 flex flex-col gap-4 p-4">
                <button className="rounded-full shadow-sm p-2 text-black font-medium border">
                  View cart
                </button>
                <button className="rounded-full shadow-sm bg-black font-medium text-white p-2">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
