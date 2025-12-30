import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

export const useDeleteItem = () => {
  const dispatch = useDispatch();

  return (id: number) => {
    dispatch(deleteItem(id));
  };
};
