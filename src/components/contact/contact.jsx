import { StatusIndicator } from "../status-indicator/status-indicator";

export const Contact = (props) => (
  <div className="flex gap-2 items-center p-2 hover:bg-green-50">
    {/* Avatar */}
    <div className="shrink-0 h-10 w-10">
      <img className="h-full w-full object-cover" src={props.photo} />
    </div>

    {/* Details */}
    <div className="flex-1 ">
      <h4>{props.name}</h4>
      {props.status ? <StatusIndicator status={props.status} showText /> : null}
    </div>
  </div>
);
