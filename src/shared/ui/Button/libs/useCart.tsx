import { useNavigate } from "react-router-dom";

export const useCart = () => {
  const navigate = useNavigate();

  return () => navigate("/cart");
};
