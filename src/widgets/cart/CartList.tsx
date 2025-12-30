import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotalPrice,
} from "../../entities/cart/model/selectors";
import styles from "./Cart.module.css";
import { useNotFoundPage } from "../../shared/ui/Button/libs/useNotFound";
import { useDeleteItem } from "../../entities/cart/model/useDeleteItem";

export const CartList = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);
  const handleClick = useNotFoundPage();
  const deleteItem = useDeleteItem();

  if (cartItems.length === 0) {
    return <h2>Корзина пуста</h2>;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.cartList}>
        {cartItems.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <img className={styles.image} src={item.images[0]} alt="" />
            <h3>{item.title}</h3>
            <p>quantity: {item.quantity}</p>
            <p>price : {item.price}$</p>

            <span
              className={styles.deleteButton}
              onClick={() => deleteItem(item.id)}
            >
              ✖
            </span>
          </div>
        ))}
      </div>
      <div className={styles.sideBar}>
        <p>total price: {totalPrice} $</p>
        <button className={styles.button} onClick={handleClick}>
          К оплате
        </button>
      </div>
    </div>
  );
};
