import { XMarkIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'

import { ShoppingCartContext } from '../../context'
import './styles.css'

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)

  // en caso de que context.productToShow sea falsy, no manda errores sino un objeto vacío
  const { title, price, description, images } = context.productToShow || {}
  const firstImage = images ? images[0] : null

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? 'flex' : 'hidden'
      } product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div>
          <XMarkIcon
            onClick={() => context.closeProductDetail()}
            className={`${
              context.isProductDetailOpen ? 'flex' : 'hidden'
            } h-6 w-6 text-red-700 cursor-pointer`}
          />
        </div>
      </div>
      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg"
          src={firstImage}
          alt={title}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">${price}</span>
        <span className="font-medium text-md">{title}</span>
        <span className="font-light text-sm">{description}</span>
      </p>
    </aside>
  )
}

export default ProductDetail
