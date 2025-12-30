import styles from "./Button.module.css";

interface Props {
  className?: string;
  text: string;
  onClick: () => void;
}
export const Button = ({ text, onClick, className }: Props) => {
  console.log(className);
  return (
    <button onClick={onClick} className={`${styles.base} ${className ?? ""}`}>
      {text}
    </button>
  );
};
