import clsx from "clsx";

export const NavItem = (props) => (
  <span
    className={clsx(
      "flex-1",
      "group inline-flex flex-col justify-center items-center",
      "hover:bg-green-50"
    )}
  >
    {/* Icon */}
    <span
      className={clsx(
        "h-9 w-9 rounded-full",
        "flex justify-center items-center",
        props.active ? "bg-green-500 text-white" : "text-green-500"
      )}
    >
      <props.icon className="w-6" />
    </span>

    {/* Title */}
    <span className={clsx("lowercase text-xs", props.active && "font-bold")}>
      {props.title}
    </span>
  </span>
);
