import clsx from "clsx";
import { useLocation } from "react-router-dom";

export const ChatsGrid = (props) => {
  const location = useLocation();

  return (
    <div className="w-full overflow-hidden">
      <div
        className={clsx(
          "w-[200%] md:w-full",
          "grid grid-cols-2",
          "md:grid-cols-[320px_1fr] lg:grid-cols-[400px_1fr]",
          "duration-500 transition-transform md:transform-none",
          location.state?.showMainArea && "-translate-x-1/2"
        )}
      >
        {props.children}
      </div>
    </div>
  );
};
