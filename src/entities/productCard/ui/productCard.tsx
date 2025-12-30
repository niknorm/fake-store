import { useAddToCart } from "../../cart/model/useAddToCart";
import type { Products } from "../model/Products";
import styles from "./productCard.module.css";

interface Props {
  product: Products;
}

export const ProductsCard = ({ product }: Props) => {
  const addToCart = useAddToCart();
  const { images, title, description, price, category } = product;
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={images[0]} alt="image" />
      </div>

      <div className={styles.title}>
        <h2 className={styles.name}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.wrapperCategory}>
          <span className={styles.category}>{category.name}</span>
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.price}>Price: {price} $</p>
        <button className={styles.buttonAdd} onClick={() => addToCart(product)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};
