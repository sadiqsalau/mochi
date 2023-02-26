import clsx from "clsx";

export const Header = (props) => (
  <div
    className={clsx(
      "bg-white shadow-[0px_2px_2px_0px] shadow-stone-100 sticky top-0 p-2",
      "flex justify-center items-center"
    )}
  >
    <div className="text-center font-bold">{props.title}</div>
  </div>
);
