import { useContext } from "react";
import { Link } from "react-router-dom";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

import Layout from "../../components/layout";
import OrderCard from "../../components/orderCard";
import { ShoppingCartContext } from "../../context";

const MyOrder = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <Layout>
      <div className="flex justify-center items-center relative w-80 mb-6">
        <Link to={"/my-orders"} className="absolute left-0">
          <ArrowUturnLeftIcon
            className={`h-5 w-5 text-gray-400 cursor-pointer`}
          />
        </Link>
        <h1>MyOrder</h1>
      </div>
      <div className="flex flex-col w-80">
        {context.order?.slice(-1)[0].products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
          />
        ))}
      </div>
    </Layout>
  );
};

export default MyOrder;
