import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import HomeWrapper from "./Wrappers/HomeWrapper";
import Register from "./components/Register";
import Login from "./components/Login";
import DashboardWrapper from "./Wrappers/DashboardWrapper";

const router = createBrowserRouter([
  {
    path: "/",
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
  },
  {
    path: "dashboard",
    element: <DashboardWrapper />
  }
])

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;