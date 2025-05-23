import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home/page";
import Login from "../pages/auth/login";
import Empleados from "../pages/empleados/page";
import Pedidos from "../pages/pedidos/page";
import Productos from "../pages/productos/page";
import Clientes from "../pages/clientes/page";

export const router = createBrowserRouter([
    { path: "/home", element: <Home /> },
    { path: "/", element: <Login /> },
    { path: "/empleados", element: <Empleados /> },
    { path: "/pedidos", element: <Pedidos /> },
    { path: "/productos", element: <Productos /> },
    { path: "/clientes", element: <Clientes /> },
])
