import clsx from "clsx";
import { forwardRef } from "react";

export const HeaderButton = forwardRef((props, ref) => (
  <button
    {...props}
    ref={ref}
    className={clsx(
      props.className,
      "w-12 h-12 inline-flex justify-center items-center",
      "text-green-500"
    )}
  >
    {props.children}
  </button>
));
