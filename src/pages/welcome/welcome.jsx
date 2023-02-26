import Slider from "react-slick";
import clsx from "clsx";

import { AuthLink } from "./auth-link";
import { Slide } from "./slide";
import { SliderDot } from "./slider-dot";
import { onboarding } from "./onboarding";

export const Welcome = () => (
  <div
    className={clsx(
      "container mx-auto px-4 min-h-screen",
      "flex flex-col gap-4 justify-center"
    )}
  >
    {/* Slider */}
    <Slider
      dots
      autoplay
      arrows={false}
      pauseOnHover={false}
      dotsClass="!flex justify-center gap-2"
      customPaging={() => <SliderDot />}
    >
      {onboarding.map((item, i) => (
        <Slide key={i} {...item} />
      ))}
    </Slider>
    {/* ./Slider */}

    {/* Authentication Links */}
    <div
      className={clsx(
        "w-10/12 max-w-xs mx-auto px-10",
        "flex gap-4 justify-center"
      )}
    >
      <AuthLink to="/login">Login</AuthLink>
      <AuthLink to="/register">Sign Up</AuthLink>
    </div>
    {/* ./Authentication Links */}
  </div>
);
