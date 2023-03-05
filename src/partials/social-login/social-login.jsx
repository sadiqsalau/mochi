import { ProfileButton } from "./profile-button";
import { platforms } from "./platforms";

export const SocialLogin = (props) => (
  <>
    {/* Heading */}
    <h4 className="text-center">{props.heading}</h4>

    {/* Platforms */}
    <div className="flex justify-center gap-4">
      {platforms.map(({ icon: Icon, ...props }, i) => (
        <ProfileButton {...props} key={i} type="button">
          <Icon className="w-6 h-6" />
        </ProfileButton>
      ))}
    </div>
  </>
);
