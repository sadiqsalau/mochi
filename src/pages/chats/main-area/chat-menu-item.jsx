import clsx from "clsx";
import { FaChevronRight } from "react-icons/fa";

export const ChatMenuItem = (props) => (
  <div className="flex items-center pl-2 gap-2">
    {/* Icon */}
    <span
      className={clsx(
        "shrink-0 bg-green-500 text-white p-1 rounded-full",
        "w-8 h-8 inline-flex justify-center items-center"
      )}
    >
      <props.icon className="h-6" />
    </span>

    <div className="grow flex gap-2 items-center px-2 py-3 border-b border-collapse">
      {/* Title */}
      <div className="grow">{props.title}</div>

      {/* Chevron */}
      <FaChevronRight className="text-green-500" />
    </div>
  </div>
);
