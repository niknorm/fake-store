import { useGetProductsQuery } from "../../../entities/productCard/api/productApi";
import { ProductsCard } from "../../../entities/productCard/ui/ProductCard";
import styles from "./ProductsList.module.css";
import { useSearch } from "../../../features/search/model/useSearchProduct";
import { SearchInput } from "../../../features/search/ui/SearchInput";
import { Pagination } from "../../../features/pagination/ui/Paginations";
import { usePagination } from "../../../features/pagination/model/usePagination";
import { useCart } from "../../../shared/ui/Button/libs/useCart";

export function ProductsList() {
  const limit = 6;
  const { page, offset, next, prev } = usePagination(limit);
  const { data: products = [], isLoading } = useGetProductsQuery({
    offset,
    limit,
  });

  const {
    query,
    setQuery,
    filteredItems: filteredProducts,
  } = useSearch(products, (product) => product.title);

  const handleClick = useCart();

  const isLastPage = products.length < limit;

  if (isLoading) return <div>Загрузка</div>;
  return (
    <>
      <div className={styles.search}>
        <SearchInput value={query} onChange={setQuery} />
        <span className={styles.cart} onClick={handleClick}>
          🛒
        </span>
      </div>
      <main className={styles.container}>
        {filteredProducts?.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </main>
      <Pagination
        page={page}
        isLastPage={isLastPage}
        onNext={next}
        onPrev={prev}
      />
    </>
  );
}
