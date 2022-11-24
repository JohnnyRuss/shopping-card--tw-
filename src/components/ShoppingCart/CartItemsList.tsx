import { FC } from "react";

import { CartItemType } from "../../interface/index";

import CartItem from "./CartItem";

interface Props {
  data: CartItemType[] | undefined;
  handleAddToCart: (item: CartItemType) => void;
  handleRemoveFromCart: (id: number) => void;
}

const CartItemsList: FC<Props> = ({
  data,
  handleAddToCart,
  handleRemoveFromCart,
}) => {
  return (
    <>
      {data?.[0] &&
        data.map((item) => (
          <CartItem
            handleAddToCart={handleAddToCart}
            item={item}
            key={`shop-cart-${item.id}`}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        ))}
    </>
  );
};

export default CartItemsList;
