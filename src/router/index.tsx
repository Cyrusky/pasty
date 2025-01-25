import { Navigate, Route, Routes } from "react-router";
import { paths, routes } from "@/router/routes.tsx";

export const Router = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      <Route path="*" element={<Navigate to={paths.home} />} />
    </Routes>
  );
};
