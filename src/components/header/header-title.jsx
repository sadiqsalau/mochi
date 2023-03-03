import clsx from "clsx";
import { forwardRef } from "react";

export const HeaderTitle = forwardRef((props, ref) => (
  <h3
    {...props}
    ref={ref}
    className={clsx(props.className, "font-bold text-center self-center")}
  >
    {props.children}
  </h3>
));
