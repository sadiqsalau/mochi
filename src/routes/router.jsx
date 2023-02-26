import { Outlet } from "react-router-dom";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Suspense } from "react";

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
    </Route>
  ),
  {
    basename: import.meta.env.BASE_URL,
  }
);
