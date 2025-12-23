import { useNavigate } from "react-router-dom"
import { Button } from "../../../shared/ui/ButtonStart/Button";


function ButtonRegister() {
    const navigate = useNavigate()

    const handleClick = () => navigate("/notFoundPage");

  return (
    <Button text={"Регистрация"} onClick={handleClick} />
  )
}

export default ButtonRegister