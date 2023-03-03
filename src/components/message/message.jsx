import clsx from "clsx";

import { MessageText } from "./message-text";

export const Message = (props) => (
  <div className="flex gap-2">
    <div
      className={clsx(
        "grow flex gap-2 items-center",
        props.mode == "sent" && "justify-end"
      )}
    >
      {/* Photo */}
      {props.mode === "received" ? (
        <img src={props.userPhoto} className="w-10 h-10 self-end" />
      ) : null}

      {/* Text */}
      <MessageText sent={props.mode === "sent"}>{props.text}</MessageText>
    </div>

    {/* Time */}
    <span className="text-stone-400 text-sm shrink-0">{props.time}</span>
  </div>
);
