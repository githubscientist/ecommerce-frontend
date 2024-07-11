import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import HomeWrapper from "./Wrappers/HomeWrapper";
import Register from "./components/Register";
import Login from "./components/Login";
import DashboardWrapper from "./Wrappers/DashboardWrapper";
import userLoaders from "./loaders/userLoaders";
import ProtectedRoute from "./Routes/ProtectedRoute";
import LoginRoute from "./Routes/LoginRoute";
import AdminDashboardWrapper from "./Wrappers/AdminDashboardWrapper";
import CreateProduct from "./components/CreateProduct";
import AdminRoute from "./Routes/AdminRoute";
import ViewProducts from "./components/ViewProducts";
import productLoaders from "./loaders/productLoaders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginRoute />,
    loader: userLoaders.checkAuth,
    children: [
      {
        path: "",
        element: <HomeWrapper />,
        children: [
          {
            path: "/",
            element: <Home />
          },
          {
            path: "register",
            element: <Register />
          },
          {
            path: "login",
            element: <Login />
          }
        ]
      }
    ]
  },
  {
    path: "dashboard",
    element: <ProtectedRoute />,
    loader: userLoaders.checkAuth,
    children: [
      {
        path: "",
        element: <DashboardWrapper />,
        loader: userLoaders.getUser,
        children: [
          {
            path: "products",
            element: <ViewProducts />,
            loader: productLoaders.viewProducts
          }
        ]
      }
    ]
  },
  {
    path: "admin",
    element: <ProtectedRoute />,
    loader: userLoaders.checkAuth,
    children: [
      {
        path: "",
        element: <AdminRoute />,
        loader: userLoaders.getUser,
        children: [
          {
            path: "",
            element: <AdminDashboardWrapper />,
            loader: userLoaders.getUser,
            children: [
              {
                path: "products",
                element: <CreateProduct />
              }
            ]
          }
        ]
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App;