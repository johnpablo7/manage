import { BrowserRouter, Routes, Route } from "react-router-dom";
// Layouts
import { Layout } from "../layouts/Layout";
// Pages
import { Home } from "../components/pages/Home";
import { Signup } from "../components/pages/Signup";
import { Login } from "../components/pages/Login";
import { NotFound } from "../components/pages/NotFound";
import { Boards } from "../components/pages/Boards";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
        </Route>

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/boards" element={<Boards />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
