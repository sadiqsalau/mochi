import clsx from "clsx";
import { forwardRef } from "react";

import Gif from "./spinner.gif";

export const Spinner = forwardRef((props, ref) => (
  <img
    {...props}
    ref={ref}
    src={Gif}
    alt={props.alt || "Loading.."}
    className={clsx(props.className, "w-7 h-7")}
  />
));
