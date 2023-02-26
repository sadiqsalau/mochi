import clsx from "clsx";
import { Link } from "react-router-dom";

export const AuthLink = (props) => (
  <Link
    {...props}
    className={clsx(
      "bg-green-500 text-white",
      "px-3 py-2 rounded-full",
      "font-bold uppercase text-center",
      "min-w-[100px]"
    )}
  >
    {props.children}
  </Link>
);
