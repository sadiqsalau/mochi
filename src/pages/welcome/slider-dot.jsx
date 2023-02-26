import clsx from "clsx";
import { forwardRef } from "react";

export const SliderDot = forwardRef((props, ref) => (
  <span
    {...props}
    ref={ref}
    className={clsx(
      "inline-block h-2 w-5 rounded-full",
      "bg-[#FAFFF2] shadow",
      "[.slick-active_>_&]:bg-green-500"
    )}
  ></span>
));
