import type { Products } from "../model/Products";
import styles from "./productCard.module.css";

export const ProductsCard = ({
  images,
  title,
  description,
  price,
  category,
}: Products) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={images[0]} alt="image" />
      </div>

      <div className={styles.title}>
        <h2 className={styles.name}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.wrapperCategory}>
          <p className={styles.category}>{category.name}</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>Price:  {price} $</p>
        <button className={styles.buttonAdd}>Add To Cart</button>
      </div>
    </div>
  );
};
