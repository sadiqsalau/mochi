import clsx from "clsx";
import { forwardRef } from "react";
import { useId } from "react";

import { FormGroupProvider } from "./form-group-context";

export const FormGroup = forwardRef((props, ref) => {
  const id = useId();
  return (
    <FormGroupProvider value={{ id: `form-group-${id}` }}>
      <div
        {...props}
        ref={ref}
        className={clsx(props.className, "flex flex-col gap-1")}
      >
        {props.children}
      </div>
    </FormGroupProvider>
  );
});
