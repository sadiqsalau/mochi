import clsx from "clsx";
import { forwardRef } from "react";

export const Toggle = forwardRef(({ checked = false, ...props }, ref) => {
  return (
    <button
      {...props}
      ref={ref}
      className={clsx(
        props.className,
        "relative rounded-full",
        "inline-flex h-6 w-11 items-center",
        checked ? "bg-blue-400" : "bg-gray-200",

        // Before
        checked ? "before:translate-x-6" : "before:translate-x-1",
        "before:inline-block before:h-4 before:w-4",
        "before:transform before:transition",
        "before:rounded-full before:bg-white"
      )}
    />
  );
});
