import React, { Routes, Route } from "react-router-dom";
import { VFC, memo } from "react";
import { Login } from "../components/pages/Login";
import { homeRoutes } from "./HomeRoutes";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { LoginUserProvider } from "../providers/LoginUserProvider";

export const Router: VFC = memo(() => {
  return (
    <>
      <LoginUserProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          {homeRoutes.map(route => (
            <Route
              path={`/home${route.path}`}
              element={<HeaderLayout>{route.children}</HeaderLayout>}
              key={route.path}
            />
          ))}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </LoginUserProvider>
    </>
  );
});
