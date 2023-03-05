import { FormGroup, Input, Label, SubmitButton } from "@/components/auth-page";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { SocialLogin } from "@/partials/social-login/social-login";
import { Switch } from "@headlessui/react";
import { Toggle } from "@/components/auth-page/toggle";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <form
      className="space-y-4"
      onSubmit={(ev) => {
        ev.preventDefault();
        navigate("/chats");
      }}
    >
      <div className="space-y-2 mb-5">
        {/* Username */}
        <FormGroup>
          <Label>Username</Label>
          <Input autoComplete="username email" />
        </FormGroup>

        {/* Password */}
        <FormGroup>
          <Label>Type your password</Label>
          <Input type="password" autoComplete="new-password" />
        </FormGroup>

        {/* Remember Me */}
        <Switch.Group as="div" className="flex justify-between gap-4">
          <Switch.Label>Remember Me</Switch.Label>
          <Switch as={Fragment}>
            {({ checked }) => <Toggle checked={checked} />}
          </Switch>
        </Switch.Group>
      </div>

      {/* Submit Button */}
      <SubmitButton>Login</SubmitButton>

      {/* Social Login */}
      <SocialLogin heading="Link your social media profiles" />

      {/* Registration Link */}
      <p className="text-center">
        Not registered yet?{" "}
        <Link to="/register" className="text-blue-500 hover:underline">
          Sign up!
        </Link>
      </p>
    </form>
  );
};
