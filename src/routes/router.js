import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home/page";
import Register from "../pages/auth/register";
import Login from "../pages/auth/login";
import Empleados from "../pages/empleados/page";
import Pedidos from "../pages/pedidos/page";
import Productos from "../pages/productos/page";

export const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/empleados", element: <Empleados /> },
    { path: "/pedidos", element: <Pedidos /> },
    { path: "/productos", element: <Productos /> },
])
