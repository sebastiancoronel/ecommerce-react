import { useContext, useState } from "react";
import Header from "../landing/header";
import Products from "../../mocks/products.json";
import HeartIcon from "../icons/heart";
import CartIcon from "../icons/cart";
import { CartContext } from "./cart-context";
import { useParams } from "react-router-dom";

export default function ProductsPage() {
  const { addToCart, cartFromContext } = useContext(CartContext);
  const { categoryName } = useParams();
  const [cart,setCart] = useState(cartFromContext)
  const filteredProducts =
    categoryName === "all"
      ? Products.products
      : Products.products.filter(
          (product) => product.category === categoryName
        );

  const handleAddToCart = (product) => {
    addToCart(product);
    // Quizas cambiar el cart context aqui para que se refleje luego en shopping cart sidebar???
  };

  return (
    <>
      <Header />
      <section className="bg-slate-100 h-[375px]">
        <div className="flex flex-col h-full justify-center items-center gap-4">
          <h1 className="text-3xl font-extrabold">
            {categoryName.toUpperCase()}
          </h1>
          <small>
            Home /
            {categoryName == "all"
              ? categoryName + " " + "products"
              : categoryName}
          </small>
        </div>
      </section>

      <section className="bg-white h-96 flex flex-col p-10">
        <div className="h-[100px] container mx-auto">* Sort options *</div>

        {/* Product card */}

        {filteredProducts.map((product) => {
          const imageUrl = product.images[0];

          return (
            <div
              className="h-96 container mx-auto flex flex-col gap-4"
              key={product.id}
            >
              <div className="border-gray-500 h-[312px] border-solid flex items-center">
                <aside
                  className={`h-full w-96 bg-no-repeat bg-center bg-contain`}
                  style={{ backgroundImage: `url(${imageUrl})` }}
                ></aside>

                <aside className="h-full w-screen flex flex-col gap-4 ml-10">
                  <div>
                    <small className="text-gray-400 font-medium">
                      {product.category}
                    </small>
                  </div>
                  <div> * * * * * </div>
                  <span className="text-lg font-semibold">{product.title}</span>
                  <div className="font-bold text-blue-400">
                    ${product.price}
                  </div>
                  <div>
                    <small className="text-green-400"> In stock </small>
                  </div>
                  <div>
                    <small className="text-gray-900">
                      {product.description}
                    </small>
                  </div>
                  <div className="flex items-center gap-4 ">
                    <HeartIcon />
                    <button onClick={() => handleAddToCart(product)}>
                      <CartIcon show={false} />
                    </button>
                    <HeartIcon />
                  </div>
                </aside>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
``;
