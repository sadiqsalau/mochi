import clsx from "clsx";
import { forwardRef } from "react";

export const ProfileButton = forwardRef((props, ref) => (
  <button
    {...props}
    ref={ref}
    className={clsx(
      props.className,
      "w-12 h-12",
      "flex justify-center items-center",
      "rounded-full"
    )}
  >
    {props.children}
  </button>
));
