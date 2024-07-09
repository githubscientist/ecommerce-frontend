import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
])

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;