import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import type { User } from "@/auth";

interface RouterAuth {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

interface RouterContext {
  auth: RouterAuth;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
