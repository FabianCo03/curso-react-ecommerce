import { useContext } from 'react'
import { Link } from 'react-router-dom'

import Layout from '../../components/layout'
import OrdersCard from '../../components/ordersCard'

import { ShoppingCartContext } from '../../context'
const MyOrders = () => {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className="flex justify-center items-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">MyOrders</h1>
      </div>
      {context.order.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            totalProducts={order.totalProducts}
            totalPrice={order.totalPrice}
          />
        </Link>
      ))}
    </Layout>
  )
}

export default MyOrders
