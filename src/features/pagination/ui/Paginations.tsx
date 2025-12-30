import styles from "./Pagination.module.css";

interface Props {
  page: number;
  isLastPage: boolean;
  onNext: () => void;
  onPrev: () => void;
}

export const Pagination = ({ page, isLastPage, onNext, onPrev }: Props) => {
  return (
    <>
      <div className={styles.togglePages}>
        <button disabled={page === 0} className={styles.arrow} onClick={onPrev}>
          ⇦
        </button>
        <button disabled={isLastPage} className={styles.arrow} onClick={onNext}>
          ⇨
        </button>
      </div>
    </>
  );
};
