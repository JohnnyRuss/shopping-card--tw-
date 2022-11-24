import { BASE_URL } from "./config";
import { CartItemType } from "../interface";

export const getProductsData = async (): Promise<CartItemType[]> =>
  await (await fetch(BASE_URL)).json();
