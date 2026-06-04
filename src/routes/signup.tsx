import { createFileRoute } from "@tanstack/react-router";
import { SignupForm } from "@/components/signup-form";

export const Route = createFileRoute("/signup")({
  component: SignupPage,
});

function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md">
        <SignupForm />
      </div>
    </div>
  );
}
