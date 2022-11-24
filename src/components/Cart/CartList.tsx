import { FC } from "react";
import Cart from "./Cart";
import { CartItemType } from "../../interface";

interface Data {
  data: CartItemType[] | undefined;
  handleAddToCart: (item: CartItemType) => void;
}

const CartList: FC<Data> = ({ data, handleAddToCart }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-x-6 gap-y-6 p-2">
      {data?.[0] &&
        data.map((item) => (
          <Cart key={item.id} item={item} handleAddToCart={handleAddToCart} />
        ))}
    </div>
  );
};

export default CartList;
