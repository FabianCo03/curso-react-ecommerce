import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";

import { ShoppingCartContext } from "../../context";

const OrderCard = (props) => {
  const context = useContext(ShoppingCartContext);
  const { id, title, imageUrl, price, handleDelete } = props;
  let renderXMarkIcon;
  if (handleDelete) {
    renderXMarkIcon = (
      <XMarkIcon
        className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-700"
        onClick={() => handleDelete(id)}
      ></XMarkIcon>
    );
  }

  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={imageUrl[0]}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">${price}</p>
        {renderXMarkIcon}
      </div>
    </div>
  );
};

export default OrderCard;
