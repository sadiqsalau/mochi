import clsx from "clsx";

export const Header = (props) => (
  <div
    className={clsx(
      "h-12 relative z-10 bg-white",
      "shadow-[0px_2px_2px_0px] shadow-stone-100",
      "grid grid-cols-[1fr_2fr_1fr]"
    )}
  >
    <div className="flex justify-start">{props.left}</div>
    <div className="flex justify-center">{props.center}</div>
    <div className="flex justify-end">{props.right}</div>
  </div>
);
