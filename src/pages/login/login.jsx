import { FormGroup, Input, Label, SubmitButton } from "@/components/auth-page";
import { Link } from "react-router-dom";
import { SocialLogin } from "@/partials/social-login/social-login";

export const Login = () => {
  return (
    <form className="flex flex-col gap-2">
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

      {/* Submit Button */}
      <SubmitButton className="mt-10">Login</SubmitButton>

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
