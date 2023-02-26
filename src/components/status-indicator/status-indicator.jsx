import clsx from "clsx";

export const StatusIndicator = (props) => (
  <div className="inline-flex gap-1 items-center">
    <span
      className={clsx(
        "inline-block p-[4px] rounded-full",
        {
          online: "bg-green-500",
          offline: "bg-red-500",
          busy: "bg-yellow-400",
        }[props.status]
      )}
    ></span>
    {props.showText ? (
      <span
        className={clsx(
          "text-[0.9375rem]",
          {
            online: "text-green-500",
            offline: "text-red-500",
            busy: "text-yellow-400",
          }[props.status]
        )}
      >
        {props.status}
      </span>
    ) : null}
  </div>
);
