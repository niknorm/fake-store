import { useNavigate } from "react-router-dom"
import { Button } from "../../../shared/ui/ButtonStart/Button";


function ButtonSignIn() {
    const navigate = useNavigate()

    const handleClick = () => navigate("/notFoundPage");

  return (
    <Button text={"Вход"} onClick={handleClick} />
  )
}

export default ButtonSignIn