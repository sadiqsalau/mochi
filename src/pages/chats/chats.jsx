import clsx from "clsx";
import { useState } from "react";

import { ChatsProvider } from "./chats-context";
import { SideArea } from "./side-area";

export const Chats = () => {
  const [showMainArea, setShowMainArea] = useState(false);

  const toggleMainArea = () => setShowMainArea(!showMainArea);

  return (
    <ChatsProvider value={{ toggleMainArea }}>
      <div className="w-full overflow-hidden">
        <div
          className={clsx(
            "w-[200%] md:w-full grid grid-cols-2 md:grid-cols-[350px_1fr]",
            "duration-500 md:transform-none",
            showMainArea && "-translate-x-1/2"
          )}
        >
          <SideArea />

          {/* Content */}
          <div className="h-screen overflow-scroll"></div>
        </div>
      </div>
    </ChatsProvider>
  );
};
