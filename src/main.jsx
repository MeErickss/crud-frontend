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
    <>
      {/* Rota principal de login */}
      <Route path="/" element={<Login />} />
      
      {/* Rota para home */}
      <Route path="/home" element={<Home />} />
      
      {/* Rota para pagamento */}
      <Route path="/pagamento" element={<Pagamento />} />
      
      {/* Rota para estudante */}
      <Route path="/estudante" element={<Estudante />} />
      
      {/* Rota para páginas não encontradas */}
      <Route path="*" element={<Pagina404 />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={rotas} />
  </StrictMode>
);
