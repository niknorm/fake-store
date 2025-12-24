import { useGetProductsQuery } from "../../../entities/productCard/api/productApi";
import { ProductsCard } from "../../../entities/productCard/ui/ProductCard";
import styles from './ProductsList.module.css'

export function ProductsList() {
  const { data, isLoading, error } = useGetProductsQuery(undefined);

  if (isLoading) return <div>Загрузка</div>;
  if (error) return <div>Ошибка</div>;
  console.log(data);
  return (
    <>
      <main className={styles.container}>
        {data?.map((product) => (
          <ProductsCard
            key={product.id}
            slug={product.slug}
            id={product.id}
            images={product.images}
            title={product.title}
            description={product.description}
            category={product.category}
            price={product.price}
          />
        ))}
      </main>
    </>
  );
}
