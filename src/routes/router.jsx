import { Outlet } from "react-router-dom";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";


import { Layout, Page } from "./loaders";
import { FullScreenSpinner } from "@/components/spinner/spinner";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Page page="Welcome" fallback={<FullScreenSpinner />} />} />

      <Route element={<Layout layout="AuthPage" />}>
        <Route path="login" element={<Page page="Login" />} />
        <Route path="register" element={<Page page="Registration" />} />
      </Route>

      <Route path="chats" element={<Page page="Chats" fallback={<FullScreenSpinner />} />} />
    </>
  ),
  {
    basename: import.meta.env.BASE_URL,
  }
);
