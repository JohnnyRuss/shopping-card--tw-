import { FC } from "react";
import { CartItemType } from "../../interface";

interface Item {
  item: CartItemType;
  handleAddToCart: (item: CartItemType) => void;
}

const Cart: FC<Item> = ({ item, handleAddToCart }) => {
  return (
    <div className="w-full flex flex-col border-gray-600 border-2 p-2 rounded-md shadow-md">
      <figure className="row-[1]">
        <img
          className="object-contain object-center w-full aspect-square"
          src={item.image}
          alt={item.description}
        />
      </figure>
      <div className="grid grid-rows-[46px_100px_20px] mt-2 mb-2">
        <h3 className="font-medium row-[1]" title={item.title}>
          {item.title.length > 60
            ? `${item.title.slice(0, 60)}...`
            : item.title}
        </h3>
        <p className="row-[2] mt-2">
          {item.description.length > 80
            ? `${item.description.slice(0, 80)}...`
            : item.description}
        </p>
        <span className="font-medium row-[3]">${item.price}</span>
      </div>
      <button
        onClick={() => handleAddToCart(item)}
        className="mt-auto p-4 bg-blue-600 text-[#fff] capitalize rounded-md"
      >
        add to cart
      </button>
    </div>
  );
};

export default Cart;
