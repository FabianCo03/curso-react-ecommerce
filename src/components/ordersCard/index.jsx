import { useContext } from "react";
// import { XMarkIcon } from "@heroicons/react/24/solid";

import { ShoppingCartContext } from "../../context";

const OrdersCard = (props) => {
  //   const context = useContext(ShoppingCartContext);
  const { totalPrice, totalProducts } = props;

  return (
    <div className="flex justify-between items-center mb-3 border border-gray-900">
      <p>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
        <span>01/02/2023</span>
      </p>
    </div>
  );
};

export default OrdersCard;
