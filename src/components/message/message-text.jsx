import clsx from "clsx";

export const MessageText = (props) => (
  <div
    className={clsx(
      // Container
      "inline-flex p-1 px-2 rounded-2xl relative",
      props.sent ? "bg-green-100" : "bg-stone-100",

      //   Before
      "before:w-2 before:h-2 before:absolute before:bottom-0",
      props.sent
        ? ["before:right-0", "before:rounded-bl-2xl before:bg-green-100"]
        : ["before:-left-0", "before:rounded-br-2xl before:bg-stone-100"],

      //   After
      "after:w-2 after:h-2 after:absolute",
      "after:bottom-0 after:bg-white",
      props.sent
        ? ["after:-right-[0.35rem]", "after:rounded-bl"]
        : ["after:-left-[0.35rem]", "after:rounded-br"]
    )}
  >
    {props.children}
  </div>
);
