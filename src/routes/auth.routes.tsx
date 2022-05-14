import { Route } from "react-router-dom";
import { LayoutHome } from "../layouts/LayoutHome";
import { Home } from "../pages/Home";

export const authRoutes = () => (
  <Route path="/" element={<LayoutHome />}>
    <Route index element={<Home />} />
  </Route>
);
