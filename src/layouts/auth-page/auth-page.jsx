import Logo from "@/assets/logo.svg";
import { Link, Outlet } from "react-router-dom";
import { Spinner } from "@/components/spinner/spinner";
import { Suspense } from "react";

import { AuthPageContainer } from "./auth-page-container";

export const AuthPage = () => (
  <AuthPageContainer>
    {/* Logo */}
    <Link to="/" className="mx-auto">
      <img src={Logo} className="w-16 h-16" />
    </Link>

    <Suspense fallback={<Spinner className="mx-auto" />}>
      <Outlet />
    </Suspense>
  </AuthPageContainer>
);
