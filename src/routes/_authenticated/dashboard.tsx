import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/dashboard")({
  component: Dashboard,
});

function Dashboard() {
  const { auth } = Route.useRouteContext();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <p className="mt-4">
        Welcome {auth.user?.firstName} {auth.user?.lastName}
      </p>

      <p>{auth.user?.email}</p>
    </div>
  );
}
