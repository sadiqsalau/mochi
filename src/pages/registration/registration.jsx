import { FormGroup, Input, Label, SubmitButton } from "@/components/auth-page";
import { Link } from "react-router-dom";
import { SocialLogin } from "@/partials/social-login/social-login";
import { useNavigate } from "react-router-dom";

export const Registration = () => {
  const navigate = useNavigate();

  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={(ev) => {
        ev.preventDefault();
        navigate("/chats");
      }}
    >
      {/* Email */}
      <FormGroup>
        <Label>Enter your email ID</Label>
        <Input type="email" autoComplete="email" />
      </FormGroup>

      {/* Password */}
      <FormGroup>
        <Label>Type your password</Label>
        <Input type="password" autoComplete="new-password" />
      </FormGroup>

      {/* Password Verification */}
      <FormGroup>
        <Label>Retype your password</Label>
        <Input type="password" autoComplete="new-password" />
      </FormGroup>

      {/* Social Login */}
      <SocialLogin heading="Link your social media profiles" />

      {/* Submit Button */}
      <SubmitButton>Sign Up</SubmitButton>

      {/* Login Link */}
      <p className="text-center py-4">
        Already registered?{" "}
        <Link to="/login" className="text-blue-500 hover:underline">
          Login!
        </Link>
      </p>
    </form>
  );
};
