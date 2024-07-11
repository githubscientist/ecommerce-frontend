import { Navigate, Outlet, useLoaderData } from "react-router-dom";

const AdminRoute = () => {

    const user = useLoaderData();
    
    return user.data.user.role === 'admin' ? <Outlet /> : Navigate({ to: "/dashboard", replace: true });
}

export default AdminRoute;