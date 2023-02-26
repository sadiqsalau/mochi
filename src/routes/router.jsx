import { Outlet } from "react-router-dom";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Suspense } from "react";

import { Layout } from "./layout";
import { Page } from "./page";
import { SuspenseFallback } from "./suspense-fallback";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={
        <Suspense fallback={<SuspenseFallback />}>
          <Outlet />
        </Suspense>
      }
    >
      <Route index element={<Page page="Welcome" />} />

      <Route element={<Layout layout="AuthPage" />}>
        <Route path="login" element={<Page page="Login" />} />
        <Route path="register" element={<Page page="Registration" />} />
      </Route>
    </Route>
  ),
  {
    basename: import.meta.env.BASE_URL,
  }
);
