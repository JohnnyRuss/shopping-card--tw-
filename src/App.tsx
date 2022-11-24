import { FC, useState } from "react";
import { getProductsData } from "./lib/api";
import { useQuery } from "react-query";
import CartList from "./components/Cart/CartList";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import { CartItemType } from "./interface";

const App: FC = () => {
  const [cartOpen, setCartOpen] = useState();
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProductsData
  );

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((acc, item) => (acc += item.amount), 0);

  const getTotalPrice = (items: CartItemType[]) =>
    items.reduce((acc, item) => (acc += item.price * item.amount), 0);

  const handleAddToCart = (newItem: CartItemType) =>
    setCartItems((prev) => {
      const existsInCart = prev.find((item) => item.id === newItem.id);

      if (existsInCart)
        return prev.map((item) =>
          item.id === newItem.id ? { ...item, amount: item.amount + 1 } : item
        );
      else return [...prev, { ...newItem, amount: 1 }];
    });

  const handleRemoveFromCart = (id: number) =>
    setCartItems((prev) =>
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else return [...acc, item];
      }, [] as CartItemType[])
    );

  if (isLoading) return <p className="fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center text-white bg-[rgba(0,0,0,0.8)]">Loading...</p>;
  // else if (error) return <p>{error}</p>;

  return (
    <div className="p-3 md:p-10">
      <ShoppingCart
        data={cartItems}
        handleAddToCart={handleAddToCart}
        itemsTotalAmount={getTotalItems(cartItems)}
        handleRemoveFromCart={handleRemoveFromCart}
        totalPrice={getTotalPrice(cartItems)}
      />
      <CartList data={data} handleAddToCart={handleAddToCart} />
    </div>
  );
};

export default App;
