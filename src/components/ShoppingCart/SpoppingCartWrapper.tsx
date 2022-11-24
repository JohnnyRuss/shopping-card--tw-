import { FC, Dispatch, SetStateAction, ReactNode } from "react";

interface Props {
  setActiveShop: Dispatch<SetStateAction<boolean>>;
  isItems: boolean;
  totalPrice: number;
  children: ReactNode;
}

const ShoppingCartWrapper: FC<Props> = ({
  setActiveShop,
  isItems,
  totalPrice,
  children,
}) => {
  return (
    <div
      onClick={() => setActiveShop(false)}
      className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] flex justify-end"
    >
      <div className="w-80 h-full p-2 flex flex-col gap-4 shadow-xl bg-[#fff]">
        <div className="capitalize font-medium flex items-center justify-between text-2xl mb-2">
          your shopping cart
          <button
            onClick={() => setActiveShop(false)}
            className="flex items-center justify-cener"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15">
              <path
                fill="#000"
                fillRule="evenodd"
                d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z"
              />
            </svg>
          </button>
        </div>
        {totalPrice && (
          <p>
            <span className="capitalize font-medium">Total Price:</span>{" "}
            <span className="font-bold">${totalPrice.toFixed(2)}</span>
          </p>
        )}
        {isItems && (
          <p className="text-center capitalize">
            there are no items in shopping cart
          </p>
        )}
        {children}
      </div>
    </div>
  );
};

export default ShoppingCartWrapper;
