import { FC, useState } from "react";

import { CartItemType } from "../../interface/index";

import ShoppingCartBTN from "./ShoppingCartBTN";
import CartItemsList from "./CartItemsList";
import ShoppingCartWrapper from "./SpoppingCartWrapper";

interface Data {
  data: CartItemType[] | undefined;
  itemsTotalAmount: number;
  totalPrice: number;
  handleAddToCart: (item: CartItemType) => void;
  handleRemoveFromCart: (id: number) => void;
}

const ShoppingCart: FC<Data> = ({
  data,
  itemsTotalAmount,
  handleAddToCart,
  handleRemoveFromCart,
  totalPrice,
}) => {
  const [activeShop, setActiveShop] = useState<boolean>(false);

  return (
    <>
      <ShoppingCartBTN
        setActiveShop={setActiveShop}
        itemsTotalAmount={itemsTotalAmount}
      />
      {activeShop && (
        <ShoppingCartWrapper
          isItems={!data?.[0] ? true : false}
          setActiveShop={setActiveShop}
          totalPrice={totalPrice}
        >
          <CartItemsList
            data={data}
            handleAddToCart={handleAddToCart}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        </ShoppingCartWrapper>
      )}
    </>
  );
};

export default ShoppingCart;
