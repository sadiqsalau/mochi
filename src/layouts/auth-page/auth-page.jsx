import Logo from "@/assets/logo.svg";
import { Link, Outlet } from "react-router-dom";

import { AuthPageContainer } from "./auth-page-container";

export const AuthPage = () => (
  <AuthPageContainer>
    {/* Logo */}
    <Link to="/" className="mx-auto">
      <img src={Logo} className="w-16 h-16" />
    </Link>

    <Outlet />
  </AuthPageContainer>
);
