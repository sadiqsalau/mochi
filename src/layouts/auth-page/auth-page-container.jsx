import clsx from "clsx";

export const AuthPageContainer = (props) => (
  <div
    className={clsx(
      "container mx-auto p-4",
      "min-h-screen supports-[min-height:100dvh]:min-h-[100dvh]",
      "flex flex-col justify-center"
    )}
  >
    <div className={clsx("w-4/5 max-w-[280px] mx-auto", "flex flex-col gap-8")}>
      {props.children}
    </div>
  </div>
);
