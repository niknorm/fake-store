import { useNavigate } from "react-router-dom";

export const useStartShopping = () => {
  const navigate = useNavigate();

  return () => navigate("/products");
};
