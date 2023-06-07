import clsx from "clsx";
import { forwardRef } from "react";

import Gif from "./spinner.gif";

// Base spinner
export const Spinner = forwardRef((props, ref) => (
  <img
    {...props}
    ref={ref}
    src={Gif}
    alt={props.alt || "Loading..."}
    className={clsx(props.className, "w-7 h-7")}
  />
));


// Centered spinner
export const CenteredSpinner = forwardRef((props, ref) => (
    <div className="flex justify-center">
        <Spinner {...props} ref={ref} />
    </div>
));

// FullScreen spinner
export const FullScreenSpinner = forwardRef((props, ref) => (
    <div
        className={clsx(
            "flex justify-center items-center",
            "h-screen supports-[height:100dvh]:h-[100dvh]"
        )}
    >
        <Spinner {...props} ref={ref} />
    </div>
));
