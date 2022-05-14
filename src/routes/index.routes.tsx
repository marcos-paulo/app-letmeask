import { Navigate, Route, RouteProps, Routes } from "react-router-dom";
import { Loading } from "../components/Loading";
import { useAuthContext } from "../hooks/useAuthContext";
import { appRoutes, defaultAppRoutes } from "./app.routes";
import { authRoutes } from "./auth.routes";

const SystemRoutes = (props: RouteProps) => {
  const { user, loading } = useAuthContext();
  const defaultRoute = <Route path="*" element={<Navigate to="/" />} />;

  if (loading) {
    return <Loading />;
  }

  return (
    <Routes>
      {authRoutes()}
      {!!user && appRoutes()}
      {!!user ? defaultAppRoutes() : defaultRoute}
    </Routes>
  );
};

export { SystemRoutes };
