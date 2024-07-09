import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    return children;
}

export default ProtectedRoute;