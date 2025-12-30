import styles from "./SearchInput.module.css";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const SearchInput = ({ value, onChange }: Props) => {
  return (
    <input
      className={styles.input}
      placeholder="Найти..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
