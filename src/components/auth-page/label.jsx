import { forwardRef } from "react";

import { useFormGroup } from "./form-group-context";

export const Label = forwardRef((props, ref) => {
  const { id } = useFormGroup();
  return (
    <label {...props} ref={ref} htmlFor={props.htmlFor || id}>
      {props.children}
    </label>
  );
});
