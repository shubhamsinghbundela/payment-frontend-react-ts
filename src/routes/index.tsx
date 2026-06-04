import { createFileRoute } from "@tanstack/react-router";
import { LoginForm } from "@/components/login-form";

export const Route = createFileRoute("/")({
  component: LoginPage,
});

function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
}
