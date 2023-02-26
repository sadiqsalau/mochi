import clsx from "clsx";

export const Slide = (props) => (
  <div
    className={clsx(
      "flex flex-col gap-4 items-center",
      "w-10/12 max-w-xs mx-auto"
    )}
  >
    <div>
      <img src={props.image} />
    </div>
    <h3 className="font-bold">{props.title}</h3>
    <p className="text-center">{props.text}</p>
  </div>
);
