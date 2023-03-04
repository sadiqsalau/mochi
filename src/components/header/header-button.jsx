import clsx from "clsx";
import { forwardRef } from "react";

export const HeaderButton = forwardRef(
  ({ as: Component = "button", ...props }, ref) => (
    <Component
      {...props}
      ref={ref}
      className={clsx(
        props.className,
        "aspect-square inline-flex justify-center items-center",
        "text-green-500"
      )}
    >
      {props.children}
    </Component>
  )
);
