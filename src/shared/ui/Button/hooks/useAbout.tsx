import { useNavigate } from "react-router-dom";

export const useAbout = () => {
    const navigate = useNavigate()

    return () => navigate('/about')
}