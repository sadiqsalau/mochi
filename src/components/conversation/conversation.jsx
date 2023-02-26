import clsx from "clsx";

import { StatusIndicator } from "../status-indicator/status-indicator";

export const Conversation = (props) => (
  <div className="flex gap-2 p-2 hover:bg-green-50">
    {/* Avatar */}
    <div className="shrink-0 h-10 w-10">
      <img className="h-full w-full object-cover" src={props.photo} />
    </div>

    {/* Details */}
    <div className="flex-1 flex gap-2 items-center">
      <div className="flex-1">
        <h4>{props.title}</h4>

        <div className="flex gap-1 items-center">
          {/* Status Indicator */}
          <StatusIndicator status={props.status} />

          {/* Last Message */}
          <p
            className={clsx(
              "text-[0.9375rem] flex-1",
              props.unreadCount ? "text-blue-500" : "text-stone-600"
            )}
          >
            {props.lastMsg}
          </p>
        </div>
      </div>

      {/* Unread Count */}
      {props.unreadCount ? (
        <span
          className={clsx(
            "bg-orange-400 text-white font-bold",
            "rounded-full leading-none h-5 w-5",
            "inline-flex justify-center items-center"
          )}
        >
          {props.unreadCount}
        </span>
      ) : null}
    </div>
  </div>
);
