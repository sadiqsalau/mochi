import clsx from "clsx";
import { forwardRef } from "react";

export const HeaderButton = forwardRef((props, ref) => (
  <button
    {...props}
    ref={ref}
    className={clsx(
      props.className,
      "aspect-square inline-flex justify-center items-center",
      "text-green-500"
    )}
  >
    {props.children}
  </button>
));
