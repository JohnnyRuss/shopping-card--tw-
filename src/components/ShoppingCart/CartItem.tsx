import { FC } from "react";
import { CartItemType } from "../../interface/index";

interface Item {
  item: CartItemType;
  handleAddToCart: (item: CartItemType) => void;
  handleRemoveFromCart: (id: number) => void;
}

const CartItem: FC<Item> = ({
  item,
  handleAddToCart,
  handleRemoveFromCart,
}) => {
  return (
    <div className="flex gap-2">
      <div className="flex flex-col gap-2 w-3/4">
        <h4 className="font-medium">{item.title}</h4>
        <p className="flex justify-between mt-2">
          <span>Price: </span><span className="font-bold">${item.price}</span>
          <span>Total: </span><span className="font-bold">${(item.amount * item.price).toFixed(2)}</span>
        </p>
        <div className="flex justify-between items-center mt-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleRemoveFromCart(item.id);
            }}
            className="bg-gray-400 flex items-center justify-center w-9 h-9 rounded-sm cursor-pointer"
          >
            -
          </button>
          <span>{item.amount}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart(item);
            }}
            className="bg-gray-400 flex items-center justify-center w-9 h-9 rounded-sm cursor-pointer"
          >
            +
          </button>
        </div>
      </div>
      <figure className="overflow-hidden w-3/12">
        <img
          src={item.image}
          alt={item.title}
          className="object-cover object-center w-full h-full"
        />
      </figure>
    </div>
  );
};

export default CartItem;
