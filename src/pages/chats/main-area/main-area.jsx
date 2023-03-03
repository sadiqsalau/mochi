import clsx from "clsx";
import { Message } from "@/components/message/message";
import { chatMessages } from "@/fake/chat-messages";
import { useLocation } from "react-router-dom";

import { MainAreaHeader } from "./main-area-header";

export const MainArea = () => {
  const location = useLocation();

  return (
    <div className="h-screen supports-[height:100dvh]:h-[100dvh] flex flex-col">
      {/* Header */}
      <div className="shrink-0">
        <MainAreaHeader />
      </div>

      {/* Content */}
      <div className="grow overflow-hidden">
        <div
          className={clsx(
            "w-[200%] xl:w-full h-full",
            "grid grid-cols-2 grid-rows-[100%] xl:grid-cols-[1fr_400px]",
            "duration-500 xl:transform-none",
            location.state?.showMenu && "-translate-x-1/2"
          )}
        >
          {/* Messages Box */}
          <div className="h-full flex flex-col">
            {/* Messages */}
            <div
              className={clsx(
                "relative grow overflow-y-auto",
                "p-4 flex flex-col gap-4"
              )}
            >
              {chatMessages.map((message, i) => (
                <Message key={i} {...message} />
              ))}
            </div>

            {/* Send Box */}
            <div className="shrink-0">
              <div className="bg-[#FAFFF2] p-2 flex"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
