import clsx from "clsx";
import { Spinner } from "@/components/spinner/spinner";

export const SuspenseFallback = () => (
  <div
    className={clsx(
      "min-h-screen supports-[min-height:100dvh]:min-h-[100dvh]",
      "flex justify-center items-center"
    )}
  >
    <Spinner />
  </div>
);
