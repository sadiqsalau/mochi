import clsx from "clsx";
import {
  FaCamera,
  FaChevronCircleUp,
  FaMicrophone,
  FaSmile,
} from "react-icons/fa";
import { Message } from "@/components/message/message";
import { chatMessages } from "@/fake/chat-messages";
import { useLocation } from "react-router-dom";

import { ChatMenu } from "./chat-menu";
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
            "xl:divide-x",
            location.state?.showMenu && "-translate-x-1/2"
          )}
        >
          {/* Messages Box */}
          <div className="flex flex-col">
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
              <div className="bg-[#FAFFF2] py-2 flex items-center">
                {/* More Button */}
                <button className="px-2">
                  <FaChevronCircleUp className="w-6 h-6" />
                </button>

                <div className="relative grow">
                  {/* Text */}
                  <input
                    className="w-full bg-white shadow rounded p-1 pr-7"
                    type="text"
                  />
                  {/* Emoji */}
                  <span className="absolute right-1 top-1/2 -translate-y-1/2">
                    <FaSmile className="w-5 h-5" />
                  </span>
                </div>

                <div className="flex divide-x">
                  {/* Photo */}
                  <button className="px-2">
                    <FaCamera className="w-6 h-6" />
                  </button>

                  {/* Audio */}
                  <button className="px-2">
                    <FaMicrophone className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Menu */}
          <ChatMenu />
        </div>
      </div>
    </div>
  );
};
