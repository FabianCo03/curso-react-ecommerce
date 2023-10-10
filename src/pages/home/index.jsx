import { useContext } from "react";

import Card from "../../components/card";
import Layout from "../../components/layout";
import ProductDetail from "../../components/productDetail";
import { ShoppingCartContext } from "../../context";

const Home = () => {
  const context = useContext(ShoppingCartContext);

  const renderView = () => {
    if (context.searchByTitle?.length > 0) {
      if (context.filteredItems?.length > 0) {
        return context.filteredItems?.map((item) => (
          <Card key={item.id} data={item} />
        ));
      } else {
        return <div>No hay coincidencias</div>;
      }
    } else {
      return context.items?.map((item) => <Card key={item.id} data={item} />);
    }
  };

  return (
    <>
      <Layout>
        <div className="flex items-center justify-center relative w-80 mb-4">
          <h1 className="font-medium text-xl">Mi Tienda</h1>
        </div>
        <input
          type="text"
          placeholder="Buscar"
          className="rounded-lg w-80 p-4 border boder-gray-200 focus:outline-none focus:border-gray-400"
          onChange={(event) => {
            context.setSearchByTitle(event.target.value);
          }}
        />
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg mt-10">
          {renderView()}
        </div>
        <ProductDetail />
      </Layout>
    </>
  );
};

export default Home;
