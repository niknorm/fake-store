import { useNavigate } from "react-router-dom"
import { Button } from "../../../shared/ui/ButtonStart/Button";
import styles from './ButtonAbout.module.css'


function ButtonAbout() {
    const navigate = useNavigate()

    const handleClick = () => navigate("/about");

  return (
    <Button text={"Learn more"} onClick={handleClick} className={styles.learn} />
  )
}

export default ButtonAbout