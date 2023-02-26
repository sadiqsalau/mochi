import clsx from "clsx";

export const NavbarContainer = (props) => (
  <div
    className={clsx(
      "w-full h-[60px]",
      "bg-white shadow-[0px_0px_3px_1px] shadow-stone-200",
      "flex justify-center"
    )}
  >
    {props.children}
  </div>
);
