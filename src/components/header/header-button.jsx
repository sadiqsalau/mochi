import clsx from "clsx";
import { forwardRef } from "react";

export const HeaderButton = forwardRef((props, ref) => (
  <button
    {...props}
    ref={ref}
    className={clsx(
      "w-10 h-10 flex justify-center items-center",
      "text-green-500"
    )}
  >
    {props.children}
  </button>
));
