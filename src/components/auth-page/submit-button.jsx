import clsx from "clsx";
import { forwardRef } from "react";

export const SubmitButton = forwardRef((props, ref) => {
  return (
    <button
      {...props}
      ref={ref}
      className={clsx(
        props.className,
        "bg-green-500 text-white",
        "font-bold uppercase",
        "rounded-full p-2.5"
      )}
    >
      {props.children}
    </button>
  );
});
