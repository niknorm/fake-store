import type { RootState } from "../../../app/providers/store/appStore";

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartTotalPrice = (state: RootState): number =>
  state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
