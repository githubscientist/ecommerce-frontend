import { createContext, useContext, useEffect, useState } from "react";
import userServices from "../services/userServices";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const checkUser = async () => {
            try {
                const { data } = await userServices.getUser();
                setUser(data.user);
            } catch (error) {
                setUser(null);
            }
        }

        checkUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);