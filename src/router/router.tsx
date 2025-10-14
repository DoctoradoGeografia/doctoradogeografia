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
import ErrorPage from "../pages/ErrorPage.tsx";
import ProtectedRoute from "../components/ProtectedRoute.tsx";
import Noticia from "../components/Noticias/Noticia.tsx";
import CursoDetalle from "../components/Courses/CursoDetalle.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
      },
      {
        path: "/doctorado",
        element: <Doctorado />,
        errorElement: <ErrorPage />
      },
      {
        path: "/noticias",
        element: <Noticias />,
        errorElement: <ErrorPage />
      },
      {
        path: "/cursos",
        element: <Cursos />,
        errorElement: <ErrorPage />
      },
      {
        path: "/contacto",
        element: <Contacto />,
        errorElement: <ErrorPage />
      },
      {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
        errorElement: <ErrorPage />
      },
      {
        path: "/noticias/:id",
        element: <Noticia />,
        errorElement: <ErrorPage />
      },
      {
        path: "/cursos/:id",
        element: <CursoDetalle />,
        errorElement: <ErrorPage />
      },
      {
        path: "*",
        element: <NotFound />
      }

    ]
  }
]);