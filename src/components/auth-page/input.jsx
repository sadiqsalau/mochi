import clsx from "clsx";
import { forwardRef } from "react";

import { useFormGroup } from "./form-group-context";

export const Input = forwardRef((props, ref) => {
  const { id } = useFormGroup();
  return (
    <input
      {...props}
      ref={ref}
      id={props.id || id}
      className={clsx(
        props.className,
        "bg-white rounded-full p-3",
        "border border-green-500 invalid:border-red-400",
        "focus:outline-none focus:bg-[#FAFFF2]"
      )}
    />
  );
});
