import { createFileRoute, redirect } from "@tanstack/react-router";
import { LoginForm } from "@/components/login-form";

export const Route = createFileRoute("/")({
  beforeLoad: ({ context }) => {
    console.log(context.auth.isAuthenticated);
    console.log(context.auth);
    if (context.auth.user) {
      throw redirect({ to: "/dashboard" });
    }
  },
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
