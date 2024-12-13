import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Pagina404 } from "./pages/Pagina404";
import { Estudante } from "./pages/Estudante";
import { Pagamento } from "./pages/Pagamento";


const rotas = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Login />}>
      <Route path="home" element={<Home />} />
      <Route path="pagamento" element={<Pagamento />} />
      <Route path="estudante" element={<Estudante />} />
      <Route path="*" element={<Pagina404 />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={rotas} />
  </StrictMode>
);