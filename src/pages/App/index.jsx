import { BrowserRouter, useRoutes } from "react-router-dom"
import "./App.css"
import Home from "../Home/index"
import MyAccount from "../MyAccount/index"
import MyOrders from "../MyOrders/index"
import MyOrder from "../MyOrder/index"
import NotFound from "../NotFound/index"
import SignIn from "../SignIn/index"

const AppRoutes = () => {

  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/*", element: <NotFound /> },
  ])

  return routes
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App;
