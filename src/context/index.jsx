import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Increment quantity
  const [count, setCount] = useState(0);

  // Open/Close ProductDetail
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Show product in ProductDetail
  const [productToShow, setProductToShow] = useState({});

  // Add products to shopping cart
  const [cartProducts, setCartProducts] = useState([]);

  // Checkout Side Menu · Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  // Order Card · Open/Close
  const [isOrderCardOpen, setIsOrderCardOpen] = useState(false);
  const openIsOrderCard = () => setIsOrderCardOpen(true);
  const closeIsOrderCard = () => setIsOrderCardOpen(false);

  // Shopping cart Order
  const [order, setOrder] = useState([]);

  // Get products
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);

  // Get products by title
  const [searchByTitle, setSearchByTitle] = useState(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  useEffect(() => {
    if (searchByTitle) {
      setFilteredItems(filteredItemsByTitle(items, searchByTitle));
    }
  }, [items, searchByTitle]);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        setIsProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        isOrderCardOpen,
        openIsOrderCard,
        closeIsOrderCard,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
