import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./app/store";
import { Provider } from "react-redux";
import Home from "./Components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
])

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App;