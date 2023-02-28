import clsx from "clsx";
import { useLocation } from "react-router-dom";

import { MainArea } from "./main-area";
import { SideArea } from "./side-area";

export const Chats = () => {
  const location = useLocation();

  return (
    <div className="w-full overflow-hidden">
      <div
        className={clsx(
          "w-[200%] md:w-full grid grid-cols-2 md:grid-cols-[400px_1fr]",
          "duration-500 md:transform-none",
          location.state?.showMainArea && "-translate-x-1/2"
        )}
      >
        <SideArea />

        {/* Content */}
        <MainArea />
      </div>
    </div>
  );
};
