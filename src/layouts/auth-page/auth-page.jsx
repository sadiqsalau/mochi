import Logo from "@/assets/logo.svg";
import clsx from "clsx";
import { Link, Outlet } from "react-router-dom";
import { Spinner } from "@/components/spinner/spinner";
import { Suspense } from "react";

export const AuthPage = () => (
  <div
    className={clsx(
      "container mx-auto p-4",
      "min-h-screen supports-[min-height:100dvh]:min-h-[100dvh]",
      "flex flex-col justify-center"
    )}
  >
    <div className={clsx("w-4/5 max-w-[280px] mx-auto", "flex flex-col gap-8")}>
      {/* Logo */}
      <Link to="/" className="mx-auto">
        <img src={Logo} className="w-16 h-16" />
      </Link>

      <Suspense fallback={<Spinner className="mx-auto" />}>
        <Outlet />
      </Suspense>
    </div>
  </div>
);
