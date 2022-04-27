import { Navigate, Route } from "react-router-dom";
import { LayoutHome } from "../layouts/LayoutHome";
import { Home } from "../pages/Home";
import { NewRoom } from "../pages/NewRoom";

const appRoutes = () => {
  return (
    <Route path="/rooms" element={<LayoutHome />}>
      <Route path="new" element={<NewRoom />} />
      <Route index element={<Home />} />
    </Route>
  );
};

const defaultAppRoutes = () => (
  <Route path="*" element={<Navigate to="/rooms" />} />
);

export { appRoutes, defaultAppRoutes };
