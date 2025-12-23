import { useNavigate } from "react-router-dom";
import { Button } from "../../../shared/ui/ButtonStart/Button";
import styles from './ButtonStart.module.css'

function ButtonStart() {
  const navigate = useNavigate();

  const handleClick = () => navigate("/products");
  
  return (
      <Button text={"Start shopping"} onClick={handleClick} className={styles.start} />
  );
}

export default ButtonStart;
