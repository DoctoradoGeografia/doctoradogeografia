import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import Home from "../pages/Home.tsx";
import Doctorado from "../pages/Doctorado.tsx";
import Noticias from "../pages/Noticias.tsx";
import Cursos from "../pages/Cursos.tsx";
import Contacto from "../pages/Contacto.tsx";
import Login from "../pages/Login.tsx";
import Dashboard from "../pages/Dashboard.tsx";
import NotFound from "../pages/404.tsx";
import ProtectedRoute from "../components/ProtectedRoute.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/doctorado",
        element: <Doctorado />
      },
      {
        path: "/noticias",
        element: <Noticias />
      },
      {
        path: "/cursos",
        element: <Cursos />
      },
      {
        path: "/contacto",
        element: <Contacto />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        )
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
]);