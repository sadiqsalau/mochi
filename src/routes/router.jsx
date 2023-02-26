import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Page } from "./page";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Page page="Welcome" />} />
    </>
  ),
  {
    basename: import.meta.env.BASE_URL,
  }
);
