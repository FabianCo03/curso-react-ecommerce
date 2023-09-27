import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";

import OrderCard from "../orderCard";
import { ShoppingCartContext } from "../../context";
import { totalPrice } from "../../utils";
import "./styles.css";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id != id
    );
    context.setCartProducts(filteredProducts);
  };

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <XMarkIcon
            onClick={() => context.closeCheckoutSideMenu()}
            className={`${
              context.isCheckoutSideMenuOpen ? "flex" : "hidden"
            } h-6 w-6 text-red-700 cursor-pointer`}
          />
        </div>
      </div>
      <div className="px-6 overflow-y-scroll">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-6">
        <p className="flex justify-between items-center">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">
            ${totalPrice(context.cartProducts)}
          </span>
        </p>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
