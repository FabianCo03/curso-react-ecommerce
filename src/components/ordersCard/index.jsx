import { ChevronRightIcon } from '@heroicons/react/24/solid'

const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props
  let message = ''
  if (totalProducts === 1) {
    message = 'Producto'
  } else {
    message = 'Productos'
  }
  return (
    <div className="flex justify-between items-center border border-gray-900 w-80 p-4 rounded-lg mb-4">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span className="font-light">01/02/2023</span>
          <span className="font-light">{totalProducts + ' ' + message}</span>
        </p>
        <p className="flex items-center gap-3">
          <span className="font-medium text-2xl">${totalPrice}</span>
          <ChevronRightIcon className="h-6 w-6 text-gray-400 hover:text-gray-500 cursor-pointer" />
        </p>
      </div>
    </div>
  )
}

export default OrdersCard
