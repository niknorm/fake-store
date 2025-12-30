import { useDispatch } from "react-redux";
import type { Products } from "../../productCard/model/Products";
import { addToCart } from "./cartSlice";

export const useAddToCart = () => {
  const dispatch = useDispatch();

  return (product: Products) => {
    dispatch(addToCart(product));
  };
};
