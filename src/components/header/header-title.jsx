import clsx from "clsx";
import { forwardRef } from "react";

export const HeaderTitle = forwardRef((props, ref) => (
  <h3
    {...props}
    ref={ref}
    className={clsx(props.className, "p-2 font-bold text-center")}
  >
    {props.children}
  </h3>
));
